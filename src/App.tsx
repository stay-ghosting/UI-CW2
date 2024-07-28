import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Dashbord from "./page/Dashbord";
import EventList from "./page/EventList";
import { useEffect } from "react";
import Following from "./page/Following";
import sampleData from "./data/SampleData.json";

function App() {
  useEffect(() => {
    if (Object.keys(localStorage).length === 0) {
      for (const [key, value] of Object.entries(sampleData)) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
  }, []);

  return (
    <Router basename="/UI-CW2/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/event-list/:id?" element={<EventList />} />
        <Route path="/following" element={<Following />} />
      </Routes>
    </Router>
  );
}

export default App;
