import "./App.css";
import { Routes, Route } from "react-router-dom";

import AuthProvider from "./Context/AuthContext";

import Signup from "./Pages/SignupPage/Signup.jsx"
import LoginPage from "./Pages/LoginPage/LoginPage";
import UserHome from "./Pages/UserHome/UserHome.jsx"
import WorkspaceDisplay from "./Pages/WorkspaceDisplay/WorkspaceDisplay.jsx";

function App() {
  return <AuthProvider>
    <div className="app">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route exact path="/:uID" element={<WorkspaceDisplay />} />
      </Routes>
    </div>
  </AuthProvider>;
}

export default App;
