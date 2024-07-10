// import fromWhere from "../fromWhere"

describe('fromWhere', function () {
    it('CY 567489 should return Bellville', function () {
        assert.equal(fromWhere('CY 567489'), 'Bellville');
    });

    it('CJ 343502 should return Paarl', function () {
        assert.equal(fromWhere('CJ 343502'), 'Paarl');

    });

    it('CA 987504 should return Cape Town', function () {
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });
    it('ZN 568593 should return Some other place!', function () {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
});
