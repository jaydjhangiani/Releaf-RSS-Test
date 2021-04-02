import React, { useEffect, useState } from 'react'
import Podcast from './Podcast'
import axios from 'axios'
import Pod from '../Components/Pod'


const PodcastLanding = () => {
    const [pods, setPods] = useState(null)
    const podcastList = [
        "https://anchor.fm/s/30bb320/podcast/rss" ,
        "https://anchor.fm/s/87efe70/podcast/rss"
      ]

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
        <div>
            <Pod pods={pods} />
        </div>
    )
}

export default PodcastLanding
