import {LibrarySong} from "./LibrarySong";



export const Library=({songs,setCurrentSong, currentSong,audioRef,isPlaying, setSongs,libraryStatus})=>{
    return(
            <div className={`library ${!libraryStatus? 'libraryNone': ''}`}>
                <h2>Library</h2>
                <div className="library-songs">
                    {songs.map(song=><LibrarySong key={song.id}
                                                  setSongs={setSongs}
                                                  isPlaying={isPlaying}
                                                  currentSong={currentSong}
                                                  songs={songs}
                                                  audioRef={audioRef}
                                                  setCurrentSong={setCurrentSong}
                                                  song={song}/>)}
                </div>

            </div>
    )
}
