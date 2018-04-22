const handlePullRequestChange = require('../../../lib/handlePullRequestChange')

describe('handlePullRequestChange', () => {
  it('is a function.', async () => {
    expect(handlePullRequestChange).toBeInstanceOf(Function)
  })
})
