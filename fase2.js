module.exports = {
	findDuplicateTransactions: function(transactions = []) {
		let result = [];

		transactions.forEach(element => {

			transactions.forEach(element2 => {
				let sourceAccountEqual = element.sourceAccount = element2.sourceAccount;
				let targetAccountEqual = element.targetAccount = element2.targetAccount;
				let amountEqual = element.amount = element2.amount;
				let categoryEqual = element.category = element2.category;
				
				if(sourceAccountEqual && targetAccountEqual && amountEqual && categoryEqual){
                    //add na lista
                    result.push(element);
				}
			});
		});

		return result;
	}
}