import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image";
const cx = classNames.bind(styles)
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/be7217ca338581828da7cf847adec1ff~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=69314&refresh_token=a029b0e0af09218b073ebeef1f16f679&x-expires=1740974400&x-signature=JPHlHzClBMUe1dYiR5MV1Zrupmg%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474" alt="Hoa"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>Nguyen van a</span>
            </div>
        </div>
     );
}

export default AccountItem;