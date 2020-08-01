import React from 'react';
import './App.css';
import Home from './pages/Home.js'
import Rooms from './pages/Rooms.js'
import SingleRoom from './pages/SingleRoom.js'
import Error from './pages/Error.js'
import NavBar from './components/NavBar.js'
import {RoomProvider} from './Context'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <RoomProvider >
      <NavBar />
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/Rooms"><Rooms /></Route>
            <Route exact path="/Rooms/:slug"><SingleRoom /></Route>
            <Route><Error /></Route>
        </Switch>
        </RoomProvider>
    </Router>
   
  );
}

export default App;
