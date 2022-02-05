import React from 'react';

const Navigation = ({links}) => {
    return links.map(link => {
        <div key={link.href}>
            <a href={link.href}>{link.text}</a>
        </div>
    });
    
};

export default Navigation;