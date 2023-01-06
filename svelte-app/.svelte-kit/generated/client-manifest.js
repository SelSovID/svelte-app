export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')];

			export const server_loads = [];

			export const dictionary = {
	"": [2],
	"aanvragen": [3],
	"aanvragen/[requestId]": [4],
	"account": [5],
	"login": [6]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};