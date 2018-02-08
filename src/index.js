import * as anglar from 'angular';
import uiRouter from '@uirouter/angularjs';
import App from './app/';
import About from './about/';
import Everywhere from './everywhere/';

const app = angular
  .module('base', [uiRouter, App, About, Everywhere]);

angular.element(document).ready(() => {
  angular.bootstrap(document.documentElement, [app.name], {
    //strictDi: !('mock' in angular)
  });
});
export default app.name;