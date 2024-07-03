
// import totalPhoneBill from "../totalPhoneBill "

describe('totalPhoneBill', function () {
    it('totalPhoneBill should return R7.45', function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('totalPhoneBill should return R3.40', function () {
        assert.equal('R3.40', totalPhoneBill('call, sms'));

    });

    it('totalPhoneBill should return R1.30', function () {
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});
