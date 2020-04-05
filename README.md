# pending-reviews

Checks for requested reviews that are still pending.

# Purpose

While you can enforce a number of approving reviews before merging to a protected branch, not all requested reviews must be completed. GitHub will mark the pull request as mergeable even if there are some outstanding review requests left.

This app checks the state of all requested reviews and leaves the pull request on state `pending` until they have been completed. Only approved or dismissed reviews are completed.

## Credits

The app logo located in [assets/logo.png](assets/logo.png) has been created by [Crumbs + Pixels](https://www.iconfinder.com/crumbsandpixels) and published as ["Chat, comment, feedback, messanger, review icon"](https://www.iconfinder.com/icons/1076760/chat_comment_feedback_messanger_review_icon#size=256) under [Creative Commons (Attribution 3.0 Unported)](https://creativecommons.org/licenses/by/3.0/) license. It is not modified.
