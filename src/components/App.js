import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent from "./ChildComponent";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  onLogin();
};


  return (
    <div>
      {/* Do not remove the main div */}
      {isLoggedIn ? (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Welcome, You are Logged In!
        </h2>
      ) : (
        <ChildComponent isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
