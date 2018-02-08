import template from './map.html';
import Constants from '../constants';

const mapSymbol = {
    
};

export class MapController {
    constructor(esriLoader, commonServices) {
        'ngInject';
        
        this.alerts = [];
        this.commonServices = commonServices;
        this.esriLoader = esriLoader;
    }

    $onInit() {
        let self = this;

        this.esriLoader.require([
            'esri/Map',
            'esri/views/MapView',
            'esri/symbols/SimpleMarkerSymbol',
            'esri/layers/FeatureLayer',
            'esri/geometry/Point',
            'esri/renderers/UniqueValueRenderer',
            'esri/widgets/Legend',
        ], function(Map, MapView, SimpleMarkerSymbol, FeatureLayer, Point, UniqueValueRenderer, Legend) {

            let visitedMarker = new SimpleMarkerSymbol ({
                style: 'circle',
                size: 12,
                color: [0,255,0,1]
            });
    
            let unVisitedMarker = new SimpleMarkerSymbol ({
                style: 'circle',
                size: 12,
                color: [255,0,0,1]
            });

            let popUpTemplate = {
                title: '{full_name}',
                content: 'Visited: {visited}'
            };

            self.map = new Map({
                basemap: 'streets'
            });

            self.view = new MapView({
                container: 'viewDiv',
                scale: 50000000,
                center: [-89, 40],
                map: self.map
            });

            self.legend = new Legend({
                view: self.view,
            }, 'dashboardMapLegend');

            self.features = [];

            const addFeatureLayer = (features) => {
                return new FeatureLayer({
                    source: features,
                    fields: [{
                        name: 'ObjectID',
                        alias: 'ObjectID',
                        type: 'oid'
                    }, {
                        name: 'title',
                        alias: 'title',
                        type: 'string'
                    }],
                    renderer: new UniqueValueRenderer({
                        field: 'visited',
                        uniqueValueInfos: [{
                            value: true,
                            symbol: visitedMarker,
                            label: 'Visited'
                        },
                        {
                            value: false,
                            symbol: unVisitedMarker,
                            label: 'Not Visited'
                        }]
                    }),
                    objectIdField: 'ObjectID',
                    spatialReference: {
                        wkid: 4326
                    },
                    geometryType: 'point',
                    popupTemplate: popUpTemplate
                });
            }

            self.commonServices.getRequest(Constants.MARKERS_FILE, (error, resultData) => {
                if(error) {
                    self.alerts.push({type: 'danger', msg: 'Error: ' + resultData});
                } else {
                    // place map markers
                    if(Array.isArray(resultData) && resultData.length > 0) {
                        self.features = resultData.map( (feature, i) => {
                            return getGraphicFromJson(feature, i);
                        });
                        self.map.add(addFeatureLayer(self.features));
                    } else {
                        self.alerts.push({type: 'warning', msg: 'No locations parsed'});
                    }
                }
            });

            const getGraphicFromJson = (obj, idx) => {
                return {
                    attributes: {
                        ObjectID: idx,
                        title: obj.name,
                        full_name: obj.name,
                        visited: obj.visited
                    },
                    geometry: new Point({
                        x: obj.lng,
                        y: obj.lat
                    })
                };
            };
        });
    }
};

const MapComponent = {
    bindings: {
    },
    controller: ['esriLoader', 'commonServices', MapController],
    controllerAs: 'ctrl',
    template
};
export default MapComponent;