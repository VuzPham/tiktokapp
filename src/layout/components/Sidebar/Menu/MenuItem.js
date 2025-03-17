import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)
// NavLink hỗ trợ active
// Thay vì chuyền chuỗi thì truyền hàm trả về 
// truyền vào nav(obj) khi active thì trong đó có isactive = true   
function MenuItem({title, to, icon,activeIcon}){
    return ( 
      <NavLink  className={(nav) => cx('menu-item',{active:nav.isActive})} to={to}>
        <span className={cx('icon')}>{icon}</span>
        <span className={cx('activeIcon')}>{activeIcon}</span>
        <span className={cx('title')}>{title}</span> 
      </NavLink>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
}

export default MenuItem;