import { useContext } from "react";
import AuthContext from "../context/authContext";

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
