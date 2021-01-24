import React from 'react';

import { Card } from './card';
import { Link } from './link';

export const GaCard = (props) => {

    return (
        <Card>
            <a href={props.href} target="_black">
                {props.children}
                {/*  <img src="./img/arrow.svg" alt="External link icon" style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '2em',
                    right: 0,
                    margin: '0.4em'
                }} /> */}
            </a>
            <Link color={props.linkColor}></Link>
        </Card>

    );
}