import React,{useState, useRef, useEffect} from 'react'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'
import Slider from './Slider';

const Player = ({ currentSongIndex , setCurrentSongIndex, nextSongIndex, pods}) => {
    
    const audioEl = useRef(null);
    const[isPlaying, setIsPlaying] = useState(false)
    const [percentage, setPercentage] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const onChange = (e) => {
        const audio = audioEl.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)

    }

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp++;
                console.log(temp)
                if (temp > pods.length - 1) {
                    temp = 0;
                    // console.log('forward')
                }
                //console.log(temp)
                return temp;
                
            });
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = pods.length - 1;
                }
                return temp;
            });
        }
    }

    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime
    
        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
      }

    return (
        <div className="c-player">
            
            <h4>Playing Now</h4>
            
            {pods === null ?
            (
              <h1>Loading...</h1>
            ) : 
            (
                <div>
                <audio ref={audioEl} src={pods[currentSongIndex].enclosure.url}
                    onLoadedData = {(e) => {
                        console.log(e.currentTarget.duration.toFixed(2))
                    }}
                    onTimeUpdate = {getCurrDuration}
                ></audio>
                <PlayerDetails podcast={pods[currentSongIndex]}/>
                <Slider onChange = {onChange} percentage={percentage}/>
                <PlayerControls isPlaying = {isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
                {/* {console.log(pods[currentSongIndex])} */}
                <p className = "c-player--date">{(pods[currentSongIndex].pubDate).split(" ").slice(0, 4).join(" ")}</p>
                <p className = "c-player--next"><strong>Next up: </strong>{pods[nextSongIndex].title}</p>
                </div>
            
            )}                
            </div>
    )
}

export default Player
