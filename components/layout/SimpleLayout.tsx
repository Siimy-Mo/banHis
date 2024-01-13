import * as React from 'react';
import HeadNav from '../common/Layout/HeadNav';
import SideNav from '../common/Layout/SideNav';
import Footer from '../common/Layout/Footer';


interface SimpleLayoutProps {
    children: React.ReactChild;
}

function SimpleLayout(props: SimpleLayoutProps) {
    const { children } = props;
    return (
        <>
            <HeadNav />
            <div className='relative min-h-screen md:flex-col w-screen overflow-hidden'>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default SimpleLayout;
