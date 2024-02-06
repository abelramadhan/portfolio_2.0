import { TypeAnimation } from 'react-type-animation';
import Heading from '../ui/heading';
import Text from '../ui/text';
import { Separator } from '../ui/separator';
import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

const Hero = () => {
    return (
        <section className='h-[100vh] flex items-center justify-center'>
            <div className='sm:w-[80%] w=[90%] h-[] flex sm:flex-row flex-col-reverse gap-8 '>
                <div className='flex sm:flex-col flex-row gap-4 !sm:h-full sm:justify-center sm:text-muted-foreground '>
                    <a href='https://www.instagram.com/abel.rdn/'>
                        <InstagramIcon className='hover:text-foreground cursor-pointer transition-colors' />
                    </a>
                    <a href='https://www.linkedin.com/in/abelramadhan/'>
                        <LinkedinIcon className='hover:text-foreground cursor-pointer transition-colors' />
                    </a>
                    <a href='https://github.com/abelramadhan'>
                        <GithubIcon className='hover:text-foreground cursor-pointer transition-colors' />
                    </a>
                </div>
                <div>
                    <Text
                        as='muted'
                        className='mb-2'>
                        <TypeAnimation
                            sequence={['Hello, i am']}
                            cursor={false}
                            preRenderFirstString
                        />
                    </Text>
                    <Heading as='h1'>
                        <TypeAnimation
                            sequence={[1000, 'Abel Ramadhan.']}
                            cursor={false}
                            preRenderFirstString
                        />
                    </Heading>
                    <Heading
                        as='h1'
                        className='sm:h-fit sm:w-fit h-20 w-32'>
                        <TypeAnimation
                            className='text-muted-foreground'
                            sequence={['Software Engineer.', 2000, 'Frontend Specialist.', 2000]}
                            repeat={Infinity}
                            // preRenderFirstString
                        />
                    </Heading>
                    <Separator className='w-60 my-4' />
                    <Text
                        as='muted'
                        className='w-full sm:w-[70%]'>
                        Passionate software engineer with a strong foundation in various technologies and frameworks.
                        Specializing in React, TypeScript, Node, Laravel, and SQL. Adaptible. Quick Learner.
                    </Text>
                </div>
            </div>
        </section>
    );
};

export default Hero;
