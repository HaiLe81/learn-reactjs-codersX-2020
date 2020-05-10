import React from "react";
import "./TabMenu.css";
import Icon from "./Icon/Icon";

export default function TabMenu() {
  const array = [
    {
      icon: "https://image.flaticon.com/icons/svg/846/846551.svg",
      name: "HOME",
      className: "active"
    },
    {
      icon: "https://image.flaticon.com/icons/svg/2622/2622718.svg",
      name: "DEALS",
      className: "normal"
    },
    {
      icon: "https://image.flaticon.com/icons/svg/1103/1103496.svg",
      name: "UPLOAD",
      className: "normal"
    },
    {
      icon: "https://image.flaticon.com/icons/svg/633/633652.svg",
      name: "WORK",
      className: "normal"
    },
    {
      icon: "https://image.flaticon.com/icons/svg/2099/2099058.svg",
      name: "SETTINGS",
      className: "normal"
    }
  ];
  return (
    // bai 2
    <div className="tabmenu">
      {array.map(x => (
        <Icon className={x.className} name={x.name} url={x.icon} />
      ))}
      {/* bai 1 */}
      {/* <Icon
        className="active"
        name="HOME"
        url="https://image.flaticon.com/icons/svg/846/846551.svg"
      />
      <Icon
        name="DEALS"
        url="https://image.flaticon.com/icons/svg/2622/2622718.svg"
      />
      <Icon
        name="UPLOAD"
        url="https://image.flaticon.com/icons/svg/1103/1103496.svg"
      />
      <Icon
        name="WORK"
        url="https://image.flaticon.com/icons/svg/633/633652.svg"
      />
      <Icon
        name="SETTINGS"
        url="https://image.flaticon.com/icons/svg/2099/2099058.svg"
      /> */}
    </div>
  );
}
