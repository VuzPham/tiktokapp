import classNames from "classnames/bind";
import styles from "./SuggestAcount.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AcountItem() {
    return ( 
        <div className={cx('account-item')}>
            <img 
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/be7217ca338581828da7cf847adec1ff~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=c177a189&x-expires=1742461200&x-signature=U%2F04%2B4AxeHx2HNoXd4ogTDXDQhI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>vuzpham287</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>Phạm Nguyên Vũ</p>
            </div>
        </div>
     );
}

export default AcountItem;