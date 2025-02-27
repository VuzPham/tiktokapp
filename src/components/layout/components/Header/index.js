import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss'
import images from '~/assets/images';


const cx = classNames.bind(styles)
function Header() {
    return <header className={cx('wrapper')} >
        <div className={cx('inner')}>
               <div className={cx('logo')}>
                    <img src={images.logo} alt='tiktok' />
                </div>
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
                <div className={cx('action')}>

                </div>
        </div>
    </header>
}


export default Header;