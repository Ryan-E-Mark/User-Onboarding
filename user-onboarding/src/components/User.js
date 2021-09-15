import React from 'react';

export default function User(props) {
    const { info } = props;

    return (
        <div className="friend">
            <h2>{info['first_name']}</h2>
            <p><span>Email:</span>{info.email}</p>
            

        </div>
        
    )
}