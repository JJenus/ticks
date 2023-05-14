<script setup></script>

<template>
    <app-webapp ng-version="15.2.0" ng-server-context="ssr">
        <!---->
        <bc-header class="headerWrapper block">
            <bc-banner-download> </bc-banner-download>
            <bc-header-base-mobile
                ><header class="header ng-star-inserted">
                    <div
                        class="header_logo ng-star-inserted"
                        bis_skin_checked="1"
                    >
                        <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit">
                                Betclic
                            </font></font
                        >
                    </div>
                    <!---->
                    <!---->
                    <!---->
                    <div
                        class="header_anj ng-star-inserted"
                        bis_skin_checked="1"
                    >
                        <span class="icons icon_anj"></span>
                    </div>
                    <!---->
                    <!---->
                    <!---->

                    <div
                        class="header_wrapperAmout ng-star-inserted"
                        bis_skin_checked="1"
                    >
                        <!---->
                        <!---->
                    </div>
                    <bc-header-account-buttons class="ng-star-inserted"
                        ><div class="btnWrapper" bis_skin_checked="1">
                            <a
                                class="btn isPrimary isAlt isSmall ng-star-inserted"
                                href="https://m.betclic.pt/register"
                            >
                                <span class="btn_label"
                                    ><font style="vertical-align: inherit"
                                        ><font style="vertical-align: inherit"
                                            >Register</font
                                        ></font
                                    ></span
                                > </a
                            ><!---->
                            <a
                                class="btn isSecondary isAlt isSmall ng-star-inserted"
                                href="https://m.betclic.pt/login"
                            >
                                <span class="btn_label"
                                    ><font style="vertical-align: inherit"
                                        ><font style="vertical-align: inherit"
                                            >access</font
                                        ></font
                                    ></span
                                > </a
                            ><!---->
                        </div> </bc-header-account-buttons
                    ><!---->
                    <!---->
                    <!---->
                    <!----><!---->
                </header>
                <!----> </bc-header-base-mobile
            ><!---->
            <!----><!---->
        </bc-header>

        <bc-messages-fullscreens-container
            ><!---->
        </bc-messages-fullscreens-container>
        <bcdk-content-scroller>
            <router-outlet></router-outlet>
            <sports-popular-bets-page class="ng-star-inserted">
                <bc-reminder class="ng-star-inserted"><!----> </bc-reminder>
                <!----><!---->

                <bc-messages-banners-container class="ng-star-inserted"
                    ><!---->
                </bc-messages-banners-container>

                <sports-events-list class="ng-star-inserted">
                    <bcdk-vertical-scroller class="ng-star-inserted">
                        <div class="verticalScroller" bis_skin_checked="1">
                            <div
                                class="verticalScroller_head"
                                hidden=""
                                bis_skin_checked="1"
                            >
                                <h2 class="verticalScroller_headTitle"></h2>
                            </div>
                            <div
                                class="verticalScroller_wrapper"
                                bis_skin_checked="1"
                            >
                                <div infinitescroll="" bis_skin_checked="1">
                                    <div
                                        class="card m-3 rounded-5 p-0 border-0"
                                    >
                                        <div class="card-body p-0">
                                            <div
                                                class="p-3 py-2 border-bottom h4"
                                            >
                                                <div
                                                    class="d-flex align-items-center justify-content-between"
                                                >
                                                    <div>
                                                        <div class="mb-2 fs-4">
                                                            Multipla (2)
                                                        </div>

                                                        <div
                                                            class="fs-6 d-flex"
                                                        >
                                                            <div
                                                                class="bg-success me-1 rounded-circle text-light p-1 px-2"
                                                            >
                                                                <i
                                                                    class="bi bi-trophy-fill"
                                                                ></i>
                                                            </div>
                                                            <div
                                                                class="bg-success rounded-circle text-light p-1 px-2"
                                                            >
                                                                <i
                                                                    class="bi bi-trophy-fill"
                                                                ></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <span
                                                            class="badge bg-success py-1"
                                                            >Ganhos</span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="p-3 py-2 border-bottom mb-3"
                                            >
                                                <div
                                                    class="d-flex align-items-center justify-content-between"
                                                >
                                                    <div
                                                        class="d-flex align-items-center"
                                                    >
                                                        <span class="me-1"
                                                            ><i
                                                                class="fas fa-futbol"
                                                            ></i
                                                        ></span>
                                                        <div
                                                            class="flex-column"
                                                        >
                                                            <h5 class="mb-0 h2">
                                                                Pais De Gales
                                                            </h5>
                                                            <h5 class="mb-0 h2">
                                                                Inglatera
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div class="h5">
                                                        12/05/2023 15:00
                                                    </div>
                                                </div>
                                                <div
                                                    class="d-flex justify-content-between align-items-center"
                                                >
                                                    <h5 class="h4 mt-2">
                                                        Resultado (Tempo
                                                        Regulamenta):
                                                        <span
                                                            class="text-success"
                                                            >Inglatera</span
                                                        >
                                                    </h5>

                                                    <span class="fw-bold"
                                                        >1,47</span
                                                    >
                                                </div>
                                            </div>

                                            <div class="p-3">
                                                <div
                                                    class="d-flex mb-3 h4 fw-bold align-items-center justify-content-between"
                                                >
                                                    <span>Cota</span>
                                                    <span
                                                        class="badge bg-warning rounded-3 py-2"
                                                        >1,77</span
                                                    >
                                                </div>
                                                <div
                                                    class="d-flex mb-3 h4 fw-bold align-items-center justify-content-between"
                                                >
                                                    <span>Montante</span>
                                                    <span class="">3,00 $</span>
                                                </div>
                                                <div
                                                    class="d-flex text-success mb-3 h3 fw-bold align-items-center justify-content-between"
                                                >
                                                    <span>Ganhos</span>
                                                    <span class="">5,31 $</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="verticalScroller_list"
                                        bis_skin_checked="1"
                                    >
                                        <!---->
                                        <!---->
                                        <bcdk-scrolltop-button
                                            class="ng-star-inserted"
                                            ><!----> </bcdk-scrolltop-button
                                        ><!---->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </bcdk-vertical-scroller>
                    <!----><!---->
                    <!---->
                    <!---->
                </sports-events-list>
                <!----><!----> </sports-popular-bets-page
            ><!---->
            <bc-gb-footer
                ><div class="ng-star-inserted" bis_skin_checked="1">
                    <bc-gb-dynamic></bc-gb-dynamic
                    ><bc-gb-footer-time class="ng-star-inserted"
                        ><!----> </bc-gb-footer-time
                    ><!---->
                    <footer class="footer">
                        <div class="footer_wrapper" bis_skin_checked="1">
                            <ul class="footer_list ng-star-inserted">
                                <li
                                    class="footer_item footer_link_item ng-star-inserted"
                                >
                                    <!---->

                                    <a
                                        class="footer_link ng-star-inserted"
                                        id="footer_tc"
                                        ><font style="vertical-align: inherit"
                                            ><font
                                                style="vertical-align: inherit"
                                                >Terms and conditions
                                            </font></font
                                        ></a
                                    ><!---->
                                    <!----><!---->
                                    <!---->

                                    <!---->
                                </li>
                                <li
                                    class="footer_item footer_link_item ng-star-inserted"
                                >
                                    <!---->

                                    <a
                                        class="footer_link ng-star-inserted"
                                        id="footer_privacy"
                                        ><font style="vertical-align: inherit"
                                            ><font
                                                style="vertical-align: inherit"
                                                >Privacy and Cookies Policy
                                            </font></font
                                        ></a
                                    ><!---->
                                    <!----><!---->
                                    <!---->

                                    <!---->
                                </li>
                                <li
                                    class="footer_item footer_link_item ng-star-inserted"
                                >
                                    <!---->

                                    <a
                                        class="footer_link ng-star-inserted"
                                        id="footer_rg"
                                        ><font style="vertical-align: inherit"
                                            ><font
                                                style="vertical-align: inherit"
                                                >Responsible Gaming
                                            </font></font
                                        ></a
                                    ><!---->
                                    <!----><!---->
                                    <!---->

                                    <!---->
                                </li>
                                <li
                                    class="footer_item footer_link_item ng-star-inserted"
                                >
                                    <!---->

                                    <a
                                        class="footer_link ng-star-inserted"
                                        id="footer_about"
                                        ><font style="vertical-align: inherit"
                                            ><font
                                                style="vertical-align: inherit"
                                                >About Betclic
                                            </font></font
                                        ></a
                                    ><!---->
                                    <!----><!---->
                                    <!---->

                                    <!---->
                                </li>
                                <li
                                    class="footer_item footer_link_item ng-star-inserted"
                                >
                                    <!---->

                                    <a
                                        class="footer_link ng-star-inserted"
                                        href="https://careers.betclicgroup.com/"
                                        id="footer_careers"
                                        ><font style="vertical-align: inherit"
                                            ><font
                                                style="vertical-align: inherit"
                                            >
                                                Recruitment
                                            </font></font
                                        ></a
                                    >
                                    <!---->
                                    <!----><!---->
                                    <!---->

                                    <!---->
                                </li>
                                <!---->
                                <li
                                    class="footer_item footer_link_item is-breaker"
                                ></li>
                                <bc-gb-dynamic></bc-gb-dynamic
                                ><bc-gb-footer-app-version
                                    class="ng-star-inserted"
                                    ><li
                                        class="footer_item footer_link_item app_version"
                                    >
                                        <span class="footer_itemText"
                                            ><font
                                                style="vertical-align: inherit"
                                                ><font
                                                    style="
                                                        vertical-align: inherit;
                                                    "
                                                    >6.9.18-1</font
                                                ></font
                                            ></span
                                        >
                                    </li> </bc-gb-footer-app-version
                                ><!---->
                            </ul>
                            <!---->
                            <p
                                id="topicons"
                                class="footer_text ng-star-inserted"
                            >
                                <span class="footer_icon_item ng-star-inserted">
                                    <a
                                        target="_blank"
                                        href="http://www.srij.turismodeportugal.pt/pt/"
                                        id=" SRIJ - Portuguese regulator "
                                        class="ng-star-inserted"
                                    >
                                        <img
                                            src="/assets/betclic/srij1.png"
                                            alt="SRIJ - Portuguese regulator"
                                        />
                                    </a>
                                    <!---->
                                    <!----> </span
                                ><span
                                    class="footer_icon_item ng-star-inserted"
                                >
                                    <a id="18plus" class="ng-star-inserted">
                                        <img
                                            src="/assets/betclic/18_1_2.png"
                                            alt="18plus"
                                        /> </a
                                    ><!---->
                                    <!----> </span
                                ><span
                                    class="footer_icon_item ng-star-inserted"
                                >
                                    <a
                                        target="_blank"
                                        href="https://ibia.bet/"
                                        id="essa"
                                        class="ng-star-inserted"
                                    >
                                        <img
                                            src="/assets/betclic/ibia-3.png"
                                            alt="that"
                                        />
                                    </a>
                                    <!---->
                                    <!----> </span
                                ><!---->
                            </p>
                            <!---->

                            <p
                                class="footer_text is-hot footer_disclaimer_item ng-star-inserted"
                            >
                                <font style="vertical-align: inherit"
                                    ><font style="vertical-align: inherit"
                                        >Bem Operations Limited is a company
                                        registered in Malta with company number
                                        C70387, having its registered office at
                                        Level 3, Tagliaferro Business Centre,
                                        Gaiety Lane, Sliema, Malta. </font
                                    ><font style="vertical-align: inherit"
                                        >Holds licenses No. 001 and No. 004,
                                        issued by the SRIJ – Gaming Regulation
                                        and Inspection Service, which authorizes
                                        it to develop the activity of operating
                                        odds-on sports betting and games of
                                        chance in Portugal.</font
                                    ></font
                                >
                            </p>
                            <!---->
                            <!---->
                            <!---->

                            <p
                                class="footer_text is-hot footer_disclaimer_item ng-star-inserted"
                            >
                                <b
                                    ><font style="vertical-align: inherit"
                                        ><font style="vertical-align: inherit"
                                            >PLAYING CAN BE ADDICTIVE. </font
                                        ><font style="vertical-align: inherit"
                                            >PLEASE PLAY RESPONSIBLY.</font
                                        ></font
                                    ></b
                                >
                            </p>
                            <!---->
                            <!---->
                            <!----><!---->
                            <!---->
                            <!----><!---->
                        </div>
                    </footer>
                </div>
                <!---->
            </bc-gb-footer>
        </bcdk-content-scroller>
        <bc-gb-cookie-banner
            ><div class="cookieBanner" bis_skin_checked="1">
                <p class="cookieBanner_text">
                    <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit">
                            By using this website, you are consenting to the use
                            of cookies. </font
                        ><font style="vertical-align: inherit"
                            >Know more
                        </font></font
                    ><a
                        href="https://m.betclic.pt/content/privacypolicy"
                        bis_skin_checked="1"
                        ><font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                                >here.</font
                            ></font
                        ></a
                    >
                </p>

                <div class="buttonWrapper btnWrapper" bis_skin_checked="1">
                    <button
                        class="button is-primary is-small btn isPrimary isSmall"
                    >
                        <span class="btn_label"
                            ><font style="vertical-align: inherit"
                                ><font style="vertical-align: inherit">
                                    OK
                                </font></font
                            ></span
                        >
                    </button>
                </div>
                <!----><!---->
            </div>
            <!---->
        </bc-gb-cookie-banner>
        <div bc-gb-gtmroot="" bis_skin_checked="1"></div>
        <div bc-gb-analytics="" bis_skin_checked="1"></div>
        <app-navigation appmenuvisibility="" style=""
            ><nav class="nav navBottom is-visible">
                <app-nav-item class="nav_item"
                    ><a
                        bc-gb-backtothetop=""
                        class="nav_item"
                        style="cursor: pointer"
                        id="sportsTab"
                    >
                        <div class="nav_svg" bis_skin_checked="1">
                            <span class="icons icon_sport"> </span>
                        </div>
                        <!----><font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit">
                                sports
                            </font></font
                        ></a
                    >
                </app-nav-item>
                <!---->
                <app-nav-item class="nav_item"
                    ><a
                        bc-gb-backtothetop=""
                        class="nav_item"
                        style="cursor: pointer"
                        id="calendarTab"
                    >
                        <div
                            class="nav_svg"
                            data-date="8"
                            bis_skin_checked="1"
                            data-notif="37"
                        >
                            <span class="icons icon_now"> </span>
                        </div>
                        <!----><font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit">
                                Now
                            </font></font
                        ></a
                    >
                </app-nav-item>
                <!---->
                <app-nav-item class="nav_item"
                    ><a
                        bc-gb-backtothetop=""
                        class="nav_item is-active"
                        style="cursor: pointer"
                        id="popularBetsTab"
                    >
                        <div class="nav_svg" bis_skin_checked="1">
                            <span class="icons icon_topBets"> </span>
                        </div>
                        <!----><font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit">
                                Highlights
                            </font></font
                        ></a
                    >
                </app-nav-item>
                <!---->
                <app-nav-item class="nav_item"
                    ><a
                        bc-gb-backtothetop=""
                        class="nav_item"
                        style="cursor: pointer"
                        id="missionTab"
                    >
                        <div class="nav_svg" bis_skin_checked="1">
                            <span class="icons icon_mission"></span>
                        </div>
                        <!----><font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit">
                                Challenges
                            </font></font
                        ></a
                    >
                </app-nav-item>
                <!---->
                <app-nav-item class="nav_item"
                    ><a
                        bc-gb-backtothetop=""
                        class="nav_item"
                        style="cursor: pointer"
                        id="casinoTab"
                    >
                        <div class="nav_svg" bis_skin_checked="1">
                            <span class="icons icon_casino"> </span>
                        </div>
                        <!----><font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit">
                                casino
                            </font></font
                        ></a
                    >
                </app-nav-item>
                <!----><!---->
                <svg width="0" height="0">
                    <defs>
                        <lineargradient id="svgScarletGradient">
                            <stop
                                offset="5%"
                                class="svgScarletGradient_color1"
                            ></stop>
                            <stop
                                offset="100%"
                                class="svgScarletGradient_color2"
                            ></stop>
                        </lineargradient>
                    </defs>
                </svg>
            </nav>
        </app-navigation>

        <betting-slip-wrapper>
            <sports-betting-slip-shopping-cart class="ng-star-inserted"
                ><div
                    id="lqfmj"
                    class="bettingSlipButton has-cookiebanner"
                    bis_skin_checked="1"
                >
                    <!---->

                    <span
                        class="icons icon_betting_slip ng-star-inserted"
                    ></span>
                    <!---->
                    <!---->
                </div> </sports-betting-slip-shopping-cart
            ><!---->

            <!---->

            <div class="bettingslip" hidden="" bis_skin_checked="1">
                <!---->
            </div>
            <div
                class="bettingslip_overlay"
                hidden=""
                bis_skin_checked="1"
            ></div>
            <!---->
            <!----><!---->
        </betting-slip-wrapper>
        <!---->

        <!---->

        <bc-gb-modal-host><span></span></bc-gb-modal-host
        ><!---->
        <div appupdater="" bis_skin_checked="1"></div>
        <bc-gb-reality-check></bc-gb-reality-check>
        <bc-landscape-overlay
            ><div class="deviceOrientation" bis_skin_checked="1">
                <span class="icons icon_device_orientation"></span>
                <div class="deviceOrientation_text" bis_skin_checked="1">
                    <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit">
                            For a better experience, browse in vertical mode
                        </font></font
                    >
                </div>
                <div class="buttonWrapper btnWrapper" bis_skin_checked="1">
                    <button class="button is-primary is-small btn isSecondary">
                        <span class="btn_label"
                            ><font style="vertical-align: inherit"
                                ><font style="vertical-align: inherit">
                                    Ignore
                                </font></font
                            ></span
                        >
                    </button>
                </div>
            </div>
        </bc-landscape-overlay>

        <bcdk-navigation-indicator
            ><ngx-loading-bar
                _nghost-app-webapp-universal-c61=""
                fixed="true"
                style="color: rgb(255, 255, 255)"
                ><!----></ngx-loading-bar
            >
        </bcdk-navigation-indicator>
        <!----><!---->
    </app-webapp>
</template>
