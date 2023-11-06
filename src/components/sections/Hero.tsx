import { TypeAnimation } from 'react-type-animation';
import Heading from '../ui/heading';
import Text from '../ui/text';
import { Separator } from '../ui/separator';

const Hero = () => {
    return (
        <section className='h-[100vh] flex items-center justify-center'>
            <div className='w-[80%]'>
                <Text as='muted'>
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
                <Heading as='h1'>
                    <TypeAnimation
                        className='text-muted-foreground'
                        sequence={['Software Engineer.', 2000, 'Full Stack Developer.', 2000]}
                        repeat={Infinity}
                        // preRenderFirstString
                    />
                </Heading>
                <Separator className='w-60 my-4' />
                <Text
                    as='muted'
                    className='w-full sm:w-[70%]'>
                    <TypeAnimation
                        className='text-muted-foreground'
                        sequence={[
                            3000,
                            `Passionate software engineer with a strong foundation in various technologies and frameworks.`,
                            700,
                            `Passionate software engineer with a strong foundation in various technologies and frameworks. Specializing in React, TypeScript, Node, Laravel, and SQL.`,
                            700,
                            `Passionate software engineer with a strong foundation in various technologies and frameworks. Specializing in React, TypeScript, Node, Laravel, and SQL. Adaptible.`,
                            700,
                            `Passionate software engineer with a strong foundation in various technologies and frameworks. Specializing in React, TypeScript, Node, Laravel, and SQL. Adaptible. Quick Learner.`,
                        ]}
                        speed={80}
                        cursor={false}
                        // preRenderFirstString
                    />
                </Text>
            </div>
        </section>
    );
};

export default Hero;
