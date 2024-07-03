// import countAllPaarl from "../countAllPaarl "

describe('countAllPaarl ', function () {
    it('countAllPaarl should return 3 registration numbers', function () {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

    });
    it('countAllPaarl should return 2 registration numbers', function () {
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });

});
