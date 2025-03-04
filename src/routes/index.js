import { HeaderOnly } from '~/components/layout';
import Home from '~/pages/Homes';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload'
import Search from '~/pages/Search';
const publicRoute = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null},
];

const privateRoute = [];

export { publicRoute, privateRoute };
