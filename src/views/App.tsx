import React from "react";
import LoggedIndRoutes from "./loggedInRoutes";

function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <LoggedIndRoutes />;
  }
  return <div className="App">a</div>;
}

export default App;
