import React from 'react';

const AppBar = ({children: {navigation, userMenu}}) => {
    return (
        <>
        {navigation}
        {userMenu}
        </>
    );     
};

export default AppBar;