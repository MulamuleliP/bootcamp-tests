// import countRegNumber from "../countRegNumber"
describe('countRegNumber', function () {
    it('countRegNumber should return a regCount of 3', function () {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

    });

    it('countRegNumber should return a regCount of 1', function () {
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);

    });

});
