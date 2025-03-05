import Header from "~/components/layout/components/Header/";
import Sidebar from "./Sidebar";
import styles from "./defaultlayout.module.scss";
import classNames from "classnames/bind";

function Defaultlayout({ children }) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}> {children}</div>
      </div>
    </div>
  );
}

export default Defaultlayout;
