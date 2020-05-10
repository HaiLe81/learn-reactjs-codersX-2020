import React from "react";
import "./Notification.css";

export default function Notification(props) {
  return (
    // Component này dùng để hiển thị icon hình quả chuông như hình dưới
    // Screenshot: https://cdn.glitch.com/6ecf0067-b2e5-4d35-b27d-e91d326d2da4%2FPasted_Image_4_20_20__8_35_PM.png?v=1587382516834
    // Có chấm đỏ là một thẻ div, biểu thị rằng đang có notification chưa đọc
    // Sử dụng prop `hasUnread` để điều khiển việc hiển thị chấm đỏ
    // Cho biết hasUnread là một boolean
    // Dùng icon ở flaticon.com
    // Thêm component này vào App component để test
    <div className="notification">
      <img
        src="https://image.flaticon.com/icons/svg/2097/2097743.svg"
        alt="not found"
      />
      {props.hasUnread && <div className="nodeRed" />}
    </div>
  );
}
