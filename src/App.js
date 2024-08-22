
import './App.css';
import "./signin.css"
import "./dashboard.css"
import "./signUp.css"
import "./verifyemail.css"
// import "./EditProfile.css"

import {Route,Routes} from "react-router-dom"
import { SignIn } from './component/signIn';
import { SignUp } from './component/signUp';
import { Home } from './component/home';
import { Dashboard } from './component/dashboard';
import { SendOtp } from './component/emailVerification';
import { Profile } from './component/Profile';
import { EditProfile } from './component/EditProfile';

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<SignIn/>}></Route>
     <Route path='/signup'element={<SignUp/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/verify-email" element={<SendOtp/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/profile/editProfile" element={<EditProfile/>}></Route>


      
    </Routes>
  </div>
  );
}

export default App;
