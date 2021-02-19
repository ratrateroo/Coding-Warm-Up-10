import Home from './Home';
import Login from './Login';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const routes = [
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/home',
		component: Home,
		// added nested routes
		routes: [
			{
				// Also note how we added /home before the
				// actual page name just to create a complete path
				path: '/home/page1',
				component: Page1,
			},
			{
				path: '/home/page2',
				component: Page2,
			},
		],
	},
];

export default routes;
