import React, { use, useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faSignIn,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudArrowUp,
  faMessage,
  faUser,
  faCoins,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/Accountitems";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "VI",
          title: "Tiếng Việt",
        },
        {
          code: "En",
          title: "English",
        },
        {
          code: "CN",
          title: "Chinease",
        },
        {
          code: "KOR",
          title: "Korea",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];


const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: "View profile",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: "Get coins",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faGear}/>,
        title: "Settings",
        to: "/feedback",
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket}/>,
        title: "Log out",
        to: "/feedback",
        separate: true, // Vạch ngăn
    },
]
function Header() {
  const currentUser = true;
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  });

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>
        {/* Search */}
        <HeadlessTippy
          interactive // selec duoc phan tu trong tippy
          visible={searchResult.length > 0}
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
        >
          <div className={cx("Search")}>
            <input placeholder="Search account and video" spellCheck={false} />
            <button className={cx("Clear")}>
              {/* Clear */}
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            {/* Loading */}

            <button className={cx("Search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy content="Upload Video" placement="bottom" delay={[0, 200]}>
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon>
                </button>
              </Tippy>
              <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
              </button>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log In
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu :MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/be7217ca338581828da7cf847adec1ff~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=69314&refresh_token=a029b0e0af09218b073ebeef1f16f679&x-expires=1740974400&x-signature=JPHlHzClBMUe1dYiR5MV1Zrupmg%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474"
                className={cx("user-avatar")}
                alt="Nguyen Van A"
              />
            ) : (
              <>
                <button button className={cx("more-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
