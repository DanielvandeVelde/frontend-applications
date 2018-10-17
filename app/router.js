import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('intro');
  this.route('over');
  this.route('risicos');
});

export default Router;
