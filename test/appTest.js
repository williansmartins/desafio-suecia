const assert = require("chai").assert;
const app = require('../app');
const getBalanceByCategoryInPeriod = app.getBalanceByCategoryInPeriod;

let transactionsEmpty = [];

let transactionsAllPossibilities = [
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 10,  category: 'eating_out', time: '1981-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 20,  category: 'eating_out', time: '1982-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: -30, category: 'eating_out', time: '1983-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 40,  category: 'eating_out', time: '2019-04-10T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 50,  category: 'eating_out', time: '2020-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 60,  category: 'fast_foood', time: '1982-07-08T12:34:00Z'},
];

let transactionsNoCategory = [
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 10,  category: 'fast_foood', time: '1982-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 20,  category: 'fast_foood', time: '1982-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: -30, category: 'fast_foood', time: '1982-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 40,  category: 'fast_foood', time: '1982-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 50,  category: 'fast_foood', time: '1982-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 60,  category: 'fast_foood', time: '1982-07-08T12:34:00Z'},
];

let transactionsAllNegative = [
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: -10,  category: 'eating_out', time: '1982-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: -20,  category: 'eating_out', time: '1982-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: -30,  category: 'eating_out', time: '1982-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: -40,  category: 'eating_out', time: '1982-07-08T12:34:00Z'},
];

let transactionsAllPositive = [
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 10,  category: 'eating_out', time: '1982-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 20,  category: 'eating_out', time: '1982-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 30,  category: 'eating_out', time: '1982-07-08T12:34:00Z'},
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 40,  category: 'eating_out', time: '1982-07-08T12:34:00Z'},
];

let transactionsOnlyOne = [
	{ id: 123, sourceAccount: 'my_account', targetAccount: 'coffee_shop', amount: 10,  category: 'eating_out', time: '1982-07-08T12:34:00Z'},
];


describe("getBalanceByCategoryInPeriod()", function() {
	it("returns 0 if there are no transactions", function() {
		assert.equal(
			getBalanceByCategoryInPeriod(
				transactionsEmpty,
				"groceries",
				new Date("1982-07-08"),
				new Date("2019-04-10")
			),
			0
		);
	});

	it("test transactionsAllPossibilities (-10)", function() {
		assert.equal(
			getBalanceByCategoryInPeriod(
				transactionsAllPossibilities,
				"eating_out",
				new Date("1982-07-08"),
				new Date("2019-04-10")
			),
			-10
		);
	});

	it("test transactionsNoCategory (0)", function() {
		assert.equal(
			getBalanceByCategoryInPeriod(
				transactionsNoCategory,
				"eating_out",
				new Date("1982-07-08"),
				new Date("2019-04-10")
			),
			0
		);
	});

	it("test transactionsAllNegative (-100)", function() {
		assert.equal(
			getBalanceByCategoryInPeriod(
				transactionsAllNegative,
				"eating_out",
				new Date("1982-07-08"),
				new Date("2019-04-10")
			),
			-100
		);
	});

	it("test transactionsAllPositive (100)", function() {
		assert.equal(
			getBalanceByCategoryInPeriod(
				transactionsAllPositive,
				"eating_out",
				new Date("1982-07-08"),
				new Date("2019-04-10")
			),
			100
		);
	});

	it("test transactionsOnlyOne (10)", function() {
		assert.equal(
			getBalanceByCategoryInPeriod(
				transactionsOnlyOne,
				"eating_out",
				new Date("1982-07-08"),
				new Date("2019-04-10")
			),
			10
		);
	});

});
