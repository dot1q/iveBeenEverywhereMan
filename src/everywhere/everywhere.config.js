export default function everywhereConfig($stateProvider) {
    'ngInject';
    $stateProvider.state('base.everywhere', {
    name: 'everywhere',
    url: '/',
    component: 'everywherePage'
    });
}