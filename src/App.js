import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Gallery from './components/Gallery';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const photos = [
    // Add your photo objects here
    { id: 1, src: 'path/to/animal name.jpg', alt: 'Image 1', category: 'nature' },
    { id: 2, src: 'path/to/Desktop - 1.png', alt: 'Desktop-1', category: 'city' },
    { id: 3, src: 'path/to/Desktop - 2.png', alt: 'Image 2', category: 'city' },
    { id: 4, src: 'path/to/Desktop - 3.png', alt: 'Image 3', category: 'city' },
    { id: 5, src: 'path/to/download.jpg', alt: 'Image 3', category: 'city' },
    { id: 6, src: 'path/to/animals.jpg', alt: 'Image 3', category: 'nature' },
    { id: 7, src: 'path/to/Be.png', alt: 'Image 3', category: 'city' },
    { id: 8, src: 'path/to/BeFore.png', alt: 'Image 3', category: 'city' },
    { id: 9, src: 'path/to/food.jpg', alt: 'Image 3', category: 'city' },
    { id: 10, src: 'path/to/fruits name.jpg', alt: 'Image 3', category: 'nature' },
    { id: 11, src: 'path/to/green vegetables.jpg', alt: 'Image 3', category: 'nature' },
    { id: 12, src: 'path/to/logo192.png', alt: 'Image 3', category: 'city' },
    { id: 13, src: 'path/to/run.jpg', alt: 'Image 3', category: 'city' },
    { id: 14, src: 'path/to/seen.jpg', alt: 'Image 3', category: 'nature' },
    { id: 15, src: 'path/to/seen1.jpg', alt: 'Image 3', category: 'nature' },
    { id: 16, src: 'path/to/seen3.jpg', alt: 'Image 3', category: 'nature' },
    
    // Add more photos
  ];

  return (
    <ThemeProvider>
      <div className="app">
        <ThemeToggle />
        <Gallery id='gallery' photos={photos} />
      </div>
    </ThemeProvider>
  );
};

export default App;
