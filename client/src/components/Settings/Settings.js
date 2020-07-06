import React, { useState, useEffect } from "react";
import api from "../../api";
import Header from "../Header/Header";
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

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const { data } = await api.get(`/user/${user._id}`);
    setUserData(data);
  };

  return (
    <>
      <Header />
      <SettingsPage>
        <UserInfo></UserInfo>
        <SettingsContainer>
          <Tabs></Tabs>
          <Edit></Edit>
        </SettingsContainer>
      </SettingsPage>
    </>
  );
};

export default Settings;
