app.factory('funFactory', function() {
	return {
		countMoney: arr => {
			let money = 0;
			let allChecked = true;
			arr.forEach(item => {
				if (item.check) {
					money += item.good.price * item.num;
				} else {
					allChecked = false;
				}
			})
			return {
				allMoney: money,
				allCheck: allChecked
			}

		}
	}
})