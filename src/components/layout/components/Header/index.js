import React, { use, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/Accountitems';

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        },0)
    })


    return <header className={cx('wrapper')} >
        <div className={cx('inner')}>
               <div className={cx('logo')}>
                    <img src={images.logo} alt='tiktok' />
                </div>
                {/* Search */}
                <Tippy
                    interactive  // selec duoc phan tu
                    visible={searchResult.length>0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                               <h4 className={cx('search-title')}>
                                Accounts 
                               </h4>
                               <AccountItem/>
                               <AccountItem/>
                               <AccountItem/>
                               <AccountItem/>
                            </PopperWrapper>
                        </div>
                     )}

                >
                    <div className={cx('Search')}>
                        <input placeholder='Search account and video' spellCheck={false} />
                        <button className={cx('Clear')} >
                            {/* Clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        {/* Loading */}
                    
                                    <button className={cx('Search-btn')}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    
                     <Button text>Upload</Button>
                     <Button primary leftIcon = {<FontAwesomeIcon icon={faSignIn} />}>Log In</Button>
                </div>
        </div>
    </header>
}


export default Header;