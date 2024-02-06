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
                    <div className='space-y-4 flex-1 min-w-[300px]'>
                        <Text as='muted'>
                            So... you want to know more about me? well then, I am a Software Engineer, although i
                            specialize in frontend, but i also do fullstack development. I graduated from Brawijaya
                            University majoring in Computer Science with a GPA of 3.92. I have various work exprience in
                            my field ranging from internships to working full time in companies
                        </Text>
                        <Text as='muted'>
                            Okay then, let's get personal. During my free time i like to do sports such as badminton
                            with friends, i also like to spend time playing a bit of guitar. Also, as do most IT guys, i
                            like video games.
                        </Text>
                    </div>
                    <div className='relative'>
                        <div className='border w-fit border-muted-foreground/50 overflow-clip p-1 bg-black/40 backdrop-blur-md'>
                            <Image
                                src={ProfilePicture}
                                className='grayscale h-auto aspect-square sm:w-56 w-full hover:grayscale-0 transition-all object-cover'
                                alt='Abel'
                                width={400}
                                height={400}
                            />
                        </div>
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
