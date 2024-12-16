import React from 'react';


import Header from './components/header';
import Footer from './components/footer';
import HomePage from './Page/home';
import ThankYou from './Page/thankyou';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="flex flex-col relative">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
