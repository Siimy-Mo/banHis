/* This example requires Tailwind CSS v2.0+ */


function Footer() {
    return (
        <footer className="absolute flex justify-center bottom-0 w-screen">

            <div className="bg-white w-full max-w-7xl py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
                <p className="mt-2">
                    {new Date().getFullYear()} Siimy. All rights reserved.
                </p>
            </div>

        </footer>
    );
}

export default Footer;
