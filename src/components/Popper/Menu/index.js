import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional

import { Wrapper as PopperWrapper } from "~/components/Popper";
import Menuitems from "./MenuItem";
import Header from "./Header_2";
import { useState } from "react";

const cx = classNames.bind(styles);
const defaultfc = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultfc,
}) {
  const [history, sethistory] = useState([{ data: items }]); //data gồm mảng của các cấp
  const current = history[history.length - 1]; // chuyển về đúng mảng

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <Menuitems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              sethistory((prev) => [...prev, item.children]);
            } else {
              onChange(item); // nếu không có gì cho nó là 1 hàm rỗng defaultfc
            }
          }}
        />
      );
    });
  };

  const handleResetMenu = () => {
    sethistory((prev) => prev.slice(0, 1));
  }
  const handleBack = () => { 
      sethistory((prev) => prev.slice(0, prev.length - 1));
  };
  return (
    <Tippy
      onHide={handleResetMenu}
      delay={500}
      interactive // selec duoc phan tu trong tippy
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-poper")}>
            {history.length > 1 && (
              <Header
                title="English"
                onBack={handleBack}
              />
            )}

            <div className={cx("menu-body")}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );

}

export default Menu;
