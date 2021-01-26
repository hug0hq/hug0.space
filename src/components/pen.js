import React from 'react';

import { Card } from './card';
import { Link } from './link';
import { Video } from 'cloudinary-react'

export const Pen = (props) => {

    return (
        <Card>
            
            <div className="thumbnail" style={{ backgroundColor: props.color }} >
        
                <a href={props.href} target="_black" rel="noreferrer">
                
                    <Video onMouseEnter={event => { event.target.play() }}
                        onMouseLeave={event => { event.target.currentTime = 0; event.target.pause(); }}
                        cloudName="hug0" publicId={props.id} loop="loop" controls={false} poster={'https://res.cloudinary.com/hug0/image/upload/'+props.id+'-poster'}></Video>
                    {/* <video preload="auto" muted loop
                        onMouseEnter={event => { event.target.play() }}
                        onMouseLeave={event => { event.target.currentTime = 0; event.target.pause(); }}>
                        <source src="./vid/m1.webm" type="video/webm" />
                        <source src={props.src} type='video/mp4;' />
                    </video> */}                    
                </a>
            </div>
            <Link color={props.linkColor}></Link>
            {/* <img style={{ fill: props.linkColor }} className="link" src="./img/arrow.svg" alt="External link icon" /> */}

        </Card>
    );
}