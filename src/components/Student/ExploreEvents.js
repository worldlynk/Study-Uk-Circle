import React, { useState, useEffect } from 'react';
import "./UserDashboard.css";
import EventCard from './EventCard';
import sample2 from '../../assets/img/sample2.jpg'
import { Grid, CircularProgress } from '@mui/material';

import { firestore } from "../../firebase";
import {
  collection,
  getDocs,
  
  forEach
} from "firebase/firestore";
import { QuerySnapshot } from 'firebase/firestore';
import {

  FaStar,

  FaStarHalf,

} from "react-icons/fa";
const ExploreEvents = () => {
  const [eventData, setEventData] = useState([]);

    const [loading, setLoading] = useState(true); // New state for loading indicator

    const fetchEventData = async () => {
      try {
        const eventsCollectionRef = collection(firestore, "events");
        const eventsQuerySnapshot = await getDocs(eventsCollectionRef);
        console.log('inside')
        if (!eventsQuerySnapshot.empty) {
          const data = [];
          eventsQuerySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });
          setEventData(data);
          console.log(data); // Log data, not eventData
        } else {
          console.log("No events found");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events data:", error);
        setLoading(false);
      }
    };
    
    useEffect(() => {
      fetchEventData();
    }, []);
    
  return (
 <div className='explore-events'>
       <div class="header1">
    {/* <picture class="morning-img">
      <img
        class="header-mobile"
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b4f4845f-4dc7-4470-b81a-677f46f211c2"
        alt=""
      />
      <img
        class="header-tablet"
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/8add6e87-577d-44cb-a7bb-18f0e4bd2163"
        alt=""
      />
      <img
        class="header-desktop"
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/cce4084a-01a4-428d-961f-935bafe7a6e3"
        alt=""
      />
    </picture> */}

    <picture class="night-img ">
      <img
        class="header-mobile"
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e349d3c2-ee2c-4982-866e-776236508fc9"
        alt=""
      />
      <img
        class="header-tablet"
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1266c923-a1d3-441a-bbb6-2dc6663b1f8b"
        alt=""
      />
      <img
        class="header-desktop"
        src={sample2}
        alt=""
      />
    </picture>
  </div>

  <div className="upcoming-events">
        <h1>Upcoming Events</h1>
        <div className="event-container">
  {loading ? (
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
     <CircularProgress />
   </div>
  ) : (
    eventData.map((event, index) => (
      <EventCard key={index} eventData={event} />
    ))
  )}
</div>


      </div>

  {/* <div className="reviews">
    <h1>Past Event Reviews</h1>
    <div className="review-container">
      <div className="card review-card">
        <h2>Metal Sculpture Workshop</h2>
        <div className="ratings">
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        </div>
        <p>
          The metal sculpture workshop was a bit tough because shaping
          the metal was harder than expected. It would have been better
          with simpler instructions on how to mold the material.
        </p>
      </div>

      <div className="card review-card">
        <h2>Electro Groove Night</h2>
        <div className="ratings">
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStarHalf/>
        </div>
        <p>
          The Electro Groove Night was so much fun! The music was
          awesome, and everyone had a great time dancing – a fantastic
          night out for sure!
        </p>
      </div>

      <div className="card review-card">
        <h2>Wimbledon Championships - 2023 (Final)</h2>
        <div className="ratings">
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStarHalf/>
        </div>
        <p>
          Watching the Wimbledon final between Novak Djokovic and Carlos
          Alcaraz was so exciting! The intense match and incredible
          skills of the players made it a thrilling experience that I'll
          always remember.
        </p>
      </div>
    </div>
  </div> */}
 </div>
  )
}

export default ExploreEvents