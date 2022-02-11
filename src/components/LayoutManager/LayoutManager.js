import React from 'react';
import AccountPageLayout from '../AccountPageLayout/AccountPageLayout';
import CommonPageLayout from '../CommonPageLayout/CommonPageLayout';

const LayoutManager = ({ pathname = false, children }) => {
    
    const Layout = pathname ? CommonPageLayout : AccountPageLayout;
    return <Layout>{ children}</Layout>
};

export default LayoutManager;