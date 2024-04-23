import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './components/Inicio';
import Equipos from './components/Equipos';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/equipos" element={<Equipos />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
