import React from 'react';

export default function User(props) {
    const { info } = props;

    return (
        <div>
            <h2>{info['first_name']}</h2>
            <p>Email:{info.email}</p>

        </div>
        
    )
}