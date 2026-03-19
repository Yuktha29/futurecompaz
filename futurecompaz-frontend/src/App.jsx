import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import K12Page from "./pages/K12Page";
import MathPage from "./pages/MathPage";
import AbacusPage from "./pages/AbacusPage";
import ReadingPage from "./pages/ReadingPage";
import InterestsPage from "./pages/InterestsPage";
import FinancialLiteracyPage from "./pages/FinancialLiteracyPage";
import DebateClubPage from "./pages/DebateClubPage";
import CodingPage from "./pages/CodingPage";
import CulturalRootsPage from "./pages/CulturalRootsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/k12" element={<K12Page />} />
      <Route path="/k12/math" element={<MathPage />} />
      <Route path="/k12/abacus" element={<AbacusPage />} />
      <Route path="/k12/reading" element={<ReadingPage />} />
      <Route path="/interests" element={<InterestsPage />} />
      <Route path="/interests/financial-literacy" element={<FinancialLiteracyPage />} />
      <Route path="/interests/debate-club" element={<DebateClubPage />} />
      <Route path="/coding" element={<CodingPage />} />
      <Route path="/cultural-roots" element={<CulturalRootsPage />} />
      <Route path="/courses" element={<CoursesPage />} />
    </Routes>
  );
}

export default App;