/* This example requires Tailwind CSS v2.0+ */
// 还有一个social,用于储存社交icon的跳转
const navigation = {
    main: [
        { name: '主頁', href: '/', current: false },
        { name: '文檔類型', href: '/classification', current: false },
        { name: '文檔搜尋', href: '/search', current: false }
    ],
};

function Footer() {
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                {/* <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="px-5 py-2">
                            <a
                                href={item.href}
                                className="text-base text-gray-500 hover:text-gray-900"
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>

                把map当作for来遍历navigation内的items
                <div className="mt-8 flex justify-center space-x-6">
                    {navigation.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div> */}
                <p className="mt-8 text-center text-base text-gray-400">
                    {new Date().getFullYear()} Siimy. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
