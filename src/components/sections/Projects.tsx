import SectionHeader from '../general/sectionHeader';
import Heading from '../ui/heading';
import Text from '../ui/text';
import Image, { StaticImageData } from 'next/image';

import ScreenshotSSO from '../../../public/images/projects/sso-screenshot.png';
import ScreenshotRace24 from '../../../public/images/projects/race24-screenshot.png';
import ScreenshotWWG from '../../../public/images/projects/wwg-screenshot.png';

import { Separator } from '../ui/separator';
import { FolderRootIcon } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import Icon from '../ui/icon';

type Project = {
    title: string;
    description: string[];
    image?: StaticImageData;
    tech: string[];
    links: ProjectLinks[];
};

type ProjectLinks = {
    icon: keyof typeof dynamicIconImports;
    url?: string;
    alt: string;
};

const featuredProject: Project[] = [
    {
        title: 'SSO Application',
        description: [
            'A Single Sign On application made for a specific company for authenticating their employees to their internal applications.',
            'This system consist of three parts, the SSO Server itself for authentication and authorization, an API server providing REST API, and a Portal App to manage the system',
        ],
        image: ScreenshotSSO,
        tech: ['Laravel', 'MySQL', 'NextJS', 'TailwindCSS'],
        links: [{ icon: 'folder-lock', url: undefined, alt: 'Restricted' }],
    },
    {
        title: 'Race 24',
        description: [
            'A digital form of the traditional matemathics card game, this game allows players to play online together and compete to solve math problem',
            'This game is built with Next JS while utilizing websockets to allow multiplayer interactions.',
        ],
        image: ScreenshotRace24,
        tech: ['NextJS', 'Websockets', 'TailwindCSS'],
        links: [{ icon: 'github', url: 'https://github.com/abelramadhan/Race24', alt: 'GitHub Repo' }],
    },
    {
        title: 'Where We Go',
        description: [
            'Plan your activities with your friends in this application!. this is a to go list with online features where you can have groups and list activities together',
            'This web app application is built with Next JS as the frontend and supabase as the backend',
        ],
        image: ScreenshotWWG,
        tech: ['NextJS', 'Supabase', 'TailwindCSS'],
        links: [
            { icon: 'github', url: 'https://github.com/abelramadhan/where-we-go', alt: 'GitHub Repo' },
            { icon: 'link', url: 'https://where-we-go-ten.vercel.app/dashboard', alt: 'Where We Go' },
        ],
    },
];

const otherProjects: Project[] = [
    {
        title: 'IRO FILKOM UB Website',
        description: [
            "Website built for Brawijaya University's Faculty of Computer Science International Relations Office",
        ],
        tech: ['Wordpress', 'SEO'],
        links: [{ icon: 'link', url: 'https://github.com/abelramadhan/VeryEpicSamuraiBattle', alt: 'GitHub Repo' }],
    },
    {
        title: 'Virtual Arcade',
        description: [
            'Online asynchronous multiplayer game where players play classic retro games and compete against each other to get the highest score',
        ],
        tech: ['Laravel', 'SQL'],
        links: [{ icon: 'github', url: 'https://github.com/abelramadhan/VeryEpicSamuraiBattle', alt: 'GitHub Repo' }],
    },
    {
        title: 'Very Epic Samurai Duel',
        description: [
            'A digital form of the traditional matemathics card game, this game allows players to play online together and compete to solve math problem',
            'This game is built with Next JS while utilizing websockets to allow multiplayer interactions.',
        ],
        tech: ['C++', 'OpenGL'],
        links: [{ icon: 'github', url: 'https://github.com/abelramadhan/VeryEpicSamuraiBattle', alt: 'GitHub Repo' }],
    },
];

const Projects = () => {
    return (
        <section className='min-h-[100vh] flex items-center justify-center py-16'>
            <div className='max-w-4xl space-y-8'>
                <SectionHeader
                    number={3}
                    title='Projects'
                />
                <div className='flex flex-col gap-8 justify-center items-center'>
                    {featuredProject.map((project, index) => (
                        <FeaturedProjectCard
                            key={index}
                            project={project}
                        />
                    ))}
                </div>
                <div className='inline-flex items-center w-full gap-8'>
                    <Separator className='flex-1' />
                    <Heading as='h4'>Other Projects</Heading>
                    <Separator className='flex-1' />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    {otherProjects.map((project, index) => (
                        <OtherProjectCard
                            key={index}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface ProjectCardProps {
    project: Project;
}

const FeaturedProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className='flex flex-col sm:flex-row items-end sm:items-center relative transition-all duration-150 w-full'>
            <div className='w-full h-auto sm:h-[360px] sm:w-[520px] min-w-fit relative rounded-lg rounded-b-none sm:rounded-b-lg  overflow-clip object-cover hover:[&>.overlay]:opacity-0 [&>.image]:hover:grayscale-0'>
                <Image
                    src={project.image ?? ''}
                    alt={project.title}
                    width={'520'}
                    height={'360'}
                    className='image grayscale w-full h-full transition-all'
                />
                <div className='overlay w-full h-full bg-black/30 absolute left-0 top-0 transition-all duration-300' />
            </div>
            <div className='text-right space-y-4 relative sm:absolute p-4 sm:p-0 right-0  bg-black/50 sm:bg-transparent w-fit'>
                <div>
                    <Text as='muted'>featured project</Text>
                    <Heading
                        as='h3'
                        className=''>
                        {project.title}
                    </Heading>
                </div>
                <div className='p-0 sm:p-4 shadow-lg rounded-md bg-transparent rounded-b-lg sm:rounded-b-md sm:bg-black/50 backdrop-blur-none sm:backdrop-blur-lg max-w-full sm:max-w-md w-full space-y-2 border-none sm:border !border-gray-200/10'>
                    {project.description.map((desc, index) => (
                        <Text
                            key={index}
                            as='muted'
                            className='text-sm'>
                            {desc}
                        </Text>
                    ))}
                </div>
                <div className='inline-flex gap-4 w-full justify-end sm:max-w-sm flex-wrap'>
                    {project.tech.map((tech, index) => (
                        <Text
                            key={index}
                            as='muted'
                            className='text-sm text-white'>
                            {tech}
                        </Text>
                    ))}
                </div>
                <div className='flex flex-row justify-end gap-3'>
                    {project.links.map((link, index) => (
                        <a
                            key={index}
                            className='opacity-75 hover:opacity-100 transition-colors cursor-pointer'
                            href={link.url}>
                            {/* <Image
                                className='w-5 h-5 aspect-square !fill-white text-white stroke-white'
                                src={link.icon}
                                alt={link.alt}
                                width={50}
                                height={50}
                            /> */}
                            <Icon
                                name={link.icon}
                                className='w-5 h-5'
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const OtherProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className='relative flex flex-col p-6 gap-3 bg-black/10 backdrop-blur-lg h-72 transition-all duration-150 ease-in-out rounded-md border border-gray-200/10 hover:-translate-y-1 hover:border-gray-200/30 hover:[&>.icon]:opacity-100'>
            <div className='inline-flex items-center justify-between'>
                <FolderRootIcon className='icon w-6 h-6 opacity-30' />
                <div className='inline-flex gap-2 items-center'>
                    {project.links.map((link, index) => (
                        <a
                            key={index}
                            className='opacity-30 hover:opacity-100 transition-colors cursor-pointer'
                            href={link.url}>
                            {/* <Image
                                className='w-5 h-5 aspect-square !fill-white text-white stroke-white'
                                src={link.icon}
                                alt={link.alt}
                                width={50}
                                height={50}
                            /> */}
                            <Icon
                                name={link.icon}
                                className='w-5 h-5'
                            />
                        </a>
                    ))}
                </div>
            </div>
            <Heading as='h4'>{project.title}</Heading>
            <div>
                <Text
                    as='muted'
                    className='text-xs'>
                    {project.description[0]}
                </Text>
            </div>
            <div className='inline-flex gap-x-3 gap-y-1 w-full sm:max-w-sm flex-wrap'>
                {project.tech.map((tech, index) => (
                    <Text
                        key={index}
                        as='muted'
                        className='text-xs text-white'>
                        {tech}
                    </Text>
                ))}
            </div>
        </div>
    );
};

export default Projects;
