import React from 'react';
import { UserContextProvider } from './Usercontex';
import App1 from './Register';
import App3 from './login';
import Dashboard from './Dashboard'
import AppCard from './AppCard';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <UserContextProvider>
    <Router>
      {/* Definir tus rutas dentro del componente Router */}
      <Routes>
        <Route path="/Register" element={<App1/>} />
        <Route path="/Login" element={<App3 />} />
        <Route path="/Home" element={<Dashboard />} />
        <Route path="/H" element={<AppCard />} />
        
        {/* Otras rutas */}
      </Routes>
    </Router>
    </UserContextProvider>
  );
}


export default App;