"use strict";

var GoodReadsFeedReader = require('../app/js/goodReadsFeedReader.js');

describe("Goodreads feed reader", function() {
	// var underTest = GoodReadsFeedReader();

	it('should fail', function() {
		console.log(GoodReadsFeedReader);
		expect(GoodReadsFeedReader.goodReadsFeedReader.test()).toBe(true);
	});
});
