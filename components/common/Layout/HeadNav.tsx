import { Fragment, useCallback, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
// import { useRouter } from 'next/router';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

const navigation = [
    { name: '主頁', href: '/', current: false },
    { name: '文檔類型', href: '/classification', current: false },
    { name: '文檔搜尋', href: '/search', current: false }
];
const userNavigation = [
    //{ name: 'Your Profile', href: '#' },
    //{ name: 'Settings', href: '#' },
    { name: '登出', href: '#' }
];



function HeadNav() {
    const [email, setEmail] = useState<string>('');
    // const router = useRouter();

    useEffect(() => {
        setEmail(localStorage.getItem('email') || 'testing');
    }, []);

    // const signOut = useCallback(() => {
    //     localStorage.removeItem('authorization');
    //     localStorage.removeItem('email');
    //     document.cookie = `authorization=null; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    //     router.reload();
    // }, [router]);

    return (
        <>
            <Disclosure as="nav" className="bg-sky-200">
                <div > 这里是菜单Menu Meun.Button
                </div>

                <div > 这里是userNavigation, 点击按钮放出下栏：
                    <Disclosure.Button className="py-2">
                        User Name
                    </Disclosure.Button>

                    <Disclosure.Panel>
                        User navigation contents
                    </Disclosure.Panel>

                </div>
            </Disclosure>
        </>
    );
}

export default HeadNav;
