'use strict'

const debug = require('debug')('app:handlePullRequestChange')

const updateStatus = require('./updateStatus')

const handlePullRequestChange = async function (context) {
  const { number, head, user } = context.payload.pull_request
  const { data: requests } = await context.github.pullRequests.getReviewRequests(context.repo({ number }))

  let reviews = []
  let page = 0
  let perPage = 100

  while (true) {
    page++
    const received = await context.github.pullRequests.getReviews(context.repo({
      number,
      page,
      per_page: perPage
    }))

    reviews = reviews.concat(received.data)
    if (received.data.length !== perPage) {
      break
    }
  }

  const requestCount = requests.users.length + requests.teams.length

  debug('Requests:', requests, 'Reviews:', reviews, '#Requests:', requestCount)

  const reviewPerUser = {}

  reviews.map(review => {
    if (review.user.id === user.id) {
      // Creators of pull requests can create a review by "commenting to" another review.
      // But they are not allowed to approve. So, simply ignore their actions.
      return
    }
    if (!reviewPerUser[review.user.id] || (review.state === 'CHANGES_REQUESTED')) {
      reviewPerUser[review.user.id] = { finished: false }
    }
    if (['APPROVED', 'DISMISSED'].includes(review.state)) {
      reviewPerUser[review.user.id] = { finished: true }
    }
  })

  debug('ReviewPerUser:', reviewPerUser)

  const success = (requestCount === 0) &&
    Object.keys(reviewPerUser).every(user => reviewPerUser[user].finished)

  debug('ALL REVIEWS COMPLETED:', success)

  await updateStatus({ context, head, success })
}

module.exports = handlePullRequestChange
