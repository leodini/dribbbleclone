import React from "react";
import default_user from "../../assets/user.png";
import { UserAvatar } from "./StyledAvatar";
import Proptypes from "prop-types";

export const Avatar = ({ user, width, height }) => {
  return (
    <>
      {user.avatar_url ? (
        <UserAvatar
          src={user.avatar_url}
          alt={user.username}
          height={height ? height : ""}
          width={width ? width : ""}
        />
      ) : (
        <UserAvatar
          src={default_user}
          alt={user.username}
          height={height ? height : ""}
          width={width ? width : ""}
        />
      )}
    </>
  );
};

Avatar.propTypes = {
  width: Proptypes.string,
  height: Proptypes.string,
};
