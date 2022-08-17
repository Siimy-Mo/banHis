import { Fragment, useCallback, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

const navigation = [
    { name: '主頁', href: '/', current: false },
    { name: '文檔類型', href: '/', current: false },
    { name: '文檔搜尋', href: '/', current: false }
];
const userNavigation = [
    //{ name: 'Your Profile', href: '#' },
    //{ name: 'Settings', href: '#' },
    { name: '登出', href: '#' }
];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

function HeadNav() {
    const [email, setEmail] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        setEmail(localStorage.getItem('email') || 'Testing');
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('authorization');
        localStorage.removeItem('email');
        document.cookie = `authorization=null; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
        router.reload();
        // router.push('/')
    }, [router]);

    return (
        <>
            <Disclosure as="nav"
                className="min-h-3/5 w-1/10 h-full overflow-hidden fixed left-0 top-24 rounded-tr-3xl bg-blue-900 text-blue-50 shadow-2xl 
                transition duration-300 ease-out 
                hover:bg-orange-600">
                {/* {({open}) =>(<>  */}
                <div className="h-2/3 flex flex-col justify-around items-center mx-10 ">
                    <div className="my-10"> ICON/LOGO </div>
                    <div className="my-10"> Menu btns</div>

                    {/* <Disclosure.Panel > */}
                    {/* username显示 */}

                    <div className="my-10">
                        <button onClick={()=>router.push('/login')}>登出</button>
                    </div>


                    {/* <Menu as="div" className="ml-3 relative">
                        <div>
                            <Menu.Button >
                                <span className="sr-only">Open user menu</span>
                                <div>{email}</div>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            // <Menu.Items className="origin-top-right absolute right-0 mt-6 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Items className="mt-4 rounded-md shadow-lg px-2 py-2 bg-white opacity-75 ring-4 ring-white ring-opacity-10 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={classNames(
                                            //     active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700 w-full text-left'
                                            )}
                                            onClick={signOut}
                                        >
                                            登出
                                        </button>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu> */}

                </div>
            </Disclosure>
        </>
    );
}

export default HeadNav;
