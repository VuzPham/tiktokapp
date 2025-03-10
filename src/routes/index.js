
import routesConfig from '~/config/routes'

//Layout 
import { HeaderOnly } from '~/components/layout';
// Page
import Home from '~/pages/Homes';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload'
import Search from '~/pages/Search';


const publicRoute = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null},
];

const privateRoute = [];

export { publicRoute, privateRoute };
