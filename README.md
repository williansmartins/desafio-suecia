# Documentation 
## To this exercise - I used a litle of TDD
### 1. First creating  scenarios:
Scenario  | Date | value | include
------------- | -------------|--|--
before date  |  1981-07-08 | 10 | x
exactly start |  1982-07-08 | 20 | ok
middle  |  1983-07-08 | -30 | ok
exactly end  |  2019-04-10 | 40 | x
after date  |  2020-07-08 | 50 | x
wrong category  |  1982-07-08 | 60 | x

### 2. Writing tests:
```
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
```
### 3. Writing implementation code:

![code.jpg](https://github.com/williansmartins/test---javascript/blob/master/code.jpg)
### 4. Then run the lifecycle of tests:

![tests-broken.jpg](https://github.com/williansmartins/test---javascript/blob/master/tests-broken.jpg)


![tests-passing.jpg](https://github.com/williansmartins/test---javascript/blob/master/tests-passing.jpg)

