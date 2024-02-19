import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProvider from "./auth/userProvider/AuthProvider";
import Testing from './components/Testing'
import Reset from "./components/reset";
import Welcome from "./components/Welcome";
import Login from "./components/LoginPage"; // Assuming you have a Login component
import Register from "./components/register";
import Dashboard from "./components/Admin/adminDashboard";
import EventUploadForm from "./components/Admin/EventUpload";
import Overview from "./components/Admin/Overview";
import SignIn from "./components/SignIn";
import LoginPage from "./components/LoginPage";

function App() {
  return (

      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path = "/login"element={<LoginPage />} />
           
            <Route path="/dashboard" element={<Dashboard />} >
            <Route path="/dashboard/overview" element={<Overview />} />
            <Route path="/dashboard/add-event" element={<EventUploadForm />} />

            </Route>

            <Route path="/event" element={<EventUploadForm />} />

            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
 
  );
}

export default App;
