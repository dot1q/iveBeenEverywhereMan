import testModule from './index';

describe('base module', () => {

    beforeEach(angular.mock(module(testModule)));

    it('asdfasfsa', () => {
        expect(true).toEqual(true);
    });

});