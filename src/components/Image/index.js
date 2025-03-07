import { forwardRef, useState } from "react";
import image from "~/assets/images/";
import classNames from "classnames/bind";


const Image =  forwardRef(({ alt, src, className, ...props}, ref) =>{
  const [fallback, setFallback] = useState(""); // Chuỗi rỗng nên là falthy => src là chuỗi ban đầu

  const handleError = () => {
    setFallback(image.noImage);
  };
  return (
    <img
      ref = {ref}
      className={classNames( className)} // classNames là một thư viện hỗ trợ nối nhiều class CSS mà không cần xử lý thủ công.
      alt={alt}
      src={fallback || src}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
