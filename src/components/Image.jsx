import React from 'react'
import IndividualImage from './individualImage';

export const image = (props) => {

    // console.log(props.links);

    return props.links.map((image) => (

       <IndividualImage key = {image.id} image = {image} />
     ) )

    
}

export default image;
