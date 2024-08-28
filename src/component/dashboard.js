import { useNavigate} from "react-router-dom";

export const Dashboard = () => {
    let navigate = useNavigate();
  return (
    <>
      <div class="home-container">
        <div class="second-home-container">
          <nav className="text-white mt-5 text-center">
            <ul id="list-2">
           <li onClick={()=>{navigate("/Home")}}><p class="para" style={{cursor:"default"}}>Home</p></li>
           <li onClick={()=>{navigate("/Messages")}}style={{cursor:"default"}}><p class="para">Messages</p></li>
           <li onClick={()=>{navigate("/Notification")}}style={{cursor:"default"}}><p class="para">Notification</p></li>
           <li onClick={()=>{navigate("/profile")}}style={{cursor:"default"}}><p class="para">Profile</p></li>
           <li onClick={()=>{navigate("/setting")}}style={{cursor:"default"}}><p class="para">Setting</p></li>
           
            
            </ul>

          </nav>
        </div>
      </div>
    </>
  );
};
