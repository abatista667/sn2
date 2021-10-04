
import React from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Body from '../components/Body'

function GalleryPage() {
  return (
    <div>
      <Header />
      <Body>
        <Gallery />
      </Body>
    </div>
  );
}

export default GalleryPage;