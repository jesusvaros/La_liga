import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import LoggedIndRoutes from "./loggedInRoutes";
import LoginView from "./login";

function App() {
  // Check for token in the store to display the correct routes
  const { token } = useSelector((state: RootState) => state.auth);

  if (token) {
    return <LoggedIndRoutes />;
  }
  return <LoginView />;
}

export default App;
