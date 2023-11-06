import { TypeAnimation } from 'react-type-animation';
import Heading from '../ui/heading';
import Text from '../ui/text';
import { Separator } from '../ui/separator';
import SectionHeader from '../general/sectionHeader';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import ProfilePicture from '@/../public/profile-picture.png';
import Image from 'next/image';

import React from '@/../public/icons/react.svg';
import Typescript from '@/../public/icons/typescript.svg';
import Node from '@/../public/icons/node.svg';
import Laravel from '@/../public/icons/laravel.svg';

const About = () => {
    return (
        <section className='min-h-[100vh] flex items-center justify-center'>
            <div className='max-w-4xl space-y-4 py-16'>
                <SectionHeader
                    number={1}
                    title='About Me'
                />
                <div className='flex flex-wrap-reverse gap-x-12 gap-y-8'>
                    <div className='space-y-2 flex-1 min-w-[300px]'>
                        <Text as='muted'>
                            As a passionate software engineer, I excel in React, TypeScript, Node, Laravel, and SQL.
                            With a stellar 3.92 GPA from Brawijaya University, I have gained experience at Sekawan Media
                            and the International Relations Office FILKOM UB, delivering top-notch web applications.
                        </Text>
                        <Text as='muted'>
                            My leadership skills were further honed as a web programming practicum assistant at FILKOM
                            UB Learning Lab, where I mentored aspiring developers in PHP, Laravel, MVC design patterns,
                            JavaScript, and MySQL. I bring robust problem-solving capabilities to collaborative
                            environments, driven by an unwavering enthusiasm for innovative software development.
                        </Text>
                    </div>
                    <div className='relative'>
                        <div className='border-4 w-fit border-white'>
                            <Image
                                src={ProfilePicture}
                                className='grayscale h-40 w-40 sm:w-56 sm:h-56 hover:grayscale-0 transition-all object-cover  '
                                alt='Abel'
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='absolute top-5 left-5 h-40 w-40 sm:w-56 sm:h-56 -z-10 aspect-square border-4 border-white' />
                    </div>
                </div>
                <div className='space-y-4'>
                    <Heading as='h4'>What I Can Do</Heading>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-secondary'>
                        <Skill
                            name='React'
                            icon={React}
                        />
                        <Skill
                            name='Typescript'
                            icon={Typescript}
                        />
                        <Skill
                            name='Node'
                            icon={Node}
                        />
                        <Skill
                            name='Laravel'
                            icon={Laravel}
                        />
                    </div>
                    <div className='w-full inline-flex flex-wrap gap-2'>
                        <Text as='muted'>Also :</Text>
                        <Text
                            className='text-white'
                            as='muted'>
                            Tailwind, Next, SQL, Git, PHP, Bootstrap, HTML, CSS, and more.
                        </Text>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Skill = ({ name, icon }: { name: string; icon: string }) => (
    <div className='p-3 inline-flex items-center gap-2 bg-white'>
        <Image
            className='w-6 h-6 aspect-square'
            src={icon}
            alt={name}
            width={50}
            height={50}
        />
        <Heading as='h4'>{name}</Heading>
    </div>
);

export default About;
