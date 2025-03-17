import React, { useRef } from "react";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

import * as searchService from "~/components/Service/searchService";
import styles from "./Search.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/Accountitems";
import { useDebounce } from "~/hooks";
import { SearchIcon } from "~/Icons";
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchvalue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setshowResult] = useState(true);
  const [showloading, setshowLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);
  const inputRef = useRef();
  // Trường hợp ô tìm kiếm rỗng
  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    // FETCH API
    const fetchApi = async () => {
      // debounced giá trị search thay đổi thì loading
      setshowLoading(true); // thực hiện load
      const result = await searchService.search(debounced);
      setSearchResult(result);
      setshowLoading(false);
      // try {
      //     // Gọi API với tham số truyền vào từ biến `debounced`
      //     const res = await request.get(`users/search`, {
      //         params: {
      //             q: debounced,
      //             type: 'less'
      //         }
      //     });

      //     // Cập nhật kết quả tìm kiếm vào state
      //     setSearchResult(res.data);
      // } catch (error) {
      //     // Log lỗi nếu có vấn đề khi gọi API
      //     console.error("Lỗi khi gọi API:", error);
      // } finally {
      //     // Ẩn biểu tượng loading, dù API gọi thành công hay thất bại
      //     setshowLoading(false);
      // }
    };
    // Gọi hàm để thực hiện request
    fetchApi();

    // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setSearchResult(res.data)
    //     setshowLoading(false) // load xong thì ẩn icon loading
    //   })
    //   .catch(() => {
    //       setshowLoading(false)
    //   })
  }, [debounced]);
  const handleHidenresult = () => {
    setshowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      // start with có giá trị
      setSearchvalue(e.target.value);
    }
  };
  const handleSubmid = (e) => {
    e.preventDefault();
  };
  return (
    //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive // selec duoc phan tu trong tippy
        //  Nếu searchResult là undefined hoặc null, biểu thức searchResult?.length sẽ trả về undefined thay vì gây ra lỗi.
        // Nếu kết quả của searchResult?.length là undefined, biểu thức này sẽ trả về 0.
        // Điều này đảm bảo rằng phép so sánh luôn được thực hiện với một số hợp lệ.
        visible={showResult && (searchResult?.length || 0) > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHidenresult} // của tippy khi click ngoài tool tip thì ẩn
      >
        <div className={cx("Search")}>
          <input
            ref={inputRef}
            value={searchValue} // toWaybiding
            placeholder="Search account and video"
            spellCheck={false}
            onChange={handleChange} // twowaybiding
            onFocus={() => setshowResult(true)} // focus vào ô input hiện lại
          />
          {searchValue && !showloading && (
            <button
              className={cx("Clear")}
              onClick={() => {
                setSearchvalue("");
                inputRef.current.focus();
              }}
            >
              {/* Clear */}
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {/* Loading */}
          {showloading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}
          <button className={cx("Search-btn")} onMouseDown={handleSubmid}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
