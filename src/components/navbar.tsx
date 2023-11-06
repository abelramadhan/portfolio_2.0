'use client';

import { useWindowSize } from '@uidotdev/usehooks';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetPortal, SheetTitle, SheetTrigger } from './ui/sheet';
import { Suspense, useState } from 'react';

type NavMenu = {
    name: string;
    path: string;
};

const navMenus = [
    {
        name: 'Home',
        path: '#',
    },
    {
        name: 'About',
        path: '#',
    },
    {
        name: 'Experience',
        path: '#',
    },
    {
        name: 'Projects',
        path: '#',
    },
];

const Navbar = () => {
    const { width } = useWindowSize();

    return (
        <header className='w-full inline-flex justify-between items-center h-16 px-4 lg:px-[20%] border-b border-gray-800 absolute top-0 z-10'>
            <div className='font-bold text-lg '>
                <TypeAnimation
                    sequence={['...', 3000, 'Abel Ramadhan']}
                    preRenderFirstString
                />
            </div>
            <nav>
                {width && width > 768 ? (
                    <ul className='flex items-center space-x-4'>
                        {navMenus.map((navMenu, index) => (
                            <NavMenuItem
                                key={index}
                                name={navMenu.name}
                                path={navMenu.path}
                                index={index}
                            />
                        ))}
                    </ul>
                ) : (
                    <Sheet>
                        <SheetTrigger>
                            <Button
                                variant={'ghost'}
                                size={'icon'}>
                                <MenuIcon className='h-6 w-6' />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className='w-[320px] sm:w-[540px]'>
                            <SheetHeader className='text-start'>
                                <TypeAnimation
                                    sequence={['...', 3000, 'Abel Ramadhan']}
                                    preRenderFirstString
                                    className='font-bold'
                                />
                            </SheetHeader>
                            <ul className='space-y-4 mt-6'>
                                {navMenus.map((navMenu, index) => (
                                    <NavMenuItem
                                        key={index}
                                        name={navMenu.name}
                                        path={navMenu.path}
                                        index={index}
                                    />
                                ))}
                            </ul>
                        </SheetContent>
                    </Sheet>
                )}
            </nav>
        </header>
    );
};

const NavMenuItem = ({ name, path, index }: NavMenu & { index: number }) => (
    <li>
        <Link href={path}>
            <span className='font-bold text-neutral-50 mr-1'>0{index}.</span>
            <TypeAnimation
                className='text-neutral-300 hover:text-neutral-50'
                sequence={[index * 600, name]}
                cursor={false}
            />
        </Link>
    </li>
);

export default Navbar;
