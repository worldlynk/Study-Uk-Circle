import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./UserDashboard.css";
import ExploreEvents from "./ExploreEvents";
import { useAuth } from "../../auth/userProvider/AuthProvider";
import { getDoc, doc } from "firebase/firestore";
import { firestore } from "../../firebase";
import { FaSearch } from "react-icons/fa";
import Menu from "./Menu";
import RightContent from "./RightContent";


const UserDashboard = () => {
  const auth = useAuth();
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!auth) return;

    const fetchData = async () => {
      try {
        console.log("Fetching user data...");

        // Fetch user data from Firestore
        const userDocRef = doc(firestore, "users", auth.currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          console.log("User document exists");
          console.log("User data:", userDoc.data());

          setUserData(userDoc.data());
        } else {
          console.log("User document does not exist");
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }

     

      setLoading(false);
      setInitialLoad(false);
    };

    fetchData();
  }, [auth]);

  return (
    <div className="user-dashboard">
      <Menu user={userData} />
      <div className="content">
        <div className="left-content">
          <div className="search-and-check">
            <form className="search-box">
              <input type="text" placeholder="Search event..." />
              <FaSearch style={{ position: 'relative', top: '5px', left: '-25px', zIndex: '1' }} />
            </form>
          </div>
          {userData ? <Outlet user={[userData]} /> : <div>Loading...</div>}
        </div>
        <RightContent user={userData} />
      </div>
    </div>
  );
};

export default UserDashboard;