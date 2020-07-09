import React, { useState, useEffect, useCallback } from "react";
import api from "../../api";
import Header from "../Header/Header";
import { Avatar } from "../Shared/Avatar";
import useAuth from "../../hooks/useAuth";
import default_user from "../../assets/user.png";
import { Input, Label, TextArea } from "../Upload/StyledUpload";
import {
  UserInfo,
  SettingsPage,
  SettingsContainer,
  Separator,
  Edit,
} from "./StyledSettings";
import useMessage from "../../hooks/useMessage";

const Settings = ({ history }) => {
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [bio, setBio] = useState("");
  const { addMessage } = useMessage();
  const { user, getNewToken } = useAuth();

  const getUserData = useCallback(async () => {
    const {
      data: { username, bio, avatar_url },
    } = await api.get(`/user/${user.user_id}`);
    setUsername(username);
    setBio(bio);
    setProfilePicture(avatar_url);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userData = {
      username,
      bio,
      avatar_url: profilePicture,
    };
    try {
      const { data } = await api.put("/user", userData);
      addMessage("User edited successfully", "success");
      //setting new token with the changes made
      getNewToken(data);
      setTimeout(() => {
        history.push("/");
      }, 1600);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  if (!username) return null;
  return (
    <>
      <Header />
      <SettingsPage>
        <UserInfo>
          <Avatar user={user} />
          <div className="slat-header">
            <h1>
              {user.username} <span>/</span> Edit Profile
            </h1>
            <h2>Set up your Dribbbleo presence and hiring needs</h2>
          </div>
        </UserInfo>
        <SettingsContainer>
          <Separator></Separator>
          <Edit onSubmit={handleSubmit}>
            {profilePicture ? (
              <img src={profilePicture} alt="" />
            ) : (
              <img src={default_user} alt={username} />
            )}
            <Label htmlFor="username">Profile picture</Label>
            <Input
              id="profilePicture"
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
            />
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Label htmlFor="username">Bio</Label>
            <TextArea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            />
            <button type="submit">Edit Profile</button>
          </Edit>
        </SettingsContainer>
      </SettingsPage>
    </>
  );
};

export default Settings;
