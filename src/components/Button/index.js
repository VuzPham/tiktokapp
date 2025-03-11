import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  rounded = false,
  disable = false,
  text = false,
  primary = false,
  outline = false,
  small = false,
  large = false,
  leftIcon,
  className,
  children,
  onClick,
  ...passPost
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passPost,
  };
  // const props = {
  //     onClick: onClick, // Viết đầy đủ, không dùng shorthand property
  //   };

  //Kiểm tra khi bỏ CSS
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }
  if (to) {
    Comp = Link;
    props.to = to;
  } else if (href) {
    Comp = "a";
    props.href = href;
  }
  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    disable,
    rounded,
    [className]: className,
    // { "custom-button": "custom-button" }
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("tittle")}>{children}</span>
    </Comp>
  );
}
Button.prototype = {
  children:PropTypes.node
}
export default Button;
