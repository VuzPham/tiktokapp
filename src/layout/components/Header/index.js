import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignIn,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";

import config from '~/config'
import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import Search from "../Search";
import { InboxIcon, MessageIcon, UploadIcon } from "~/Icons";
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
        {
          code: "SPN",
          title: "Spanish",
        },
        {
          code: "RUSRUS",
          title: "Russian",
        },
        {
          code: "JPN",
          title: "Japanese",
        },
        {
          code: "THJ",
          title: "Thai",
        },
        {
          code: "TRK",
          title: "Turkish",
        },
        {
          code: "HI",
          title: "Hindi",
        },
        {
          code: "BGI",
          title: "Bengali",
        },
        {
          code: "ITY",
          title: "Italian",
        },
        {
          code: "KOR",
          title: "Gujarati",
        },
        {
          code: "KOR",
          title: "Levantine Arabic",
        },
        {
          code: "KOR",
          title: "Iranian Persian",
        },
        {
          code: "KOR",
          title: "Portuguese",
        },
        {
          code: "KOR",
          title: "Western Punjabi",
        },  
        {
          code: "KOR",
          title: "Egyptian Arabic",
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
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Settings",
    to: "/feedback",
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    title: "Log out",
    to: "/feedback",
    separate: true, // Vạch ngăn
  },
];
function Header() {
  const currentUser = true;


  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </Link>
        {/* Search */}
        <Search />
        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy content="Upload Video" placement="bottom" delay={[0, 200]}>
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom" delay={[0, 200]}>
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox " placement="bottom" delay={[0, 200]}>
                <button className={cx("action-btn")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log In
              </Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
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
