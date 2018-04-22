'use strict'

const handlePullRequestChange = require('./lib/handlePullRequestChange')

const probotPlugin = function (robot) {
  robot.on([
    'pull_request.opened',
    'pull_request.reopened',
    'pull_request.review_requested',
    'pull_request.review_request_removed',
    'pull_request.synchronize',
    'pull_request_review.dismissed',
    'pull_request_review.submitted'
  ], handlePullRequestChange)
}

module.exports = probotPlugin
