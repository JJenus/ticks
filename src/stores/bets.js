import { ref } from "vue";
import { alert } from "./utility";

function getId() {
	let max = 37299999999;
	let min = 37200000000;
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const key = "xxkey132gh@3d";

export const bets = {
	tickets: ref([]),
	bets: () => {
		bets.tickets.value = bets.getTicks();
		return bets.tickets.value;
	},
	save: (bet, index) => {
		const exist = bets.getTicks().some((e) => bet.id === e.id);

		if (index !== false) {
			console.log("index: " + index);
			bets.tickets.value[index] = bet;
		} else {
			if (exist) {
				alert.error(`ID: ${bet.id} already exists. Enter new ID`);
				return;
			}
			console.log("no index: " + index);
			bets.tickets.value.push(bet);
		}
		localStorage.setItem(key, JSON.stringify(bets.tickets.value));
		alert.success("Saved");
	},
	delete: (id) => {
		bets.getTicks();
		bets.tickets.value = bets.tickets.value.filter((e) => e.id != id);
		localStorage.setItem(key, JSON.stringify(bets.tickets.value));
		alert.info("Deleted");
	},
	getTicks: () => {
		let data = localStorage.getItem(key);
		if (data == undefined || data == null) return [];
		bets.tickets.value = JSON.parse(data);
		return JSON.parse(data);
	},
};
