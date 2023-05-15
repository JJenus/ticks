import { createRouter, createWebHistory } from "vue-router";
import OneX_History from "../views/1xbet/History.vue";
import CreateTicket from "../views/CreateTicket.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			redirect: "/history",
		},
		{
			path: "/history",
			name: "1xbetHistory",
			component: OneX_History,
		},
		{
			path: "/settings",
			name: "tickets",
			component: CreateTicket,
		},
	],
});

export default router;
