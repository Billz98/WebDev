import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from './Screens/LandingPage/LandingPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen/LoginScreen.js';
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen.js';
import Home from './Screens/Home/Home.js';
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen.js';
import NewOrder from './Screens/NewOrder/NewOrder';
import AdminHome from './Screens/AdminHome/AdminHome';
import TrackOrder from './Screens/TrackOrder/TrackOrder';

const App = () => (
  <BrowserRouter>
    <Header />
    <main >
    <Routes>
      <Route  path="/" element={<LandingPage/>} exact/>
      <Route  path="/login" element={<LoginScreen/>}/>
      <Route  path="/register" element={<RegisterScreen/>}/>
      <Route  path="/profile" element={<ProfileScreen/>}/>
      {/*<Route  path="/trackorder" element={<TrackOrder />}/>*/}
      <Route  path="/home" element={<Home />}/>
      <Route  path="/admin" element={<AdminHome />}/>
      <Route  path="/orders" element={<NewOrder />}/>
      <Route  path="/trackorder" element={<TrackOrder />}/>

    </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
