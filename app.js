module.exports = {

	getBalanceByCategoryInPeriod: function(transactions = [], category, start, end) {
		let total = 0;
		let size = transactions.length;

		if(size>0){
			for (var i = size; i > 0; i--) {

				let transaction = transactions[i-1];
				let categoryOk = (transaction.category == category );
				let periodOk   = (new Date(transaction.time.substring(0,10)) >= start && new Date(transaction.time.substring(0,10)) < end );

				if(categoryOk && periodOk){
					total += transaction.amount;
				}
			}
		}

		return total;
	}
}