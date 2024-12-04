import React from 'react';


import Header from './components/header';
import Footer from './components/footer';
import HomePage from './Page/home';

function App() {
  return (
    <div className="flex flex-col ">
      <Header />
    
        <HomePage />

      <Footer />
    </div>
  );
}

export default App;
