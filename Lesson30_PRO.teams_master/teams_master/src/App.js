import { useState } from "react";
import NavMenu from "./components/NavMenu";
import { Routes, Route } from 'react-router-dom'
import MainPage from "./pages/MainPage";
import ConfigurationsPage from "./pages/ConfigurationsPage";
import TeamsPage from "./pages/TeamsPage";
import { Context } from "./context";

function App() {

  const [ teams, setTeams ] = useState([]);
  const [users, setUsers] = useState([]);

  const addTeam = value => {
    setTeams([...teams, { 
      value, 
      label: value
    }])
  }

  const addUser = (user,team) => {
    setUsers([...users, {
      id: Date.now(),
      user,
      team
    }])
  }

  const deleteUser = id => {
    setUsers(users.filter(el => el.id !== id));
  }

  return (
    <div>
      <Context.Provider value={{ teams, addTeam, addUser, users, deleteUser }}>
        <NavMenu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/configurations" element={<ConfigurationsPage />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;