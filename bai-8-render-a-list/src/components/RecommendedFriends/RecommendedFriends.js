import React from "react";
import "./RecommendedFriends.css";
import FollowFriendListItem from "./FollowFriendListItem/FollowFriendListItem";

export default function RecommendedFriends(props) {
  return (
    <div>
      <div className="RecFriends">
        <p className="title">Gợi ý cho bạn</p>
        <a className="title" href="/">
          Xem tất cả
        </a>
      </div>
      {props.friends.map(x => (
        <FollowFriendListItem name={x.name} />
      ))}
    </div>
  );
}
