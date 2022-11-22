import React from 'react';
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import ClientsComponent from './Components/Clients';
import SupportComponent from './Components/Support';

function App() {
  const [navName, setNavName] = React.useState<string>('Clients');

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: 'absolute', left: '50px', fontWeight: 'bold' }}>
          {navName}
        </div>
        <Link className='button-36' to="/clients" onClick={()=>{setNavName('Client')}} > Client side</Link>
        <Link className='button-36' to="/support" onClick={()=>{setNavName('Support')}}> Support side</Link>
      </header>
      <Routes>
        <Route path="/" element={<ClientsComponent />} />
        <Route path="/clients" element={<ClientsComponent />} />
        <Route path="/support" element={<SupportComponent />} />
      </Routes>

    </div>
  );
}

export default App;
