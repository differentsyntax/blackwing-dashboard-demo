import Navbar from "./components/navbar/Navbar";
import DashboardPage from "./pages/dashboard-page/DashboardPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketsPage from "./pages/markets-page/MarketsPage";
import EarnPage from "./pages/earn-page/EarnPage";
import LoginPage from "./pages/login-page/LoginPage";
import LeaderboardsPage from "./pages/leaderboards-page/LeaderboardsPage";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/markets" element={<MarketsPage />} />
          <Route path="/earn" element={<EarnPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
