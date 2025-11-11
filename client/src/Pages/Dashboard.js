import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CardSection from '../components/Cards/CardSection';
import LargeCard from '../components/Cards/LargeCard';
import AudioPlayer from '../components/Player/AudioPlayer';
import VideoPlayer from '../components/Player/VideoPlayer';
import { songsAPI } from '../utils/api';

const Dashboard = () => {
  const { user } = useAuth();
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicData, setMusicData] = useState({
    featured: [],
    worship: [],
    playlists: [],
    recentlyPlayed: []
  });

  useEffect(() => {
    loadMusicData();
  }, []);

  const loadMusicData = async () => {
    try {
      // En una app real, estos vendrían de la API
      const mockData = {
        featured: [
          {
            id: 1,
            title: "Alaba Su Nombre",
            artist: "Christine D'Clario",
            cover: "https://via.placeholder.com/300/1DB954/FFFFFF?text=Alaba+Su+Nombre",
            audioUrl: "https://www.soundjay.com/button/button-1.mp3",
            type: "audio",
            genre: "Alabanza"
          },
          {
            id: 2,
            title: "Solo en Cristo",
            artist: "Alex Campos",
            cover: "https://via.placeholder.com/300/1DB954/FFFFFF?text=Solo+en+Cristo",
            audioUrl: "https://www.soundjay.com/button/button-2.mp3",
            type: "audio",
            genre: "Alabanza"
          },
          {
            id: 3,
            title: "Dios de lo Imposible",
            artist: "Marcos Witt",
            cover: "https://via.placeholder.com/300/1DB954/FFFFFF?text=Dios+de+lo+Imposible",
            audioUrl: "https://www.soundjay.com/button/button-3.mp3",
            type: "audio",
            genre: "Alabanza"
          }
        ],
        worship: [
          {
            id: 4,
            title: "Alabanza y Adoración",
            artist: "Hillsong United",
            cover: "https://via.placeholder.com/300/1DB954/FFFFFF?text=Alabanza+y+Adoración",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            type: "video",
            genre: "Worship"
          },
          {
            id: 5,
            title: "Momentos de Paz",
            artist: "Música Cristiana Relajante",
            cover: "https://via.placeholder.com/300/1DB954/FFFFFF?text=Momentos+de+Paz",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            type: "video",
            genre: "Relajante"
          }
        ],
        playlists: [
          {
            id: 6,
            title: "Alabanza Matutina",
            description: "Comienza tu día con alabanza",
            cover: "https://via.placeholder.com/300/1DB954/FFFFFF?text=Alabanza+Matutina",
            type: "playlist",
            songs: 24
          },
          {
            id: 7,
            title: "Música para Orar",
            description: "Ambiente musical para tu tiempo con Dios",
            cover: "https://via.placeholder.com/300/1DB954/FFFFFF?text=Música+para+Orar",
            type: "playlist",
            songs: 18
          }
        ],
        recentlyPlayed: [
          {
            id: 8,
            title: "Favoritas Cristianas",
            description: "Tus canciones favoritas",
            cover: "https://via.placeholder.com/300/1DB954/FFFFFF?text=Favoritas",
            type: "playlist"
          }
        ]
      };
      setMusicData(mockData);
    } catch (error) {
      console.error('Error loading music data:', error);
    }
  };

  const playTrack = (track) => {
    if (track.type === 'audio') {
      setCurrentTrack(track);
      setCurrentVideo(null);
      setIsPlaying(true);
    } else if (track.type === 'video') {
      setCurrentVideo(track);
      setCurrentTrack(null);
      setIsPlaying(true);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <div className="main-content">
        <Header />
        
        <div className="content-area">
          <div className="welcome-section">
            <h1>Buenas tardes, {user?.name}</h1>
            <div className="quick-play">
              <button className="play-button">
                <i className="fas fa-play"></i>
              </button>
              <span>Reproducir todo</span>
            </div>
          </div>
          
          {/* Large Featured Card */}
          {musicData.featured.length > 0 && (
            <LargeCard 
              item={musicData.featured[0]} 
              onPlay={playTrack}
            />
          )}
          
          <CardSection 
            title="Recientemente escuchado" 
            items={musicData.recentlyPlayed} 
            onPlay={playTrack}
          />
          
          <CardSection 
            title="Destacados" 
            items={musicData.featured} 
            onPlay={playTrack}
          />
          
          <CardSection 
            title="Videos de Alabanza" 
            items={musicData.worship} 
            onPlay={playTrack}
          />
          
          <CardSection 
            title="Tus Playlists" 
            items={musicData.playlists} 
            onPlay={playTrack}
          />
        </div>
      </div>
      
      {currentTrack && (
        <AudioPlayer 
          track={currentTrack} 
          isPlaying={isPlaying}
          onPlayPause={setIsPlaying}
        />
      )}
      
      {currentVideo && (
        <VideoPlayer 
          video={currentVideo}
          isPlaying={isPlaying}
          onPlayPause={setIsPlaying}
        />
      )}
    </div>
  );
};

export default Dashboard;
