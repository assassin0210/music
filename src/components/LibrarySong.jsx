export const LibrarySong = ({song, setCurrentSong, songs, audioRef, isPlaying ,setSongs}) => {
    const songSelectHandler = () => {

        const selectedSong = songs.filter((state) => state.id === song.id)
        setCurrentSong(selectedSong[0])

        if (isPlaying) {
            const playPromise = audioRef.current.play()
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play()
                })
            }
        }
const newSong =songs.map((activeSong)=>{
    if(activeSong.id ===song.id){
        return{
            ...activeSong,
            active:true,
        }
    }else{
        return{
            ...activeSong,
            active:false,
        }
    }
})
        setSongs(newSong)

    }
    return (
            <div onClick={songSelectHandler} className={
                `library-song   ${song.active? ' selected': ''}`
            }>
                <img src={song.cover} alt={song.name}/>
                <div className='song-description'>
                    <h3>{song.name}</h3>
                    <h4>{song.artist}</h4>
                </div>
            </div>
    )
}
