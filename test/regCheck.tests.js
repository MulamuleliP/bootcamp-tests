
// import regCheck from "../regCheck"

describe('regCheck', function () {
    it('regCheck should return true to DC 55 YU GP ,GP', function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('regCheck should return false to DC 55 YU GP, EC', function () {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('regCheck should return true to 5566 L, L', function () {
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it('regCheck should return false to 5566 L, M', function () {
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    it('regCheck should return true to ERT 123 EC, EC', function () {
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });
    it('regCheck should return false to ERT 123 EC, GP', function () {
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('regCheck should return true to FGT 123 MP, MP', function () {
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });
    it('regCheck should return false to FGT 123 MM, MP', function () {

        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });

});