import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menuitems  from './MenuItem'
const cx = classNames.bind(styles)


function Menu ( {children, items = []} ) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <Menuitems key={index} data={item} />
        })
    }
    return ( 
        <Tippy
                delay={600}
                interactive  // selec duoc phan tu trong tippy
                placement='bottom-end'
                render={attrs => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={(cx('menu-poper'))}>
                            {renderItems()}
                        </PopperWrapper>
                         </div>
                             )}
                        >
                    {children}
        </Tippy>  
     );
}

export default Menu ;