type TextElements = 'p' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted';

const Text = ({
    children,
    as,
    className,
    ...rest
}: {
    children: React.ReactNode;
    as: TextElements;
    className?: string;
}) => {
    switch (as) {
        case 'p':
            return (
                <p
                    className={`leading-7 ${className} [&:not(:first-child)]:mt-6`}
                    {...rest}>
                    {children}
                </p>
            );
        case 'blockquote':
            return (
                <blockquote
                    className={`mt-6 border-l-2 pl-6 italic ${className}`}
                    {...rest}>
                    {children}
                </blockquote>
            );
        case 'code':
            return (
                <code
                    className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}`}
                    {...rest}>
                    {children}
                </code>
            );
        case 'lead':
            return (
                <p
                    className={`text-xl text-muted-foreground ${className}`}
                    {...rest}>
                    {children}
                </p>
            );
        case 'large':
            return (
                <div
                    className={`text-lg font-semibold ${className}`}
                    {...rest}>
                    {children}
                </div>
            );
        case 'small':
            return (
                <small
                    className={`text-sm font-medium leading-none ${className}`}
                    {...rest}>
                    {children}
                </small>
            );
        case 'muted':
            return (
                <p
                    className={`text-sm text-muted-foreground ${className}`}
                    {...rest}>
                    {children}
                </p>
            );
        default:
            return (
                <p
                    className={`leading-7 ${className} [&:not(:first-child)]:mt-6`}
                    {...rest}>
                    {children}
                </p>
            );
    }
};

export default Text;
