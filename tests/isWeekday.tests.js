// import isWeekday from "../isWeekday"
describe('isWeekday', function () {
    it('isWeekday should return false to Saturday ', function () {
        assert.equal(isWeekday('Saturday'), false);
    });
    it('isWeekday should return false to Sunday', function () {
        assert.equal(isWeekday('Sunday'), false);
    });

    it('isWeekday should return true to Monday', function () {
        assert.equal(isWeekday('Monday'), true);
    });
    it('isWeekday should return true to Tuesday', function () {
        assert.equal(isWeekday('Tuesday'), true);
    });

    it('isWeekday should return true to Wednesday', function () {
        assert.equal(isWeekday('Wednesday'), true);
    });
    it('isWeekday should return true to Thursday', function () {
        assert.equal(isWeekday('Thursday'), true);
    });

    it('isWeekday should return true to Friday', function () {
        assert.equal(isWeekday('Friday'), true);
    });
});