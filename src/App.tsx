import { useState } from 'react';
import DataModule from './components/DataModule';
import './css/App.css';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>Castle Dashboard</h1>
      </div>
      <div className="app__content">
        <section className="app__content__sidebar">
          <ul>
            <li>
              <button className="btn btn-sidebar">
                <i className="fas fa-database"></i>
                <span>Database</span>
              </button>
            </li>
            <li>
              <button className="btn btn-sidebar" disabled>
                <i className="fas fa-cog"></i>
                <span>Settings</span>
              </button>
            </li>
            <li>
              <button className="btn btn-sidebar" disabled>
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </section>
        <section className="app__content__main">{
          <DataModule />
        }</section>
      </div>
    </div>
  );
}

export default App;
