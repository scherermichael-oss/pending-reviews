'use strict'

const debug = require('debug')('app:updateStatus')

const updateStatus = async function ({ context, head, success }) {
  const state = success ? 'success' : 'pending'

  debug(`New state: ${state}`)

  context.github.repos.createStatus(context.repo({
    context: 'Pending Reviews',
    description: success
      ? `All requested reviews are finished.`
      : 'Some reviews are still in progress.',
    sha: head.sha,
    state
  }))
}

module.exports = updateStatus
