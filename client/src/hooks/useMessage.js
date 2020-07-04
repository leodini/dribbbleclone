import { useContext } from "react";
import MessageContext from "../context/messageContext";

export default function useAuth() {
  const context = useContext(MessageContext);

  if (!context) throw new Error("must be inside provider");

  return context;
}
