# Challenge 2 
## Steps to solution
### 1. First create scenarios to tests:

ID  | time | sourceAccount | targetAccount | amount | category
------------- | -------------|--|--
 333 | '2018-03-02T10:34:30.000Z' | 'xx' |  'yy' |   100 | 'extra'
 33 | '2018-03-02T10:34:30.000Z' | 'xx' |  'yy' |  100 | 'extra'
 3 | '2018-03-02T10:34:30.000Z' | 'A' |  'B' |  100 | 'eating_out'
 1 | '2018-03-02T10:33:00.000Z' | 'A' |  'B' |  100 | 'eating_out'
 6 | '2018-03-02T10:33:05.000Z' | 'A' |  'C' |  250 | 'other'
 4 | '2018-03-02T10:36:00.000Z' | 'A' |  'B' |  100 | 'eating_out'
 2 | '2018-03-02T10:33:50.000Z' | 'A' |  'B' |  100 | 'eating_out'
 5 | '2018-03-02T10:33:00.000Z' | 'A' |  'C' |  250 | 'other'


### 2. Writing tests:
```
  it("returns empty array if there are no transactions",  function() {
    assert.deepEqual(findDuplicateTransactions([]), []);
  });
```
### 3. Writing implementation code:

![teste.jpg](//res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/22d6b98c7b536c32946f9e677fb70008-teste.jpg)

### 4. Then run the lifecycle of tests:

![teste.jpg](//res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/542c1aad136b562f3d02c1ac8cbfcac4-teste.jpg)
