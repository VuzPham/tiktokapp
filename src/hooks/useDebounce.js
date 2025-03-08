import { useState, useEffect } from "react";

// " " chuỗi rộng 
// 1. chạy return ra reBounce
// "ffdas" có ký tự
    // 1. khi đó value thay đổi sẽ vào UseEffect 
    // 2. chạy vào handler settimeout đúng với số giờ mình cần delay
    // 3. sẽ setRebounce với giá trị value sau khoảng tgian delay 
    // 4. sau đó clearTimeOut tại thoi diem do
    // 5. return giá trị value 
function useRebounce(value ,delay) {
    const [reBounce, setRebounce] = useState(value)
    
    useEffect(() => {
        const handler = setTimeout(() => {
            setRebounce(value)
        },delay)
        return () => {
            clearTimeout(handler);
        }
    }, [value])
    
    return ( reBounce );
}

export default useRebounce;