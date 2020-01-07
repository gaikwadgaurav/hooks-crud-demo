import React from 'react';

export default function Home({ data, ...props }) {
    return (
        <div>
            {console.log('data', data, props)}
        </div>
    );
}