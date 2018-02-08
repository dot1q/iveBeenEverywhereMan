import * as angular from 'angular';
import MapComponent from './map.component';

export default angular
    .module('base.common.map', ['esri.map'])
    .component('mapContainer', MapComponent).name;