# Risk analysis

"Risico analyse" is a web application written in the framework [Ember](https://ember-cli,com/). This is made for Garage 2020, a Dutch company that collects data and creates datasets. This application is made to calculate and analyze this data to create an number/precentage that can be used as an impartial view on the situation. These outcomes can be an indication for them to intervene with the case that they are working on at that moment. The page saves itself in the local storage so nothing is lost on refresh/browsing and of course deletes the information on form reset.

## Concept

A big form. The form dynamically creates itself from a database/json file. It also creates tabs for categories so you can easily switch between the subject you want to add the values for. On the right side you can always get the calculated result of your currently selected values. This is also the place for one or several buttons since this section follows you around the page. One of these buttons is a reset, the other is a print-button to create a printerfriendly version of the form. The page also has a searchbar so you can search for a specific label or words in a label. This makes entering values easy.

## Process

## TODO

- [x] Gather data from api/db
- [x] Dynamically create form
- [x] Searchbar
- [x] Local storage
- [x] Reset button
- [x] Calculate risk
- [x] Cool CSS 😎
- [ ] Category tabs
- [ ] Print button (print-friendly version)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/DanielvandeVelde/frontend-applications`
* `cd frontend-applications`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* Make sure you configure your requests to not use Mirage

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* [mirage](https://www.ember-cli-mirage.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
