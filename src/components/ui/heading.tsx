import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4';

const Heading = ({
    children,
    as,
    className,
}: PropsWithChildren & { as: HeadingElements; className?: HTMLElement['className'] }) => {
    switch (as) {
        case 'h1':
            return (
                <h1 className={twMerge('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}>
                    {children}
                </h1>
            );
        case 'h2':
            return (
                <h2
                    className={twMerge(
                        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
                        className
                    )}>
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3 className={twMerge('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>{children}</h3>
            );
        case 'h4':
            return (
                <h4 className={twMerge('scroll-m-20 text-xl font-semibold tracking-tight', className)}>{children}</h4>
            );
        default:
            return (
                <h1 className={twMerge('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}>
                    {children}
                </h1>
            );
    }
};

export default Heading;
