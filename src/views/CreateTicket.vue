<script setup>
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js";
import { onMounted, ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import monent from "moment";
import "@vuepic/vue-datepicker/dist/main.css";
import { bets } from "../stores/bets";

const tickets = ref([]);

const date = ref(new Date());

// localStorage.clear();

// In case of a range picker, you'll receive [Date, Date]
const format = (date) => {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	let hours = date.getHours();
	let mins = date.getMinutes();

	if (mins < 10) mins = "0" + mins;
	if (hours < 10) hours = "0" + hours;

	return `${day}/${month}/${year} | ${hours}:${mins}`;
};

function getTime() {
	let max = 60;
	let min = 50;
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const alertDate = (i, data) => {
	ticket.value.games[i].endDateTime = monent(data)
		.add(1, "hour")
		.add(getTime(), "minutes")
		.toDate();
};

function getId() {
	let max = 37299999999;
	let min = 37200000000;
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const ticket = ref({
	betStatus: "Win",
	id: getId(),
	fromTime: "10:18",
	fromDate: "09/05/2023",
	fromDateTime: new Date(),
	bet: 50,
	totalOdds: "72",
	games: [],
});

function save() {
	ticket.value.games.map((bet) => {
		bet.htScore = `${bet.scores.ht.home}:${bet.scores.ht.away}`;
		bet.shfScore = `${bet.scores.sh.home}:${bet.scores.sh.away}`;
		return bet;
	});
	bets.save(ticket.value);
	ticket.value.games = [];
	addGame();
}

function addGame() {
	ticket.value.games.push({
		competition: "Australia Cup",
		homeTeam: "Everton",
		awayTeam: "Liverpool",
		htScore: "1:2",
		shfScore: "2:1",
		scores: {
			ht: {
				home: 0,
				away: 0,
			},
			sh: {
				home: 0,
				away: 0,
			},
		},
		odds: 0.0,
		event: "Correct Score",
		startDate: "09/05/2023",
		startTime: "19:30",
		startDateTime: new Date(),
		gameStatus: "Game finished",
		endDate: "09/05/2023",
		endTime: "11:22",
		endDateTime: new Date(),
	});
}

const showNew = ref(true);
function toggle() {
	console.log("toggle");
	showNew.value = !showNew.value;
}

onMounted(() => {
	addGame();
});
</script>

<template>
	<div class="container mp-5 bg-info" style="min-height: 100vh">
		<div class="card rounded-4 h-100">
			<div class="card-body">
				<h4 class="text-center h1 mb-3">Create Ticket</h4>

				<div class="row mb-4">
					<div class="col-6">
						<button
							@click="showNew = true"
							class="btn w-100 btn-lg btn-outline-secondary border-primary border-0 border-end border-start"
						>
							New
						</button>
					</div>
					<div class="col-6">
						<button
							@click="showNew = false"
							class="btn w-100 btn-lg btn-outline-secondary border-primary border-0 border-end border-start"
						>
							Previous Tickets
						</button>
					</div>
				</div>

				<div v-if="showNew == true" class="">
					<div class="d-flex justify-content-center">
						<form class="" @submit="save()">
							<div class="mb-5">
								<!-- Header -->
								<div
									class="row g-3 border-bottom mb-3 pb-3 border-dark"
								>
									<div class="col-12">
										<label
											for="exampleInputEmail1"
											class="form-label"
											>Ticket id
											<button
												@click="ticket.id = getId()"
												type="button"
												class="btn btn-outline-primary btn-icon btn-sm ms-3"
											>
												<i
													class="fa-solid fa-refresh"
												></i>
											</button>
										</label>
										<input
											type="number"
											class="form-control form-control-lg"
											v-model="ticket.id"
											aria-describedby="ticket-id"
										/>
									</div>
									<div class="col-6">
										<label
											for="exampleInputEmail1"
											class="form-label"
											>Bet time</label
										>
										<VueDatePicker
											locale="en-gb"
											:format="format"
											v-model="ticket.fromDateTime"
										></VueDatePicker>
										<!-- <input
											type="number"
											class="form-control form-control-lg"
											aria-describedby="bettime"
											v-model="ticket.fromDateTime"
										/> -->
									</div>
									<div class="col-6">
										<label
											for="exampleInputEmail1"
											class="form-label"
											>Stake</label
										>
										<input
											type="number"
											class="form-control form-control-lg"
											aria-describedby="stake"
											v-model="ticket.bet"
										/>
									</div>
								</div>
								<!-- Games -->
								<div
									v-for="(game, index) in ticket.games"
									class="row g-3 justify-content-end mb-4 border-bottom pb-3"
								>
									<div class="col-8">
										<label
											for="exampleInputEmail1"
											class="form-label"
											>Competition</label
										>
										<input
											type="text"
											class="form-control form-control-lg"
											aria-describedby="competition"
											v-model="game.competition"
										/>
									</div>
									<div class="col-4">
										<label
											for="exampleInputEmail1"
											class="form-label"
											>Odds</label
										>
										<input
											type="text"
											class="form-control form-control-lg"
											aria-describedby="odds"
											v-model="game.odds"
										/>
									</div>
									<div class="col-6">
										<label
											for="exampleInputEmail1"
											class="form-label"
											>Home</label
										>
										<input
											type="text"
											class="form-control form-control-lg"
											aria-describedby="home"
											v-model="game.homeTeam"
										/>
									</div>
									<div class="col-6">
										<label
											for="exampleInputEmail1"
											class="form-label"
											>Away team</label
										>
										<input
											type="text"
											class="form-control form-control-lg"
											aria-describedby="away"
											v-model="game.awayTeam"
										/>
									</div>
									<div class="col-6">
										<label
											for="exampleInputEmail1"
											class="form-label"
											>HT score</label
										>
										<div class="row g-3">
											<div class="col-6">
												<label
													for="exampleInputEmail1"
													class="form-label"
													>home</label
												>
												<input
													type="number"
													class="form-control form-control-lg"
													aria-describedby="competition"
													v-model="
														game.scores.ht.home
													"
												/>
											</div>
											<div class="col-6">
												<label
													for="exampleInputEmail1"
													class="form-label"
													>away</label
												>
												<input
													type="number"
													class="form-control form-control-lg"
													v-model="
														game.scores.ht.away
													"
												/>
											</div>
										</div>
									</div>
									<div class="col-6">
										<label
											for="exampleInputEmail1"
											class="form-label"
											>2H score</label
										>
										<div class="row g-3">
											<div class="col-6">
												<label
													for="exampleInputEmail1"
													class="form-label"
													>home</label
												>
												<input
													type="number"
													class="form-control form-control-lg"
													v-model="
														game.scores.sh.home
													"
												/>
											</div>
											<div class="col-6">
												<label
													for="exampleInputEmail1"
													class="form-label"
													>away</label
												>
												<input
													type="number"
													class="form-control form-control-lg"
													v-model="
														game.scores.sh.away
													"
												/>
											</div>
										</div>
									</div>

									<!-- Start time and finish time -->
									<div class="col-6">
										<label
											for="exampleInputEmail1"
											class="form-label"
											>Start time</label
										>
										<!-- <input
											type="text"
											class="form-control form-control-lg"
											aria-describedby="competition"
											v-model="game.startDateTime"
										/> -->
										<VueDatePicker
											locale="en-gb"
											@closed="
												alertDate(
													index,
													game.startDateTime
												)
											"
											:format="format"
											v-model="game.startDateTime"
										></VueDatePicker>
									</div>
									<div class="col-6">
										<label
											for="exampleInputEmail1"
											class="form-label"
											>Time of processing</label
										>
										<VueDatePicker
											locale="en-gb"
											:format="format"
											v-model="game.endDateTime"
										></VueDatePicker>
										<!-- <input
											type="text"
											class="form-control form-control-lg"
											aria-describedby="competition"
											v-model="game.endDateTime"
										/> -->
									</div>
								</div>
								<div class="col-6">
									<button
										@click="addGame()"
										type="button"
										class="btn w-100 btn-secondary"
									>
										<i class="fa-solid fa-plus"></i> add
										game
									</button>
								</div>
							</div>

							<button type="submit" class="w-100 btn btn-primary">
								Save
							</button>
						</form>
					</div>
				</div>

				<div v-else id="prev-tickets" class="card rounded-4">
					<div class="card-body">
						<h1 class="text-center mb-3">Existing Tickects</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css");
</style>
