import * as angular from 'angular';
import angularUi from 'angular-ui-bootstrap';
import uiRouter from '@uirouter/angularjs';
import everywhereConfig from './everywhere.config';
import EverywherePageComponent from './everywhere-page.component';
import map from '../common/map/';

export default angular
    .module('base.everywhere', [uiRouter, angularUi, map])
    .config(everywhereConfig)
    .component('everywherePage', EverywherePageComponent).name;