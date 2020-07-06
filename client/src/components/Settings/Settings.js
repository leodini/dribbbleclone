import React, { useState, useEffect, useCallback } from "react";
import api from "../../api";
import Header from "../Header/Header";
import { Avatar } from "../Shared/Avatar";
import useAuth from "../../hooks/useAuth";
import {
  UserInfo,
  SettingsPage,
  SettingsContainer,
  Tabs,
  Edit,
} from "./StyledSettings";

const Settings = () => {
  const [userData, setUserData] = useState(null);
  const { user } = useAuth();

  const getUserData = useCallback(async () => {
    const { data } = await api.get(`/user/${user.user_id}`);
    setUserData(data);
    console.log(data);
  }, [user]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  if (!userData) return null;
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
          <Tabs></Tabs>
          <Edit></Edit>
        </SettingsContainer>
      </SettingsPage>
    </>
  );
};

export default Settings;
