import React from "react";
import LoggedIndRoutes from "./loggedInRoutes";
import LoginView from "./login";

function App() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <LoggedIndRoutes />;
  }
  return <LoginView />;
}

export default App;
