import React, { use, useRef } from "react";
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
  const [showloading, setshowLoading] = useState(false); 
  const inputRef = useRef();
  useEffect(() => {
    if(!searchValue.trim() ){
      return;
    }
    setshowLoading(true) // thực hiện load
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data)
        setshowLoading(false) // load xong thì ẩn icon loading 
      })
      .catch(() => {
          setshowLoading(false)
      })
  }, [searchValue]);
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
            
            {searchResult.map((result) => (
                <AccountItem key={result.id} data={result}/>
            ))}

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
        {searchValue && !showloading && <button className={cx("Clear")} onClick={() => {
            setSearchvalue('');
            inputRef.current.focus();
            
        }}>
          {/* Clear */}
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>}
        
        {showloading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />} {/* Loading */}

        <button className={cx("Search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
