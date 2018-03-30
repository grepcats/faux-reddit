# Reddit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

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
* Program should allow user to post an article (title, optional text, choose where to post (profile or subreddit), upvotes, downvotes)
  * Input: Click "new article"
  * Output: Article is added to the list of articles
* Program should allow user to edit an article (any article for now)
  * Input: Click "edit article"
  * Output: User may update article.
* Program should allow user to "upvote" or "downvote" an article
  * Input: User clicks respective arrow
  * Output: respective arrow click is recorded on article object
