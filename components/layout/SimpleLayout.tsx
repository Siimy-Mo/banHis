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
            <div className='relative flex flex-col md:flex-row w-screen overflow-hidden'>
                {/* <div className="opacity-25">
                    <SideNav />
                </div> */}
                {/* {children} */}
            </div>
            <Footer />
        </>
    );
}

export default SimpleLayout;
