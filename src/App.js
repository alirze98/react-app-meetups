import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import MainNavigation from "./components/layout/mainNavigation";
import AllMeetUpPage from "./pages/allMeetUpPage";
import FavoritesPage from "./pages/favoritesPage";
import NewMeetUpPage from "./pages/newMeetUpPage";
const App = () => {
  return(
    <>
    <Layout>
    <Routes>
    <Route path="/favorites" element={<FavoritesPage />} />
    <Route path="/new-meetUp" element={<NewMeetUpPage />} />
    <Route path="/" element={<AllMeetUpPage />} />
    </Routes>
    </Layout>
    </>
  )
};
export default App;