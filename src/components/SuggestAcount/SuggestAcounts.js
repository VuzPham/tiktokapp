import classNames from "classnames/bind";
import styles from "./SuggestAcount.module.scss"
import PropTypes from "prop-types";

import AccountItem from "./AcountItem";
const cx = classNames.bind(styles);
function SuggestAcounts({ label }) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>
                {label}
            </p>
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more')}>See all</p>
        </div>
     );
}
SuggestAcounts.propTypes = {
    label:PropTypes.string.isRequired,
}


export default SuggestAcounts;