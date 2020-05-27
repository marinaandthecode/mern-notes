import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';

function App() {

  return (
    <div className="App" onDoubleClick>
      <Header />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
