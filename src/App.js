import {BrowserRouter ,Route,Routes,redirect,useLocation} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import Accounts from './pages/Accounts'
import ProtectedRoute from "./components/ProtectedRoute";
import Trailer from "./pages/Trailer";
import Search from "./pages/Search";
import './index.css';



function App() {
  const location=useLocation();
  const currentPath = location.pathname;
  const pathsToHideNavbar = ['/search'];
  const shouldHideNavbar = pathsToHideNavbar.includes(currentPath);

  return (
    <div>
      
      <AuthContextProvider>
        
      {!shouldHideNavbar && <Navbar />}
      <Routes>
      
        <Route  path="/" element={<Home></Home>}></Route>
        <Route  path="/login" element={<Login></Login>}></Route>
        <Route  path="/signup" element={<SignUp></SignUp>}></Route>
        <Route  path="/account" element={<ProtectedRoute><Accounts></Accounts></ProtectedRoute>}></Route>

        <Route  path="/search" element={<Search></Search>}></Route>
        <Route  path="/trailer/:id" element={<Trailer></Trailer>}></Route>
        </Routes>

     
      

      </AuthContextProvider>
      
      
    </div>
  );
}

export default App;
