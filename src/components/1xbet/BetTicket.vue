<script setup>
import moment from "moment";
import { computed, onMounted, ref } from "vue";
import currency from "currency.js";

const props = defineProps({
	bet: {
		required: true,
	},
});

const settings = ref({
	currency: "USD"
})

const hidden = ref(true);
const banner = ref({});

const money = (money) => {
	const cash = currency(money, {
		symbol: "",
	}).format();

	return cash.split(".")[1] == "00" ? cash.split(".")[0] : cash;
};

const gameType = computed(() => {
	if (props.bet.games.length == 1) return "Single";
	return "Accumulator";
});

const winnings = computed(() => {
	return money(props.bet.totalOdds * props.bet.bet);
});

function ftScore(ht, ft, del = "-") {
	let _ht = ht.split(":");
	let _ft = ft.split(":");
	const home = Number(_ht[0]) + Number(_ft[0]);
	const away = Number(_ht[1]) + Number(_ft[1]);

	return home + del + away;
}

function toggleShow() {
	hidden.value = !hidden.value;
}

function getDateTime(cDate) {
	return moment(cDate).format("DD/MM/YYYY | HH:mm");
}

onMounted(() => {
	// console.log(props.bet);
	banner.value = props.bet.games[0];
});
</script>

<template>
	<div class="">
		<!-- Header details -->
		<div
			:class="hidden ? '' : 'active'"
			class="events__item events__item_head events__item_coupon win"
		>
			<div @click="toggleShow()" class="events__cell">
				<div class="history__cell">
					<div class="history__title">
						<svg class="events__logo events__logo_center">
							<!-- <use
								xlink:href="/default/img/bet-history-icons.svg#logo"
							></use> -->
						</svg>
						<div class="events__cell events__cell_row">
							<div class="events__text">
								<div class="events__amount">
									{{ bet.games.length }}
								</div>
								<span class=""> {{ banner.competition }} </span>
							</div>
							<div class="coef__item coef__num win">
								{{ bet.totalOdds }}
							</div>
						</div>
						<div
							class="events__cell events__cell_row events__cell_title"
						>
							<div class="events__text events__text_bold">
								<span class="">
									{{ banner.homeTeam }} -
									{{ banner.awayTeam }}
								</span>
							</div>
							<div class="events__text events__text_count">
								<div>
									{{
										ftScore(
											bet.games[0].htScore,
											bet.games[0].shfScore,
											":"
										)
									}}
									({{ banner.htScore }},{{ banner.shfScore }})
								</div>
							</div>
						</div>
					</div>
					<button class="events__delete"></button>
				</div>
				<div class="events__cell events__cell_row events__cell_indent">
					<div class="events__text">Type of bet slip</div>
					<div class="events__text events__text_main">
						{{ gameType }}
					</div>
				</div>
				<div class="events__cell events__cell_row events__cell_indent">
					<div class="events__text">Bet slip status</div>
					<div
						class="events__text events__text_main events__text_status win"
					>
						<b>win</b>
					</div>
				</div>
				<div class="events__cell events__cell_row events__cell_indent">
					<div class="events__text">Bet</div>
					<div class="events__text events__text_main">
						{{ money(bet.bet) }} {{ settings.currency }}
					</div>
				</div>
				<div class="bet-history-row-element-tax">
					<div
						class="events__cell events__cell_row events__cell_indent"
					>
						<div class="events__text">
							Win:
							<!---->
						</div>
						<div class="events__text events__text_main">
							{{ winnings }} {{ settings.currency }}
						</div>
					</div>
					<!---->
				</div>

				<!---->
				<!---->
				<!---->
				<div class="events__cell events__cell_row events__cell_indent">
					<div class="events__text">
						from {{ getDateTime(bet.fromDateTime) }}
					</div>
					<div class="events__text events__text_main">
						№<span class="">
							<b>
								{{ bet.id }}
								<!--37241524623-->
							</b>
						</span>
					</div>
				</div>
			</div>
		</div>

		<div
			:class="hidden ? 'hide' : 'show'"
			:aria-hidden="hidden"
			:hidden="hidden"
			class="apm-panel__body"
		>
			<!-- GAMES -->
			<div
				v-for="game in bet.games"
				class="events__item events__item_col win events__item_inside"
			>
				<div class="history-title">
					<div class="events__cell events__cell_row">
						<div class="events__text">
							<span class="sport-ico">
								<svg
									class="icon"
									xmlns="http://www.w3.org/2000/svg"
								>
									<image
										style="width: 100%; opacity: 0.8"
										href="https://cdn-icons-png.flaticon.com/512/1165/1165187.png"
									></image>
								</svg>
							</span>
							<span
								><span style="margin-right: 5px;" class=""><b>Football</b></span>
								<span class="ms-2">
									{{ game.competition }}
								</span></span
							>
						</div>
						<!---->
					</div>
					<div class="events__cell events__cell_row">
						<div
							class="events__text events__text_bold events__text_logo"
						>
							<svg
								class="events__logo events__logo_center"
								xmlns="http://www.w3.org/2000/svg"
							>
								<image
									style="width: 100%; height: 100%"
									href="/assets/1xbet/img/Untitled.png"
								></image>
							</svg>
							<span class=""
								>{{ game.homeTeam }} - {{ game.awayTeam }}</span
							>
						</div>
						<div class="events__count events__text_count">
							<div>
								{{ ftScore(game.htScore, game.shfScore, ":") }}
								({{ game.htScore }},{{ game.shfScore }})
							</div>
						</div>
					</div>
				</div>
				<div class="history-wrap">
					<div class="events__cell events__cell_row">
						<div class="events__text">Event</div>
						<div class="events__text events__text_main">
							<span class="">
								{{ game.event }}
								{{ ftScore(game.htScore, game.shfScore) }}
							</span>
						</div>
					</div>
					<div class="events__cell events__cell_row">
						<div class="events__text">Odds</div>
						<div class="events__text events__text_main">
							{{ game.odds }}
						</div>
					</div>
					<div class="events__cell events__cell_row">
						<div class="events__text">Status</div>
						<div
							class="events__text events__text_main events__text_status win"
						>
							<b>win</b>
						</div>
					</div>
					<div class="events__cell events__cell_row">
						<div class="events__text">Start date and time</div>
						<div class="events__text events__text_main">
							{{ getDateTime(game.startDateTime) }}
						</div>
					</div>
					<div class="events__cell events__cell_row">
						<div class="events__text">Status</div>
						<div class="events__text events__text_main">
							Game finished
						</div>
					</div>
					<div class="events__cell events__cell_row">
						<div class="events__text">Time of processing</div>
						<div class="events__text events__text_main">
							{{ getDateTime(game.endDateTime) }}
						</div>
					</div>
				</div>
			</div>
			<!---->
		</div>
	</div>
</template>

<style scoped>

.hide {
	display: none;
	height: 0px;
	overflow: hidden;
	transition-property: height;
	transition-duration: 300ms;
}

.show {
	display: block !important;
}
</style>
