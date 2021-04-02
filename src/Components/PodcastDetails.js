import React, { useEffect, useState } from 'react'
import '../styles/details.css'
import nl2br from 'react-nl2br'
import Linkify from 'react-linkify'
import parse from 'html-react-parser'
import convert from 'convert-seconds'

const PodcastDetails = ({item ,index, current}) => {
    const [currentDiv , setCurrentDiv] = useState(null)
    useEffect(()=>{

        if(current === index){
            console.log(current)
            setCurrentDiv('current')
        }

    },[current])

    return (
        <div className = {"details "} >
            {item === null ?
            (
            <h1>Loading...</h1>
            ) : 
            ( 
                <div>
                {/* {console.log(item)} */}
                {
                    (index === 0) ? 
                    (<span><h1>{item.title}</h1><p className="latest"><strong><i>Latest Episode</i></strong></p></span>)
                    :(<h1>{item.title}</h1>)
                }
                <br/>
                {/* <p>{(item.content).replace(new RegExp('\r?\n','g'), '<br/>')}</p> */}
                <Linkify>
                {/* <p>{nl2br(item.content)}</p> */}
                <div>{parse((item.content).replace(new RegExp('\r?\n','g'),'<br/>'))}</div>
                </Linkify>
                <br/>
                <p><strong>Play Time: </strong>{((item.itunes.duration) / 60).toFixed(2) }</p>
                {/* <p><strong>Play Time: </strong>{convert((item.itunes.duration)).minutes }</p> */}
                {/* <h1>{item}</h1> */}
                </div>
            )  
        }
    </div>
    )
}

export default PodcastDetails
