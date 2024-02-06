'use client';

import SectionHeader from '../general/sectionHeader';
import { useIntersectionObserver, useWindowSize } from '@uidotdev/usehooks';

import React from '@/../public/icons/react.svg';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import Text from '../ui/text';
import { cn } from '@/lib/utils';
import Heading from '../ui/heading';

type Tab = {
    label: string;
    value: string;
    role: {
        title: string;
        date: string;
        description: string[];
    }[];
};

const tabs: Tab[] = [
    {
        label: 'Erajaya',
        value: 'erajaya',
        role: [
            {
                title: 'Frontend Engineer Specialist',
                date: 'Dec 2023 - Present',
                description: [
                    'Develop and maintain various B2B and B2C applications using Next.JS',
                    'Implement best development practices to ensure a clean and maintanable codebase',
                    'Participate in development sprints and collaborate with other teams',
                ],
            },
        ],
    },
    {
        label: 'Sekawan Media',
        value: 'sekawan',
        role: [
            {
                title: 'Frontend Developer',
                date: 'Jun 2023 - Dec 2023',
                description: [
                    'Develop the front-end side of various applications using Next.JS, React, Laravel Blade by utlizing tools such as Bootstrap, Tailwind, and Git.',
                    'Work closely with UI UX team to create visually appealing, interactive, and functional application interfaces',
                    'Work closely with Backend Developers to ensure integrity between client side and server side in developing applications',
                ],
            },
            {
                title: 'Fullstack Developer Intern',
                date: 'Jan 2023 - Jun 2023',
                description: [
                    'Develop various applications both in backend and frontend using technologies such as CodeIgniter, Laravel, Bootstrap, JQuery, React, NextJS, MySQL, PostgreSQL, and GIT',
                    "Work closely with system analyst and UI UX team to create a high-quality product that fulfill client's requirements",
                ],
            },
        ],
    },
    {
        label: 'IRO Filkom UB',
        value: 'iro',
        role: [
            {
                title: 'Web Developer',
                date: 'July 2022 - October 2022',
                description: [
                    "Developed a profile website for FILKOM UB's International Relations Office using WordPress which allows the staff to post news and announcements relating tointernational programs.",
                    'Collaborated closely with UI/UX team to discuss the design of the website.',
                ],
            },
        ],
    },
];

const Experiences = () => {
    const [] = useIntersectionObserver();

    const [activeTab, setActiveTab] = useState(0);

    const currentData = useMemo(() => tabs[activeTab], [activeTab]);

    return (
        <section className='min-h-[100vh] flex flex-col items-center justify-center py-32'>
            <div className='max-w-4xl space-y-6 flex flex-col flex-1'>
                <SectionHeader
                    number={2}
                    title='Experience'
                />
                <div className='flex flex-col sm:flex-row w-fit justify-stretch'>
                    <TabsList
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                    <TabsContent tab={currentData} />
                </div>
            </div>
        </section>
    );
};

interface TabsContentProps {
    tab?: Tab;
}

const TabsContent = ({ tab }: TabsContentProps) => {
    // if (!tab) return null;
    return (
        <div className='py-4 px-0 sm:py-0 sm:px-4 w-[100%] sm:w-[34rem] min-h-[18rem] space-y-8'>
            {tab?.role.map((role, index) => (
                <div
                    key={index}
                    className='space-y-4'>
                    <div>
                        <Heading as='h4'>
                            {role.title} <span className='text-muted-foreground'>@ {tab.label}</span>
                        </Heading>
                        <Text as='muted'>{role.date}</Text>
                    </div>
                    <ul className='space-y-2'>
                        {role.description.map((desc, index) => (
                            <li
                                key={index}
                                className='flex flex-row gap-2'>
                                <Text
                                    as='muted'
                                    className='text-white font-semibold'>
                                    {'-'}
                                </Text>
                                <Text as='muted'>{desc}</Text>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

interface TabsListProps {
    activeTab: number;
    setActiveTab: Dispatch<SetStateAction<number>>;
    tabs: Tab[];
}

const TabsList = ({ activeTab, setActiveTab, tabs }: TabsListProps) => {
    const { width } = useWindowSize();
    return (
        <div className='relative w-[21rem] sm:w-fit overflow-x-auto'>
            <ul className='w-full sm:w-40 flex flex-row sm:flex-col border-b-2 sm:border-l-2 sm:border-b-0 border-white/10 '>
                {tabs.map((tab, index) => (
                    <TabsItem
                        key={tab.value}
                        tab={tab}
                        isActive={index === activeTab}
                        onClick={() => setActiveTab(index)}
                    />
                ))}
            </ul>
            {width && width > 640 ? (
                <div
                    className='relative sm:absolute border-l-2 border-white left-0 h-[40px] transition-all ease-in-out duration-200'
                    style={{ top: 40 * activeTab }}
                />
            ) : (
                <div
                    className='relative sm:absolute border-b-2 border-white left-0 w-[170px] transition-all ease-in-out duration-200'
                    style={{ left: 170 * activeTab }}
                />
            )}
        </div>
    );
};

interface TabsItemProps {
    tab: Tab;
    onClick: () => void;
    isActive: boolean;
}

const TabsItem = ({ tab, onClick, isActive }: TabsItemProps) => {
    const activeClassName = 'bg-white/5 text-white/100 ';
    const inactiveClassName = 'bg-transparent text-white/50 hover:bg-white/5';
    return (
        <li>
            <button
                className={cn(
                    'w-[170px] sm:w-full h-[40px] px-4 text-left inline-flex items-center transition-colors',
                    isActive ? activeClassName : inactiveClassName
                )}
                onClick={onClick}>
                {tab.label}
            </button>
        </li>
    );
};

export default Experiences;
