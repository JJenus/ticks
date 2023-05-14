import { ref } from "vue";

function getId() {
	let max = 37299999999;
	let min = 37200000000;
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const key = "xxkey132gh@3d";
const tickets = ref([]);

export const bets = {
	bets: () => {
		if (tickets.value.length == 0) tickets.value = bets.getTicks();
		return tickets.value;
	},
	save: (bet) => {
		bets.getTicks();
		tickets.value.push(bet);
		localStorage.setItem(key, JSON.stringify(tickets.value));
	},
	getTicks() {
		let data = localStorage.getItem(key);
		if (data == undefined || data == null) return [];
		tickets.value = JSON.parse(data);
		return JSON.parse(data);
	},
};

[
	{
		betStatus: "Win",
		id: getId(),
		fromTime: "10:18",
		fromDate: "09/05/2023",
		bet: 50,
		totalOdds: "72",
		games: [
			{
				competition: "Australia Cup",
				homeTeam: "Belconnen United",
				awayTeam: "Canberra Olympic",
				htScore: "0:2",
				shfScore: "0:0",
				odds: 3.89,
				event: "Correct Score",
				startDate: "09/05/2023",
				startTime: "09:30",
				gameStatus: "Game finished",
				endDate: "09/05/2023",
				endTime: "11:22",
			},
			{
				competition: "English Premier League",
				homeTeam: "Chelsea",
				awayTeam: "Man United",
				htScore: "4:2",
				shfScore: "1:2",
				odds: 14.11,
				event: "Correct Score",
				startDate: "09/05/2023",
				startTime: "19:30",
				gameStatus: "Game finished",
				endDate: "09/05/2023",
				endTime: "11:22",
			},
		],
	},
	{
		betStatus: "Win",
		id: getId(),
		fromTime: "10:18",
		fromDate: "09/05/2023",
		bet: 50,
		totalOdds: "72",
		games: [
			{
				competition: "English Premier League",
				homeTeam: "Everton",
				awayTeam: "Liverpool",
				htScore: "1:2",
				shfScore: "2:1",
				odds: 8.12,
				event: "Correct Score",
				startDate: "09/05/2023",
				startTime: "19:30",
				gameStatus: "Game finished",
				endDate: "09/05/2023",
				endTime: "11:22",
			},
		],
	},
];
