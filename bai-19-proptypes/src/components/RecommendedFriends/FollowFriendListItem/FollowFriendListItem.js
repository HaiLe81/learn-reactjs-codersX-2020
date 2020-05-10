import React from "react";
import PropTypes from "prop-types";

import "./FollowFriendListItem.css";

export default function FollowFriendListItem(props) {
  return (
    <div className="itemFlow">
      <div className="left">
        <img
          src={`${
            props.url
              ? props.url
              : "http://res.cloudinary.com/hai-le/image/upload/v1588503812/m67bhun82sxkvse1ssld.png"
          }`}
          alt="not found"
        />
        <div className="content">
          <p className="name">{props.item.name}</p>
          <p className="reqForYou">Gợi ý cho bạn</p>
        </div>
      </div>
      <div className="right">Theo dõi</div>
    </div>
  );
}

FollowFriendListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string
  })
};
