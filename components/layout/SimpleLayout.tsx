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
            <div className='flex flex-col md:flex-row'>
                {/* <div className="opacity-25">
                    <SideNav />
                </div> */}
                <SideNav />

                {children}
            </div>
            <Footer />
        </>
    );
}

export default SimpleLayout;
