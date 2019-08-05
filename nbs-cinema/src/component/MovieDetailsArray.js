import React from 'react';

const ExtraDetails = (props) =>(
    <span>
        {props.content.join(', ')}
    </span>
)

export default ExtraDetails