import React from "react";
import "./avatar.css";
import A_ONE from "../../assets/A_ONE.png";

const Avatar = ({ img }) => {
  // console.log(img);
  // if (!img)img = { A_ONE };
  return (
    <div className="avatar-wrapper overlap-img">
      {/* {img ? (
        <img className="avatar-img" src={img} />
      ) : (
        <img className="avatar-img" src={A_ONE} />
      )} */}
      <img className="avatar-img" src={A_ONE} />
    </div>
  );
};

export default Avatar;
