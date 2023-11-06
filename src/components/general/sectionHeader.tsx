import Heading from '../ui/heading';
import { Separator } from '../ui/separator';

interface SectionHeaderProps {
    number: number;
    title: string;
}

const SectionHeader = ({ number, title }: SectionHeaderProps) => (
    <div className='inline-flex items-center'>
        <Heading
            as='h3'
            className='opacity-40 mr-3'>
            //
        </Heading>
        <Heading
            as='h3'
            className='mr-2  opacity-40'>
            0{number}.
        </Heading>
        <Heading
            as='h3'
            className=''>
            {title}
        </Heading>
        <Separator className='ml-6 w-24' />
    </div>
);

export default SectionHeader;
