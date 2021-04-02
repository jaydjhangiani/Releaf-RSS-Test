import React from 'react'

function PlayerDetails({podcast}) {
    return (
        <div className="c-player--details">
            <div className="details-img">
                <img src={podcast.itunes.image} alt={podcast.title} />
            </div>
            <h3 className="details-title">{podcast.title}</h3>
            <h4 className="details-artist">{podcast.itunes.author}</h4>
        </div>
    )
}

export default PlayerDetails