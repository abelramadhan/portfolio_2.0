import SectionHeader from '../general/sectionHeader';
import { Button } from '../ui/button';
import Heading from '../ui/heading';

const Contact = () => {
    return (
        <section className='min-h-[100vh] flex items-center justify-center'>
            <div className='max-w-4xl space-y-4'>
                {/* <SectionHeader
                    number={5}
                    title='Contact'
                /> */}
                <div className='flex flex-col items-center space-y-6'>
                    <div className='flex flex-col items-center'>
                        <Heading
                            as='h4'
                            className='text-white/50'>
                            Interested?
                        </Heading>
                        <Heading as='h2'>Let's do someting together!</Heading>
                    </div>
                    <Button>Contact Me</Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
