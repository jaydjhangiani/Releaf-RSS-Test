import React,{useState,useEffect}  from 'react'
import Player from '../Components/Player'
import axios from 'axios'
import '../styles/playlist.css'
import '../styles/podcast.css'
import PodcastDetails from '../Components/PodcastDetails'

const Podcast = () => {
  
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  // const [podcastList, setPodcastList] = useState(null);
  const [pods, setPods] = useState(null)
  const podcastList = [
      "https://anchor.fm/s/30bb320/podcast/rss" ,
      "https://anchor.fm/s/87efe70/podcast/rss"

    ]

  // // const rss = { rss : "https://feeds.soundcloud.com/users/soundcloud:users:806900710/sounds.rss" }
  // // const rss = { rss : "https://anchor.fm/s/30bb320/podcast/rss" }
  const rss = { rss : `${podcastList[0]}` }

  useEffect(() => {   
    async function getPodcast(){
      try{
        let res = (await axios.post('http://localhost:5000/api/rss/', rss ))
        // console.log(res.data)
        setPods(res.data)
    
      }
      catch(err){
        console.log(err);
      }
    } 
    getPodcast()
  },[])
  
  return (
      <div className="podcast">
        {/* checking if null */}
          {pods === null ?
          (
            <h1>Loading...</h1>
          ) : 
          ( 
            <div className="podcast__dock">
              <div className = "podcast__player">
              <Player 
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              pods={pods}
            />
              </div>
              <div className = "podcast__contents">
            {
                pods.map((item,index) => 
                <PodcastDetails key={index} item={item} index={index} current={currentSongIndex}/>
            )
              }
              </div>
            </div>
          )
        }
        </div>
    )
  }

  export default Podcast
