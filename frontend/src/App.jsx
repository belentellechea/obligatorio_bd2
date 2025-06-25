// import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Homepage from "../src/pages/Homepage";
import SelectUser from "./pages/SelectUser";
import UserLogin from "./pages/UserLogin";
import UserHome from "./pages/UserHome";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome/Index";
import AdminSearch from "./pages/AdminSearch/Index";
import VoteResults from "./pages/VoteResults";
import VoteParty from "./pages/VoteParty";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Homepage replace to="/homepage" />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/selectUser" element={<SelectUser />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/adminSearch" element={<AdminSearch />} />
          <Route path="/voteResults" element={<VoteResults />} />
          <Route path="/voteParty" element={<VoteParty />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
