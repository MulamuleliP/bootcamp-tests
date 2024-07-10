
describe('isFromBellville', function () {
    it('isFromBellville should return true to CY 123', function () {
        assert.equal(isFromBellville('CY 123'), true);

    });
    it('isFromBellville should return false to CJ 123', function () {
        assert.equal(isFromBellville('CJ 123'), false);
    });

});
