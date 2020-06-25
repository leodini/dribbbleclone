import { useContext } from "react";
import DataContext from "../context/dataContext";

export default function useAuth() {
  const context = useContext(DataContext);

  return context;
}
