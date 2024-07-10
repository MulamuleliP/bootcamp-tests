// import yearsAgo from "../yearsAgo "

describe('yearsAgo ', function () {
    it('yearsAgo should return 1976', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))

    });
    it('currentYear should return a year 2000', function () {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });

});