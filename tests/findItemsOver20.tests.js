describe('findItemsOver20', function () {
    it('should return items that have a quantity over 20', function () {
        var items = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 }
        ];
        
        var results = findItemsOver20(items);
        assert.deepEqual(results, [
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 }
        ]);
    });
});
