# pending-reviews

[![CircleCI](https://circleci.com/gh/scherermichael/pending-reviews.svg?style=svg)](https://circleci.com/gh/scherermichael/pending-reviews)

Checks for requested reviews that are still pending.

# Purpose

While you can enforce a number of approving reviews before merging to a protected branch, not all requested reviews must be completed. GitHub will mark the pull request as mergeable even if there are some outstanding review requests left.

This app checks the state of all requested reviews and leaves the pull request on state `pending` until they have been completed. Only approved or dismissed reviews are completed.

## Credits

The app logo located in [assets/logo.png](assets/logo.png) has been created by [Crumbs + Pixels](https://www.iconfinder.com/crumbsandpixels) and published as ["Chat, comment, feedback, messanger, review icon"](https://www.iconfinder.com/icons/1076760/chat_comment_feedback_messanger_review_icon#size=256) under [Creative Commons (Attribution 3.0 Unported)](https://creativecommons.org/licenses/by/3.0/) license. It is not modified.

## License

The MIT License (MIT) Copyright (c) 2018 Michael Scherer.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
