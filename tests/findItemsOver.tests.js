

describe('findItemsOver', function () {
    const items = [
        { name: 'apples', qty: 10 },
        { name: 'pears', qty: 37 },
        { name: 'bananas', qty: 27 },
        { name: 'apples', qty: 3 }
    ];

    it('should return items that have a quantity over the specified threshold', function () {
        assert.deepEqual(findItemsOver(items, 20), [
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 }
        ]);
    });

});
