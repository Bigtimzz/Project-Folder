import React from 'react';

const YouTubePage = () => {
  const handlePlayClick = () => {
    // Replace the URL below with the link to the YouTube channel
    window.location.href = 'https://www.youtube.com/@crownprinceproperties';
  };

  return (
    <div style={styles.container}>
      <div style={styles.videoWrapper}>
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/VIDEO_ID?autoplay=0&controls=1"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button style={styles.playButton} onClick={handlePlayClick}>
          Go to YouTube Channel
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  },
  videoWrapper: {
    position: 'relative',
    width: '80%',
    maxWidth: '800px',
  },
  playButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#ff0000',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default YouTubePage;
