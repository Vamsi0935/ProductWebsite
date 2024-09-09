import React from "react";
import { getInitials } from "../Products/utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <>
      <div className="border border-secondary p-2 rounded rounded-5 mx-2">
        {getInitials("Vamsi Krishna")}
      </div>
      <button className="btn btn-danger" onClick={onLogout}>
        Logout
      </button>
    </>
  );
};

export default ProfileInfo;
