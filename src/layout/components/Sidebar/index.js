import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import config from '~/config';
import Menu, {MenuItem} from './Menu'
import { HomeIconActive,HomeIcon, LiveIcon, UserGroupIcon, LiveIconActive, UserGroupIconActive } from '~/Icons';
import SuggestAcount from '~/components/SuggestAcount';
const cx = classNames.bind(styles)
function Sidebar() {
    return ( 
        <aside className={cx('wrapper')} >
           <Menu>
                <MenuItem title = "For You" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeIconActive/>}/>
                <MenuItem title = "Following" to={config.routes.following} icon={<UserGroupIcon/>}  activeIcon={<UserGroupIconActive/>}/>
                <MenuItem title = "Live" to={config.routes.live} icon={<LiveIcon/>}  activeIcon={<LiveIconActive/>}/>
           </Menu>
           <SuggestAcount label={'Suggested accounts'} />
           <SuggestAcount label={'Following accounts'} />
        </aside>
    
    );
}

export default Sidebar;