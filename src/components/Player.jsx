import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";
import {playAudio} from "../util";

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

    const skipForwardHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        if (direction === 'skip-forward') {
            setCurrentSong(songs[(currentIndex + 1) % songs.length])
        }
        if (direction === 'skip-back') {
            if ((currentIndex + -1) % songs.length === -1) {
                setCurrentSong(songs[songs.length - 1])
                playAudio(isPlaying,audioRef)
                return
            }
            setCurrentSong(songs[(currentIndex + -1) % songs.length])
        }
        playAudio(isPlaying,audioRef)
    }

    useEffect(() => {
        const newSong = songs.map((song) => {
            if (song.id === currentSong.id) {
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
    },[currentSong])

    const playSongHandler = () => {

        if (isPlaying) {
            setIsPlaying(!isPlaying)
            audioRef.current.pause()
        } else {
            setIsPlaying(!isPlaying)
            audioRef.current.play()
        }
    }

    return (
            <div className='player'>
                <div className="time-control">
                    <p>{getTime(songInfo.currentTime)}</p>
                    <input min={0}
                           onChange={dragValue}
                           max={songInfo.duration || 0}
                           value={songInfo.currentTime}
                           type="range"/>
                    <p>{songInfo.duration? getTime(songInfo.duration): '0:00'}</p>
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
