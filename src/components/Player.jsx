import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";


export const Player = ({setSongs, currentSong, setSongInfo, songInfo, isPlaying, setIsPlaying, audioRef, songs, setCurrentSong}) => {

    const dragValue = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }


    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }

    const skipForwardHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        if (direction === 'skip-forward') {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length])
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
        }
        if (direction === 'skip-back') {
            if ((currentIndex + -1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1])
                activeLibraryHandler(songs[songs.length - 1])
                if(isPlaying) audioRef.current.play()
                return
            }
            await setCurrentSong(songs[(currentIndex + -1) % songs.length])
            activeLibraryHandler(songs[(currentIndex + -1) % songs.length])
        }
        if(isPlaying) audioRef.current.play()
    }

    const activeLibraryHandler=(nextPrev)=>{
        const newSong = songs.map((song) => {
            if (song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        })
        setSongs(newSong)
    }

    const playSongHandler = () => {

        if (isPlaying) {
            setIsPlaying(!isPlaying)
            audioRef.current.pause()
        } else {
            setIsPlaying(!isPlaying)
            audioRef.current.play()
        }
    }

    const trackAnimation ={
        transform:`translateX(${songInfo.animationPercentage }%)`
    }

    return (
        <div className='player'>
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={ {background:`linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}}
                     className="track">
                    <input min={0}
                           onChange={dragValue}
                           max={songInfo.duration || 0}
                           value={songInfo.currentTime}
                           type="range"/>
                    <div style={trackAnimation} className="animate-track">

                    </div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back'
                                 size='2x' icon={faAngleLeft}
                                 onClick={() => skipForwardHandler('skip-back')}
                />
                <FontAwesomeIcon onClick={playSongHandler} className='play' size='2x'
                                 icon={isPlaying ? faPause : faPlay}
                />
                <FontAwesomeIcon onClick={() => skipForwardHandler('skip-forward')}
                                 className='skip-forward'
                                 size='2x' icon={faAngleRight}
                />
            </div>

        </div>
    )
}
