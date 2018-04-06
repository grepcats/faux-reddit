# Faux Reddit

#### _An attempt to duplicate the functionality and overall look of Reddit in Angular. 3/30/2018_

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Installation
* clone repository: git clone https://github.com/grepcats/faux-reddit
* install node. if you are on a mac, use `brew install node`. Otherwise, go to https://nodejs.org/en/download/ and download/install the appropriate installer.
* in the project directory, type
```
npm init
npm install (this installs the packages and dependencies listed in the package.json file)

```
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Specs
* Program should list articles
  * Input: arrive on front page
  * Output: view list of existing articles
* Program should allow user to click on article to see details
  * Input: Click on articles
  * Output: view full article details
* Program should allow user to navigate back to the full list of articles
  * Input: Click on home page icon
  * Output: Return to list of articles
* Program should allow user to edit an article (any article for now)
  * Input: Click "edit article"
  * Output: User may update article.
* Program should have header styling similar to reddit
  * Input: adapted header styling from reddit.com
  * Output: a header that more or less looks/acts like reddit header
* Program should have post styling similar to reddit
  * Input: adapted post styling from reddit.com
  * Output: post list that looks similar to reddit post list
* Program should allow user to post an article (title, optional text, choose where to post (profile or subreddit), upvotes, downvotes)
    * Input: Click "new article"
    * Output: Article is added to the list of articles
* Program should allow user to "upvote" or "downvote" an article
  * Input: User clicks respective arrow
  * Output: respective arrow click is recorded on article object
* Program should have post detail styling similar to reddit post styling
  * Input: adapted post detail styling from reddit.com
  * Output: post detail that looks similar to reddit post detail
* Program should allow users to comment on articles
  * Input: from article, comment Form
  * Output: post comment to article
* Program should timestamp posts
  * Input: when user posts, record timestamp along with post
  * Output: store timestamp and display in post list and detail
* Program should allow posts to be sorted by newness
  * Input: click "sort by new"
  * Output: post list page refreshes sorted by newness
* Program should allow posts to be sorted by "top" (highest score of that day)
  * Input: click "sort by top"
  * Output: post list page refreshes sorted by top
//Friday 2
* Program will implement firebase
* Refactor saving posts to use firebase
* Refactor displaying posts to use firebase
* Refactor saving comments to use firebase
* Refactor displaying comments to use firebase
* Refactor date storage and display
* Refactor sorting for new dates
* Implement categories/subreddits
* User authentication
* Associate users with posts/comments
* Allow users to delete own posts only
* Allow users to edit own posts only
* Save articles


## Known Bugs
No known bugs. Functionality is limited to the features listed in "Specs" above.

## Support and Contact Details
If there are any issues or questions, please contact me at kayla.renee at gmail dot com or create an issue in GitHub.

## Technologies Used
JavaScript, Node.js, npm, Bootstrap, Angular 5

## License
MIT License

Copyright (c) 2018 Kayla Ondracek

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
