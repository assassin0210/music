import './style/app.scss'
import {Song} from "./components/Song";
import {Player} from "./components/Player";
import data from './data'
import {useRef, useState} from "react";
import {Library} from "./components/Library";
import {Nav} from "./components/Nav";

function App() {
    const audioRef = useRef(null)
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })
    const [libraryStatus , setLibraryStatus] =useState(false)
const libraryStatusHandler =()=>{
    setLibraryStatus(!libraryStatus)
}


    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime, duration})
    }

    return (
            <div className="App">
                <Nav libraryStatusHandler={libraryStatusHandler} />
                <Song currentSong={currentSong}/>
                <Player isPlaying={isPlaying}
                        setCurrentSong={setCurrentSong}
                        songs={songs}
                        songInfo={songInfo}
                        setSongInfo={setSongInfo}
                        audioRef={audioRef}
                        setIsPlaying={setIsPlaying}
                        currentSong={currentSong}
                        setSongs={setSongs}
                />
                <Library audioRef={audioRef}
                         libraryStatus={libraryStatus}
                         setSongs={setSongs}
                         currentSong={currentSong}
                         setCurrentSong={setCurrentSong}
                         songs={songs}
                         isPlaying={isPlaying}
                />
                <audio onTimeUpdate={timeUpdateHandler}
                       onLoadedMetadata={timeUpdateHandler}
                       ref={audioRef}
                       src={currentSong.audio}>

                </audio>
            </div>
    );
}

export default App;
