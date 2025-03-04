import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menuitems  from './MenuItem'
import Header from "./Header_2";
import { useState } from "react";

const cx = classNames.bind(styles)
const defaultfc = () => {}


function Menu ( {children, items = [], onChange = defaultfc}) {
    const [history,sethistory] = useState([{data: items}]); //data gồm mảng của các cấp 
    const current = history[history.length-1]; // chuyển về đúng mảng


    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            
            return <Menuitems key={index} data={item} onClick={() => {  
                if(isParent){
                    sethistory(prev => [...prev,item.children])
                }
                else {
                    onChange(item)
                }
            }} />
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

                            {history.length > 1 &&  <Header title='English' onBack={() => {
                                sethistory(prev => prev.slice(0, prev.length-1))
                            }} />}

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