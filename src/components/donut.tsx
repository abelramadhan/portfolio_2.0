'use client';

import React, { useRef, useEffect } from 'react';

const Donut = () => {
    const preRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        let x = 1760,
            z = 0,
            y = 0;
        const interval = setInterval(() => {
            z += 0.07;
            y += 0.03;
            const a = [...new Array(x)].map((a, r) => (r % 80 === 79 ? '\n' : ' '));
            const renderArray = new Array(x).fill(0);
            const t = Math.cos(z);
            const e = Math.sin(z);
            const n = Math.cos(y);
            const o = Math.sin(y);
            for (let s = 0; s < 6.28; s += 0.07) {
                const c = Math.cos(s);
                const h = Math.sin(s);
                for (let s = 0; s < 6.28; s += 0.02) {
                    const v = Math.sin(s);
                    const M = Math.cos(s);
                    const i = c + 2;
                    const l = 1 / (v * i * e + h * t + 5);
                    const p = v * i * t - h * e;
                    const d = 0 | (40 + 30 * l * (M * i * n - p * o));
                    const m = 0 | (12 + 15 * l * (M * i * o + p * n));
                    const f = 0 | (8 * ((h * e - v * c * t) * n - v * c * e - h * t - M * c * o));
                    const y = d + 80 * m;
                    if (m < 22 && m >= 0 && d >= 0 && d < 79 && l > renderArray[y]) {
                        renderArray[y] = l;
                        a[y] = '.,-~:;=!*#$@'[f > 0 ? f : 0] as '\n' | ' ';
                    }
                }
                if (preRef.current) {
                    preRef.current.innerHTML = a.join('');
                }
            }
            if (preRef.current) {
                preRef.current.innerHTML = a.join('');
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <pre
            className='opacity-20 font-thin cursor-default '
            ref={preRef}
        />
    );
};

export default Donut;
