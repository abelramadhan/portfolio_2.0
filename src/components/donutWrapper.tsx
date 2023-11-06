'use client';

import { useWindowSize, useWindowScroll, useDebounce } from '@uidotdev/usehooks';
import Donut from './donut';

const calcTransform = (width: number | null) => {
    //calculate right position of donut based on width, the smaller the width, the more right the donut will be, the max right position is between 300 and -300
    const result = width ? ((width - width * 0.35) / 300) * 50 : 0;

    return result;
};

const getScale = (height: number | null, current: number | null, sections: number) => {
    if (!height || !current) {
        return 1;
    } else {
        const interval = height / sections;
        return 1;
    }
};

const DonutWrapper = () => {
    const { width, height } = useWindowSize();
    const [{ x, y }] = useWindowScroll();
    const debouncedY = useDebounce(y, 200);
    return (
        <div
            className='absolute transition-all ease-out -z-10'
            style={{
                right: calcTransform(width),
                top: debouncedY !== null ? 200 + debouncedY : 0,
                scale: getScale(height, debouncedY, 2),
            }}>
            <Donut />
        </div>
    );
};

export default DonutWrapper;
