

export const LibrarySong = ({song, setCurrentSong, songs, audioRef, isPlaying, setSongs}) => {
    const songSelectHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === song.id)
        await setCurrentSong(selectedSong[0])
        const newSong = songs.map((activeSong) => {
            if (activeSong.id === song.id) {
                return {
                    ...activeSong,
                    active: true,
                }
            } else {
                return {
                    ...activeSong,
                    active: false,
                }
            }
        })
        setSongs(newSong)
        if(isPlaying) audioRef.current.play()

    }
    return (
            <div onClick={songSelectHandler} className={
                `library-song   ${song.active ? ' selected' : ''}`
            }>
                <img src={song.cover} alt={song.name}/>
                <div className='song-description'>
                    <h3>{song.name}</h3>
                    <h4>{song.artist}</h4>
                </div>
            </div>
    )
}
