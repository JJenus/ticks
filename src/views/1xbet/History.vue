<script setup>
	import moment from "moment";
	import BetTicket from "../../components/1xbet/BetTicket.vue";
	import { bets } from "../../stores/bets";
	import { ref } from "vue";

	const dateRange = ref({
		to: moment().format("DD/MM/YYYY"),
		from: moment().format("DD/MM/YYYY"),
	});

	const scrollTop = ref(false);

	const tickets = bets.bets();

	var rootElement = document.documentElement;

	function handleScroll() {
		// Do something on scroll
		var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
		const ele = document.querySelector("#scroll-btn");
		if (rootElement.scrollTop / scrollTotal > 0.5) {
			// Show button
			ele.classList.remove("d-none");
		} else {
			// Hide button
			ele.classList.add("d-none");
		}
	}

	function scroll() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	window.addEventListener("scroll", handleScroll);
</script>
<template>
	<div class="wrapper">
		<div class="content-height">
			<link href="/assets/1xbet/css" rel="stylesheet" />
			<link href="/assets/1xbet/css(1)" rel="stylesheet" />
			<header class="header home-header">
				<div class="container header__container">
					<!---->
					<!---->
					<a
						href="https://1xbet.ng/en/"
						class="header__logo header-logo logo header-logo--has-geo header-logo--has-country router-link-active"
						><img
							src="/assets/1xbet/8faf161c7938d34dc93c9e22b43e702f.svg"
							class="header-logo__img"
						/>
						<img
							class="header-logo__flag"
							src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
						/>
					</a>
					<!---->
					<!---->
					<section class="header__col">
						<!---->
						<a
							href="https://1xbet.ng/en/bonus/rules/hyper-bonus-af"
							class="header__promo header-promo header-promo--hyper-bonus"
							><img
								src="/assets/1xbet/hyper-bonus-af-icon-mobile.png"
								alt="Hyper Bonus"
								class="header-promo__img"
						/></a>
						<!---->
						<div class="user-header">
							<button
								class="user-header-btn user-header-btn--deposit btn btn_g-green header__btn"
							>
								<span class="user-header-btn__label">
									Deposit
								</span>
							</button>
							<button
								data-messages="0"
								aria-label="Open menu"
								title="Open menu"
								class="user-header__link header__link header__reg header__reg_ico ion-android-person"
							></button>
							<!---->
						</div>
						<!---->
						<!---->
						<button
							title="Open menu"
							aria-label="Open menu"
							class="header__hamburger hamburger"
						>
							<div class="hamburger__line"></div>
							<div class="hamburger__line"></div>
							<div class="hamburger__line"></div>
						</button>
					</section>
				</div>
				<!---->
			</header>
			<div class="page-content-wrapper">
				<!---->
				<div class="main">
					<div class="main__header">
						<div class="go-back go-back_no-border">
							<a class="go-back__link"></a>
							<div class="go-back__content">
								<div class="go-back__title">History</div>
								<div class="vue-portal-target"></div>
								<div class="vue-portal-target"></div>
							</div>
						</div>
					</div>
					<div class="main__header main__header_history">
						<div class="vue-portal-target">
							<div class="form-default form-default_filter">
								<button
									class="search main-nav__link search_history"
								></button>
								<div class="filter-date">
									<div class="filter-date__input-con">
										<div class="vdp-datepicker">
											<div class="">
												<!---->
												<input
													type="text"
													v-model="dateRange.to"
													readonly
													autocomplete="off"
													class="filter-date__input"
												/>
												<!---->
											</div>
										</div>
									</div>

									<!-- DATE FROM -->
									<div class="filter-date__input-con">
										<div class="vdp-datepicker">
											<div class="">
												<!---->
												<input
													type="text"
													v-model="dateRange.from"
													readonly
													autocomplete="off"
													class="filter-date__input"
												/>
												<!---->
											</div>
											<div
												class="vdp-datepicker__calendar"
												style="display: none"
											>
												<header>
													<span class="prev disabled"
														>&lt;</span
													>
													<span
														class="day__month_btn up"
														>May 2023</span
													>
													<span class="next disabled"
														>&gt;</span
													>
												</header>
												<div class="">
													<span
														class="cell day-header"
														>Mon</span
													><span
														class="cell day-header"
														>Tue</span
													><span
														class="cell day-header"
														>Wed</span
													><span
														class="cell day-header"
														>Thu</span
													><span
														class="cell day-header"
														>Fri</span
													><span
														class="cell day-header"
														>Sat</span
													><span
														class="cell day-header"
														>Sun</span
													>
													<!----><span
														class="cell day disabled"
														>1</span
													><span
														class="cell day disabled"
														>2</span
													><span
														class="cell day disabled"
														>3</span
													><span
														class="cell day disabled"
														>4</span
													><span
														class="cell day disabled"
														>5</span
													><span
														class="cell day disabled weekend sat"
														>6</span
													><span
														class="cell day disabled weekend sun"
														>7</span
													><span class="cell day"
														>8</span
													><span class="cell day"
														>9</span
													><span
														class="cell day today"
														>10</span
													><span
														class="cell day selected"
														>11</span
													><span
														class="cell day disabled"
														>12</span
													><span
														class="cell day disabled weekend sat"
														>13</span
													><span
														class="cell day disabled weekend sun"
														>14</span
													><span
														class="cell day disabled"
														>15</span
													><span
														class="cell day disabled"
														>16</span
													><span
														class="cell day disabled"
														>17</span
													><span
														class="cell day disabled"
														>18</span
													><span
														class="cell day disabled"
														>19</span
													><span
														class="cell day disabled weekend sat"
														>20</span
													><span
														class="cell day disabled weekend sun"
														>21</span
													><span
														class="cell day disabled"
														>22</span
													><span
														class="cell day disabled"
														>23</span
													><span
														class="cell day disabled"
														>24</span
													><span
														class="cell day disabled"
														>25</span
													><span
														class="cell day disabled"
														>26</span
													><span
														class="cell day disabled weekend sat"
														>27</span
													><span
														class="cell day disabled weekend sun"
														>28</span
													><span
														class="cell day disabled"
														>29</span
													><span
														class="cell day disabled"
														>30</span
													><span
														class="cell day disabled"
														>31</span
													>
												</div>
											</div>
											<div
												class="vdp-datepicker__calendar"
												style="display: none"
											>
												<header>
													<span class="prev disabled"
														>&lt;</span
													>
													<span
														class="month__year_btn up"
														>2023</span
													>
													<span class="next disabled"
														>&gt;</span
													>
												</header>
												<span
													class="cell month disabled"
													>January</span
												><span
													class="cell month disabled"
													>February</span
												><span
													class="cell month disabled"
													>March</span
												><span
													class="cell month disabled"
													>April</span
												><span
													class="cell month selected"
													>May</span
												><span
													class="cell month disabled"
													>June</span
												><span
													class="cell month disabled"
													>July</span
												><span
													class="cell month disabled"
													>August</span
												><span
													class="cell month disabled"
													>September</span
												><span
													class="cell month disabled"
													>October</span
												><span
													class="cell month disabled"
													>November</span
												><span
													class="cell month disabled"
													>December</span
												>
											</div>
											<div
												class="vdp-datepicker__calendar"
												style="display: none"
											>
												<header>
													<span class="prev disabled"
														>&lt;</span
													>
													<span>2020 - 2029</span>
													<span class="next disabled"
														>&gt;</span
													>
												</header>
												<span class="cell year disabled"
													>2020</span
												><span
													class="cell year disabled"
													>2021</span
												><span
													class="cell year disabled"
													>2022</span
												><span
													class="cell year selected"
													>2023</span
												><span
													class="cell year disabled"
													>2024</span
												><span
													class="cell year disabled"
													>2025</span
												><span
													class="cell year disabled"
													>2026</span
												><span
													class="cell year disabled"
													>2027</span
												><span
													class="cell year disabled"
													>2028</span
												><span
													class="cell year disabled"
													>2029</span
												>
											</div>
										</div>
									</div>
								</div>
								<button class="events__refresh"></button>
							</div>
							<div class="form-default form-default_history">
								<!---->
								<button class="btn-delete"></button>
							</div>
							<!---->
						</div>
						<div class="tabs tabs_main tabs_theme_dark">
							<div class="tabs__item">
								<button class="tabs__link active">
									<span class="tabs__ico tabs__ico_pen"
										>Betting</span
									>
								</button>
							</div>
							<div class="tabs__item">
								<button class="tabs__link">
									<span class="tabs__ico tabs__ico_toto"
										>Toto</span
									>
								</button>
							</div>
							<div
								class="tabs__item tabs__item_events-filter events-filter dropdown dropdown_right vue-portal-target"
							>
								<button class="tabs__link tabs__link_filter">
									<span
										class="tabs__ico tabs__ico_filter"
									></span>
								</button>
								<button class="tabs__link tabs__link_filter">
									<span
										class="tabs__ico tabs__ico_sorting"
									></span>
								</button>
							</div>
						</div>
						<div class="main__content main__content_history">
							<div class="v-portal" style="display: none"></div>
							<div class="v-portal" style="display: none"></div>
							<!---->
							<!---->
							<div class="events events_simple history">
								<div
									class="events__item events__item_col events__item_info visible"
									style="display: block"
								>
									<!---->
									<div class="events__cell">
										<div class="events__text">
											Number of bets
										</div>
										<div
											class="events__text events__text_main"
										>
											{{ bets.bets().length }}
										</div>
									</div>
									<!---->
									<!---->
								</div>

								<BetTicket v-for="bet in tickets" :bet="bet" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="scroll-btn" class="footer__row d-none">
				<button @click="scroll()" class="back-to-top fixed"></button>
			</div>
			<div class="sports-partners-container">
				<div class="sports-partners">
					<div class="sports-partners__title">Sports partners</div>
					<div class="sports-partners__inner">
						<div
							class="swiper-container sports-partners__slider swiper-container-initialized swiper-container-horizontal swiper-container-android"
						>
							<div
								class="swiper-wrapper"
								style="transform: translate3d(0px, 0px, 0px)"
							>
								<div
									class="swiper-slide sports-partners__slide swiper-slide-active"
									style="width: 56px; margin-right: 10px"
								>
									<!---->
									<img
										src="/assets/1xbet/akwa_united.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
								<div
									class="swiper-slide sports-partners__slide swiper-slide-next"
									style="width: 56px; margin-right: 10px"
								>
									<!---->
									<img
										src="/assets/1xbet/logo-serie.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
								<div
									class="swiper-slide sports-partners__slide"
									style="width: 56px; margin-right: 10px"
								>
									<a
										href="https://www.cafonline.com/"
										target="_blank"
										class="sports-partners__link"
									></a>
									<img
										src="/assets/1xbet/caf.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
								<div
									class="swiper-slide sports-partners__slide"
									style="width: 56px; margin-right: 10px"
								>
									<!---->
									<img
										src="/assets/1xbet/esl.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
								<div
									class="swiper-slide sports-partners__slide"
									style="width: 56px; margin-right: 10px"
								>
									<!---->
									<img
										src="/assets/1xbet/mibr_white-logo.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
								<div
									class="swiper-slide sports-partners__slide"
									style="width: 56px; margin-right: 10px"
								>
									<!---->
									<img
										src="/assets/1xbet/K23_2020_lightmode.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
								<div
									class="swiper-slide sports-partners__slide"
									style="width: 56px; margin-right: 10px"
								>
									<!---->
									<img
										src="/assets/1xbet/cct.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
								<div
									class="swiper-slide sports-partners__slide"
									style="width: 56px; margin-right: 10px"
								>
									<!---->
									<img
										src="/assets/1xbet/tundra_esports_white_300.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
								<div
									class="swiper-slide sports-partners__slide"
									style="width: 56px; margin-right: 10px"
								>
									<!---->
									<img
										src="/assets/1xbet/team_spirit_black.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
								<div
									class="swiper-slide sports-partners__slide"
									style="width: 56px; margin-right: 10px"
								>
									<a
										href="https://1xbet.ng/ourpartners/og"
										target="_blank"
										class="sports-partners__link"
									></a>
									<img
										src="/assets/1xbet/og_red_bull.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
								<div
									class="swiper-slide sports-partners__slide"
									style="width: 56px; margin-right: 10px"
								>
									<a
										href="https://en.psg.fr/teams/club/content/paris-saint-germain-welcomes-1xbet-as-new-regional-parter-campaign-psg"
										target="_blank"
										class="sports-partners__link"
									></a>
									<img
										src="/assets/1xbet/psg-partner-without-xbet.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
								<div
									class="swiper-slide sports-partners__slide"
									style="width: 56px; margin-right: 10px"
								>
									<a
										href="https://1xbet.ng/ourpartners/losc-lille"
										target="_blank"
										class="sports-partners__link"
									></a>
									<img
										src="/assets/1xbet/logo-losc.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
								<div
									class="swiper-slide sports-partners__slide"
									style="width: 56px; margin-right: 10px"
								>
									<!---->
									<img
										src="/assets/1xbet/logo-fcb.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
								<div
									class="swiper-slide sports-partners__slide"
									style="width: 56px; margin-right: 10px"
								>
									<!---->
									<img
										src="/assets/1xbet/ihc.png"
										alt=""
										class="sports-partners__logo"
									/>
								</div>
							</div>
							<div
								class="swiper-default-pgn swiper-no-bg-pgn swiper-pagination-clickable swiper-pagination-bullets"
							>
								<span
									class="swiper-pagination-bullet swiper-pagination-bullet-active"
									tabindex="0"
									role="button"
									aria-label="Go to slide 1"
								></span
								><span
									class="swiper-pagination-bullet"
									tabindex="0"
									role="button"
									aria-label="Go to slide 2"
								></span
								><span
									class="swiper-pagination-bullet"
									tabindex="0"
									role="button"
									aria-label="Go to slide 3"
								></span
								><span
									class="swiper-pagination-bullet"
									tabindex="0"
									role="button"
									aria-label="Go to slide 4"
								></span
								><span
									class="swiper-pagination-bullet"
									tabindex="0"
									role="button"
									aria-label="Go to slide 5"
								></span
								><span
									class="swiper-pagination-bullet"
									tabindex="0"
									role="button"
									aria-label="Go to slide 6"
								></span
								><span
									class="swiper-pagination-bullet"
									tabindex="0"
									role="button"
									aria-label="Go to slide 7"
								></span
								><span
									class="swiper-pagination-bullet"
									tabindex="0"
									role="button"
									aria-label="Go to slide 8"
								></span
								><span
									class="swiper-pagination-bullet"
									tabindex="0"
									role="button"
									aria-label="Go to slide 9"
								></span
								><span
									class="swiper-pagination-bullet"
									tabindex="0"
									role="button"
									aria-label="Go to slide 10"
								></span>
							</div>
							<span
								class="swiper-notification"
								aria-live="assertive"
								aria-atomic="true"
							></span>
						</div>
						<div class="preloader-wrap" style="display: none">
							<!-- <img
								width="100"
								src="/assets/1xbet/saved_resource"
							/> -->
						</div>
					</div>
				</div>
			</div>
			<!---->
			<div class="">
				<div class="min-coupon">
					<!---->
					<!---->
					<!---->
					<!---->
				</div>
				<!---->
				<!---->
			</div>
			<!---->
			<!---->
			<!---->
		</div>
		<div class="load-overlay" style="display: none">
			<!-- <img width="100" src="/assets/1xbet/saved_resource" /> -->
		</div>
	</div>
	<!--Start of Suphelper Chat Script-->

	<!--End of Suphelper Chat Script-->
	<div id="cookie_notification_v2"></div>

	<footer id="common_footer" class="footer">
		<div class="container">
			<div class="link-group">
				<a
					href="https://1xbet.ng/information/about"
					class="link-group__item footer-analytics-event__about-us"
					>About us</a
				>
				<a
					href="https://1xbet.ng/information/rules"
					class="link-group__item footer-analytics-event__rules"
				>
					Terms and Conditions</a
				>
				<a
					href="https://1xbet.ng/en/office/history?whn=mobile&amp;app_mode=desktop"
					class="link-group__item footer-analytics-event__full-version"
					data-omit-query='["games_bonuses_id", "games_bonuses_code"]'
					>Full version</a
				>
				<a
					href="https://1xbet.ng/information/contacts"
					class="link-group__item footer-analytics-event__contacts"
					>Contacts</a
				>

				<a
					href="https://1xbet.ng/information/bitcoin"
					class="link-group__item footer-analytics-event__bitcoin"
					>Bitcoin</a
				>
				<a href="https://1xbet.ng/points" class="link-group__item">
					Betting shops
				</a>
			</div>

			<a
				href="https://1xbet.ng/mobile"
				class="btn footer-analytics-event__mobile-app mobile-app-btn-xstavka btn-mobile-app"
			>
				<div class="btn-mobile-app__info">
					<img
						class="btn-mobile-app__logo"
						src="/assets/1xbet/9b97dd61b3b7b1790dcabaf2c5059dfa.svg"
						alt="Logo"
					/>
					<span class="btn-mobile-app__label"
						>Mobile applications</span
					>
				</div>
			</a>
			<div class="sports-slider-wrap"></div>

			<div class="f-social">
				<a
					href="https://instagram.com/1xbet.nigeria"
					rel="nofollow"
					target="new"
					class="f-social__link f-social__link_instagram"
				>
				</a>
				<a
					href="https://www.facebook.com/1xbet.nigeria.official"
					rel="nofollow"
					target="new"
					class="f-social__link f-social__link_facebook"
				>
				</a>
			</div>
		</div>
		<!-- close prev container -->
		<div class="footer-about foot-description-bg">
			<div class="footer-about__seo">
				<div class="footer-seo">
					<ul class="footer-seo__list footer-seo-list">
						<li class="footer-seo-list__item">
							<div class="footer-accordion">
								<h1 class="footer-accordion__title">
									<button
										type="button"
										class="footer-accordion__btn footer-accordion-btn js-open-accordion-item"
									>
										<span
											class="footer-accordion-btn__label"
											>1xBet Betting Company – Online
											Sports Betting</span
										>
									</button>
								</h1>
								<div class="footer-accordion__content">
									<div
										class="footer-accordion__inner footer-accordion-inner"
									>
										<div class="footer-seo__wrapper">
											<h3 class="footer-seo__title">
												How does a bookmaker work?
											</h3>
											<p class="footer-seo__text">
												Making a bet with a bookmaker is
												a great way to test your luck,
												get an adrenalin rush and make
												some money in the process.
												Hundreds of betting websites
												offer their services to millions
												of fans who like to bet on
												sports online. 1xBet Betting
												Company stands out among other
												online bookmakers. Although the
												company is relatively young, it
												has already won the trust of
												several hundred thousand active
												fans.
											</p>
										</div>
										<div class="footer-seo__wrapper">
											<h3 class="footer-seo__title">
												How to bet online with 1xBet
											</h3>
											<p class="footer-seo__text">
												1xBet is regarded to be one of
												the best sports betting websites
												in Asia. We offer our customers
												not just real money betting but
												also an incredible thrill of
												backing your favorite teams in
												real time, an opportunity to
												chat with like-minded punters on
												the forum, and a chance to
												receive consultations and
												recommendations from
												professionals. Even a beginner
												will have no problem placing a
												bet with our company. Our
												website provides detailed rules
												and instructions, trustworthy
												statistics, and safe and
												convenient payment methods. This
												is why making a bet with us is
												incredibly easy. Registering is
												simple and you can place a bet
												with one click!
											</p>
										</div>
										<div class="footer-seo__wrapper">
											<h3 class="footer-seo__title">
												Which sports and events are
												offered for betting? Where do I
												look for predictions?
											</h3>
											<p class="footer-seo__text">
												1xBet is the biggest bookmaker
												in the CIS-countries. Every
												sports fan and punter will find
												something to their liking on our
												website. Even the most demanding
												customers will discover numerous
												betting opportunities. Choose
												your bet! Every day, our traders
												price up more than a thousand
												events, from well-known to
												niche. We take bets on football,
												ice hockey, biathlon, baseball,
												boxing, table tennis, snooker,
												cycling, water polo and a great
												number of TV shows such as
												"Psychic Challenge", "What?
												Where? When?" and many others.
											</p>
										</div>
										<div class="footer-seo__wrapper">
											<h3 class="footer-seo__title">
												What does 1xBet Betting Company
												guarantee?
											</h3>
											<p class="footer-seo__text">
												A wide selection of events. Fast
												and reliable bet processing. A
												unique opportunity to bet big on
												the most popular events.
												Guaranteed payments on all
												successful bets. High odds.
												Individual approach to every
												customer who wishes to place a
												bet on sports. A high level of
												professional service. Security
												and confidentiality.
											</p>
										</div>
										<div class="footer-seo__wrapper">
											<h3 class="footer-seo__title">
												Why is 1xBet better than other
												online bookmakers?
											</h3>
											<p class="footer-seo__text">
												Online betting is an opportunity
												to convert virtual predictions
												into real money! Are you
												interested in sports in general
												– or maybe you are a fan of a
												particular team? Turn your
												passion into profit! Thanks to
												the Internet, you can bet at any
												time, 24 hours a day, 7 days a
												week! We constantly update
												information about match outcomes
												so that you can get results in
												real time! The huge selection of
												bets offered on our website give
												each customer the chance to test
												their boldest predictions!
											</p>
										</div>
										<div class="footer-seo__wrapper">
											<h3 class="footer-seo__title">
												The main thing to know about
												1xBet Betting Company!
											</h3>
											<p class="footer-seo__text">
												The main advantage of our
												betting company is that we
												provide a unique opportunity to
												make LIVE bets. In-play betting
												significantly increases the
												chances of winning and generates
												enormous interest in sporting
												contests. 1xBet is a reliable
												bookmaker that strives to create
												a long-term association with
												each customer. We guarantee a
												personal approach with your best
												interests in mind, easy payment
												methods and, what is most
												important, 100% payouts on all
												winning bets! May luck never
												leave you!
											</p>
										</div>
										<div class="footer-seo__wrapper">
											<h3 class="footer-seo__title">
												GGWP - Good Game Well Paid
											</h3>
											<p class="footer-seo__text">
												“GGWP” is the phrase that ends
												millions of esports matches
												around the world. But for 1xBet
												customers, these words can be
												deciphered as "Good Game Well
												Paid"! Explore our huge
												Sportsbook including Dota 2,
												CS:GO, League of Legends and
												many other esports disciplines,
												choose an event you want to bet
												on, enter a stake amount and
												dive into the betting world!
											</p>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container" bis_skin_checked="1">
			<!-- open new container -->
			<p class="copy">
				The games of 1x-bet.com, including any certified aliases, are
				operated by Caecus N.V. in Curaçao under license 1668/JAZ of
				Curaçao eGaming (CEG), issued by the Governor of Curaçao to date
				October 1st, 1996 under the ordinance of June 8th, 1993. The
				Minister of Finance of Curaçao has undermandated the Gaming
				Control Board in Curaçao to regulate the Gaming License.
				Payments are processed by Exidna Enterprises LTD (НЕ435756) and
				Evrianassa Enterprises LTD (НЕ435969). To participate in the
				games, you must first accept to be legally bound by the contents
				of the Responsible Gaming Agreement (RGA), including its Gaming
				Terms and Conditions (GT&amp;C). It is important to know that
				the RGA/GT&amp;C contains important limitations and restrictions
				that are imposed for your protection and those of others. Before
				you decide to participate in any game, please make sure to
				carefully review the RGA/GT&amp;C. Click
				<a class="footer-copy__link" href="/en/information/rules"
					>here</a
				>
				to read, print and download a copy of the RGA/GT&amp;C. In
				addition to the English language, copies may also be available
				in other languages. However, the original English version shall
				supersede any translations.
			</p>

			<a
				href="https://partners1xbet.com/"
				class="partners-link footer-analytics-event__partner-program"
				target="_blank"
				rel="noopener"
				>Affiliate Program</a
			>

			<a href="information/amlkyc" class="partners-link" rel="noopener"
				>AML/KYC Policy</a
			>

			<div class="footer-policy" bis_skin_checked="1">
				1xBet uses cookies to guarantee that your experience is as
				smooth as possible. By remaining on the website, you agree to
				our use of your cookies on 1xBet.
				<a class="footer-policy__link" href="/en/information/cookies"
					>Find out more</a
				>
			</div>

			<div
				class="footer__row position-absolute top-0"
				bis_skin_checked="1"
			>
				<a
					style="
						position: relative;
						display: flex;
						align-items: end;
						justify-content: center;
					"
					target="_blank"
					bis_size='{"x":8,"y":1197,"w":100,"h":118,"abs_x":8,"abs_y":1197}'
				>
					<img
						src="/assets/1xbet/verify/validate.png"
						alt=""
						width="100"
						bis_size='{"x":8,"y":1197,"w":100,"h":111,"abs_x":8,"abs_y":1197}'
						bis_id="bn_3nt5lqlf5zlitlt3jbvfpf"
					/>
					<div style="position: absolute; z-index: 100">
						<span
							style="
								width: 100px;
								display: flex;
								align-items: center;
								justify-content: center;
								padding: 2px 2px;
								color: #000;
								border-radius: 10px;
								background-color: #59bc67;
								font-size: 0.9rem;
								font-weight: 600;
								padding-bottom: 0;
							"
							class=""
						>
							{{ moment().format("DD/MM/YYYY HH:mm:ss") }}
						</span>
					</div>
				</a>

				<div class="age" bis_skin_checked="1">18+</div>
			</div>
		</div>
	</footer>
	<link
		rel="stylesheet"
		href="/assets/1xbet/mobile_app.fa1192c27296f18660f5.css"
		type="text/css"
	/>

	<img src="/assets/1xbet/cdn_checker.png" style="display: none" />

	<div>
		<div class="toast-container toast-top-right"></div>
		<div class="toast-container toast-bottom-right"></div>
		<div class="toast-container toast-bottom-left"></div>
		<div class="toast-container toast-top-left"></div>
		<div class="toast-container toast-top-full-width"></div>
		<div class="toast-container toast-bottom-full-width"></div>
		<div class="toast-container toast-top-center"></div>
		<div class="toast-container toast-bottom-center"></div>
	</div>
</template>

<style type="text/css">
	.sh-mobile-009c76f19c66a349d0854b89512a6bfb {
		overflow-y: hidden;
	}
	.sh-mobile-009c76f19c66a349d0854b89512a6bfb body {
		position: fixed !important;
		width: 100% !important;
		height: 100% !important;
		top: 0px !important;
		right: 0px !important;
		bottom: 0px !important;
		left: 0px !important;
		overflow-y: hidden !important;
	}
</style>

<style type="text/css">
	.resize-observer[data-v-b329ee4c] {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		border: none;
		background-color: transparent;
		pointer-events: none;
		display: block;
		overflow: hidden;
		opacity: 0;
	}
	.resize-observer[data-v-b329ee4c] object {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
		pointer-events: none;
		z-index: -1;
	}
</style>
<style type="text/css">
	.ps {
		-ms-touch-action: auto;
		touch-action: auto;
		overflow: hidden !important;
		-ms-overflow-style: none;
	}
	@supports (-ms-overflow-style: none) {
		.ps {
			overflow: auto !important;
		}
	}
	@media (-ms-high-contrast: none), screen and (-ms-high-contrast: active) {
		.ps {
			overflow: auto !important;
		}
	}
	.ps.ps--active-x > .ps__scrollbar-x-rail,
	.ps.ps--active-y > .ps__scrollbar-y-rail {
		display: block;
		background-color: transparent;
	}
	.ps.ps--in-scrolling.ps--x > .ps__scrollbar-x-rail {
		background-color: #eee;
		opacity: 0.9;
	}
	.ps.ps--in-scrolling.ps--x > .ps__scrollbar-x-rail > .ps__scrollbar-x {
		background-color: #999;
		height: 11px;
	}
	.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail {
		background-color: #eee;
		opacity: 0.9;
	}
	.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail > .ps__scrollbar-y {
		background-color: #999;
		width: 11px;
	}
	.ps > .ps__scrollbar-x-rail {
		display: none;
		position: absolute;
		opacity: 0;
		transition: background-color 0.2s linear, opacity 0.2s linear;
		bottom: 0;
		height: 15px;
	}
	.ps > .ps__scrollbar-x-rail > .ps__scrollbar-x {
		position: absolute;
		background-color: #aaa;
		border-radius: 6px;
		transition: background-color 0.2s linear, height 0.2s linear,
			width 0.2s ease-in-out, border-radius 0.2s ease-in-out;
		bottom: 2px;
		height: 6px;
	}
	.ps > .ps__scrollbar-x-rail:active > .ps__scrollbar-x,
	.ps > .ps__scrollbar-x-rail:hover > .ps__scrollbar-x {
		height: 11px;
	}
	.ps > .ps__scrollbar-y-rail {
		display: none;
		position: absolute;
		opacity: 0;
		transition: background-color 0.2s linear, opacity 0.2s linear;
		right: 0;
		width: 15px;
	}
	.ps > .ps__scrollbar-y-rail > .ps__scrollbar-y {
		position: absolute;
		background-color: #aaa;
		border-radius: 6px;
		transition: background-color 0.2s linear, height 0.2s linear,
			width 0.2s ease-in-out, border-radius 0.2s ease-in-out;
		right: 2px;
		width: 6px;
	}
	.ps > .ps__scrollbar-y-rail:active > .ps__scrollbar-y,
	.ps > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y {
		width: 11px;
	}
	.ps:hover.ps--in-scrolling.ps--x > .ps__scrollbar-x-rail {
		background-color: #eee;
		opacity: 0.9;
	}
	.ps:hover.ps--in-scrolling.ps--x
		> .ps__scrollbar-x-rail
		> .ps__scrollbar-x {
		background-color: #999;
		height: 11px;
	}
	.ps:hover.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail {
		background-color: #eee;
		opacity: 0.9;
	}
	.ps:hover.ps--in-scrolling.ps--y
		> .ps__scrollbar-y-rail
		> .ps__scrollbar-y {
		background-color: #999;
		width: 11px;
	}
	.ps:hover > .ps__scrollbar-x-rail,
	.ps:hover > .ps__scrollbar-y-rail {
		opacity: 0.6;
	}
	.ps:hover > .ps__scrollbar-x-rail:hover {
		background-color: #eee;
		opacity: 0.9;
	}
	.ps:hover > .ps__scrollbar-x-rail:hover > .ps__scrollbar-x {
		background-color: #999;
	}
	.ps:hover > .ps__scrollbar-y-rail:hover {
		background-color: #eee;
		opacity: 0.9;
	}
	.ps:hover > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y {
		background-color: #999;
	}
	.ps-container {
		position: relative;
	}
</style>
<style type="text/css">
	.rtl {
		direction: rtl;
	}
	.vdp-datepicker {
		position: relative;
		text-align: left;
	}
	.vdp-datepicker * {
		box-sizing: border-box;
	}
	.vdp-datepicker__calendar {
		position: absolute;
		z-index: 100;
		background: #fff;
		width: 300px;
		border: 1px solid #ccc;
	}
	.vdp-datepicker__calendar header {
		display: block;
		line-height: 40px;
	}
	.vdp-datepicker__calendar header span {
		display: inline-block;
		text-align: center;
		width: 71.42857142857143%;
		float: left;
	}
	.vdp-datepicker__calendar header .prev,
	.vdp-datepicker__calendar header .next {
		width: 14.285714285714286%;
		float: left;
		text-indent: -10000px;
		position: relative;
	}
	.vdp-datepicker__calendar header .prev:after,
	.vdp-datepicker__calendar header .next:after {
		content: "";
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		border: 6px solid transparent;
	}
	.vdp-datepicker__calendar header .prev:after {
		border-right: 10px solid #000;
		margin-left: -5px;
	}
	.vdp-datepicker__calendar header .prev.disabled:after {
		border-right: 10px solid #ddd;
	}
	.vdp-datepicker__calendar header .next:after {
		border-left: 10px solid #000;
		margin-left: 5px;
	}
	.vdp-datepicker__calendar header .next.disabled:after {
		border-left: 10px solid #ddd;
	}
	.vdp-datepicker__calendar header .prev:not(.disabled),
	.vdp-datepicker__calendar header .next:not(.disabled),
	.vdp-datepicker__calendar header .up:not(.disabled) {
		cursor: pointer;
	}
	.vdp-datepicker__calendar header .prev:not(.disabled):hover,
	.vdp-datepicker__calendar header .next:not(.disabled):hover,
	.vdp-datepicker__calendar header .up:not(.disabled):hover {
		background: #eee;
	}
	.vdp-datepicker__calendar .disabled {
		color: #ddd;
		cursor: default;
	}
	.vdp-datepicker__calendar .flex-rtl {
		display: flex;
		width: inherit;
		flex-wrap: wrap;
	}
	.vdp-datepicker__calendar .cell {
		display: inline-block;
		padding: 0 5px;
		width: 14.285714285714286%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		vertical-align: middle;
		border: 1px solid transparent;
	}
	.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,
	.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,
	.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {
		cursor: pointer;
	}
	.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
	.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
	.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
		border: 1px solid #4bd;
	}
	.vdp-datepicker__calendar .cell.selected {
		background: #4bd;
	}
	.vdp-datepicker__calendar .cell.selected:hover {
		background: #4bd;
	}
	.vdp-datepicker__calendar .cell.selected.highlighted {
		background: #4bd;
	}
	.vdp-datepicker__calendar .cell.highlighted {
		background: #cae5ed;
	}
	.vdp-datepicker__calendar .cell.highlighted.disabled {
		color: #a3a3a3;
	}
	.vdp-datepicker__calendar .cell.grey {
		color: #888;
	}
	.vdp-datepicker__calendar .cell.grey:hover {
		background: inherit;
	}
	.vdp-datepicker__calendar .cell.day-header {
		font-size: 75%;
		white-space: nowrap;
		cursor: inherit;
	}
	.vdp-datepicker__calendar .cell.day-header:hover {
		background: inherit;
	}
	.vdp-datepicker__calendar .month,
	.vdp-datepicker__calendar .year {
		width: 33.333%;
	}
	.vdp-datepicker__clear-button,
	.vdp-datepicker__calendar-button {
		cursor: pointer;
		font-style: normal;
	}
	.vdp-datepicker__clear-button.disabled,
	.vdp-datepicker__calendar-button.disabled {
		color: #999;
		cursor: default;
	}

	.d-none {
		display: none;
	}
</style>
