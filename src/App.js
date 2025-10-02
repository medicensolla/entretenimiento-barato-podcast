import React, { useState } from 'react';
import StoryForm from './components/StoryForm';
import Redes from './components/Redes';
import Podcast from './components/Podcast';
import QuienesSomos from './components/QuienesSomos';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('story');

  const renderPage = () => {
    switch (currentPage) {
      case 'redes':
        return <Redes onNavigate={setCurrentPage} />;
      case 'podcast':
        return <Podcast onNavigate={setCurrentPage} />;
      case 'quienes-somos':
        return <QuienesSomos onNavigate={setCurrentPage} />;
      case 'story':
      default:
        return <StoryForm onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;