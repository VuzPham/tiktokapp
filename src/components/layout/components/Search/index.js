import React, { useRef } from "react";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.scss";

import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/Accountitems";

const cx = classNames.bind(styles);

function Search() {

  const [searchValue, setSearchvalue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setshowResult] = useState(true);

  const inputRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3, 4]);
    }, 0);
  });
  const handleHidenresult = () => {
    setshowResult(false);
  }
  return (
    <HeadlessTippy
      interactive // selec duoc phan tu trong tippy
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHidenresult} // của tippy khi click ngoài tool tip thì ẩn
    >
      <div className={cx("Search")}>
        <input
          ref = {inputRef}
          value={searchValue} // toWaybiding
          placeholder="Search account and video"
          spellCheck={false}
          onChange={(e) => setSearchvalue(e.target.value)} // twowaybiding
          onFocus={() => setshowResult(true)}  // focus vào ô input hiện lại
        />
        {searchValue && <button className={cx("Clear")} onClick={() => {
            setSearchvalue('');
            inputRef.current.focus();
            console.log(inputRef)
        }}>
          {/* Clear */}
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>}
       
        {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}
        {/* Loading */}

        <button className={cx("Search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
