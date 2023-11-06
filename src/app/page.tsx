'use client';

import DonutWrapper from '@/components/donutWrapper';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Experiences from '@/components/sections/Experiences';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';

export default function Home() {
    return (
        <div className='px-6 lg:px-[20%] relatove'>
            <Hero />
            <About />
            <Experiences />
            <Projects />
            <Contact />
            <DonutWrapper />
        </div>
    );
}
