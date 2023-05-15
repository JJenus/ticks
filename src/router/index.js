import { createRouter, createWebHistory } from "vue-router";

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
			component: () => import("../views/1xbet/History.vue"),
		},
		{
			path: "/settings",
			name: "tickets",
			component: () => import("../views/CreateTicket.vue"),
		},
	],
});

export default router;
