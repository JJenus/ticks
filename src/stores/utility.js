import { inject, ref } from "vue";
import currency from "currency.js";
import AWN from "awesome-notifications";
import "awesome-notifications/dist/style.css";

const options = {
	position: "bottom-right",
};

export const alert = {
	success(title = false, message = "") {
		// notify("success", title, message);
		if (title) new AWN().success(title);
		else new AWN(options).success();
	},
	error(title, message = "") {
		// notify("error", title, message);
		new AWN(options).alert(title);
	},
	info(title, message = "") {
		// notify("info", title, message);
		new AWN(options).info(title);
	},
};

export const util = {
	settings: () => {
		return {
			currency: "USD",
			currencySymbol: "$",
			language: "en",
			verificationFee: 5,
		};
	},

	search(area, input) {
		const rjx = new RegExp(input, "i");
		document.querySelectorAll(area).forEach((e) => {
			if (rjx.test(e.innerText)) {
				e.style.display = "block";
			} else {
				e.style.display = "none";
			}
		});
	},

	money(money) {
		const config = inject("settings", {
			currency: "USD",
			currencySymbol: "$",
			language: "en",
			verificationFee: 5,
		});
		const amount = currency(money, {
			symbol: config.value.currencySymbol,
		}).format();
		return amount;
	},

	customRound(number) {
		const decimalPlaces = (number.toString().split('.')[1] || '').length;
		
		if (decimalPlaces <= 2 && parseFloat(number.toFixed(2)) % 1 < 0.01) {
		  return parseInt(number.toFixed(0));
		} else {
		  return parseFloat(number.toFixed(2));
		}
	  }
};

