import Home from '../page/Home';
import Device from '../page/Device';
import Rentalcost from '../page/Rentalcost';
import Projectcase from '../page/Projectcase';
import Devicetype from '../page/Devicetype';
import Devicegroup from '../page/Devicegroup';
import Failuretype from '../page/Failuretype';
export const routes = [
	{ path: '/home', component: Home },
	{ path: '/configuration/device', component: Device },
	{ path: '/configuration/rentalcost', component: Rentalcost },
	{ path: '/configuration/projectcase', component: Projectcase },
	{ path: '/configuration/devicetype', component: Devicetype },
	{ path: '/configuration/devicegroup', component: Devicegroup },
	{ path: '/configuration/failuretype', component: Failuretype }
];
