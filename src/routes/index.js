import Home from '~/pages/Homes';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

const publicRoute = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile }
];

const privateRoute = [];

export { publicRoute, privateRoute };
