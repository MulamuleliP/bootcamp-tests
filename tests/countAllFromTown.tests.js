// import countAllFromTown from "../countAllFromTown "

describe('countAllFromTown', function () {
    it('countAllFromTown should return 3 registration numbers', function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        assert.equal(fromStellies, 3)
    });

    it('countAllFromTown should return 1 registration number', function () {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        assert.equal(fromKuilsriver, 1)

    });
});