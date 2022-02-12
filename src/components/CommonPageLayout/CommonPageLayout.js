import React from 'react';
// import logo from './logo.svg';
import AppBar from '../AppBar/AppBar'
import Navigation from '../Navigation/navigation'
import UserMenu from '../UserMenu/userMenu'
import ToggleButton from '../ToggleButton';

const navLinks = [
    {
        href: "/univer",
        text: "univer",
    },
    {
        href: "/facultet",
        text: "facultet",
    },
]
const CommonPageLayout = ({children}) => {
    return (
        <AppBar>
        {{
        navigation: <Navigation links={navLinks} />,
        userMenu: <UserMenu />,
    }}
        </AppBar>
    );
 };

export default CommonPageLayout;