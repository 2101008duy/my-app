import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
        <div className="layout">
            <Sidebar />
            <Maincontent />
        </div>
            <Footer />
        </div>
        );
};

export default App;
