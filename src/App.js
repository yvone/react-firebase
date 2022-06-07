import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
	Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import {
  Login,
  Register,
  Reset,
  Faqs,
} from './pages';

/** PAGES */

function NotFound() {
  return(
    <p>NOT FOUND</p>
  );
}

function Dashboard() {
  return (
    <div className="App">
      <header
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <h1 style={{
          margin: '1rem',
        }}>
          {`Welcome`}
        </h1>

        <div
          style={{
            display: 'flex',
            flex: 3,
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '1rem',
            padding: '0 2rem'
          }}
        >
          <button className="magic">
            Logout
          </button>
        </div>
      </header>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <Faqs />
      </div>
    </div>
  );
}

/** ROUTING */

function App() {
  return (
    <Router>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/reset" element={<Reset />} />
				<Route exact path="/dashboard" element={<Dashboard />} />
				<Route exact path="*" element={<NotFound />} />
			</Routes>
		</Router>
  );
}

export default App;
