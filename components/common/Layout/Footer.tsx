/* This example requires Tailwind CSS v2.0+ */


function Footer() {
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
                <p className="mt-2 text-center text-base text-sky-600">
                    {new Date().getFullYear()} Siimy. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
