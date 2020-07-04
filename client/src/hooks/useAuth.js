import { useContext } from "react";
import AuthContext from "../context/authContext";

export default function useMessage() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("must be inside provider");

  return context;
}
