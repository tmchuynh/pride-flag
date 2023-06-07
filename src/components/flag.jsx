import React from 'react';
import range from 'lodash.range';

import styles from '../Style.modules/flag.module.css';

function PrideFlag({
    numOfColumns,
    staggeredDelay = 100,
    billow = 2,
}) {
    return (
        <div className={styles.flag}>
            {range(numOfColumns).map((columnIndex) => (
                <div
                    key={columnIndex}
                    className={styles.column}
                    style={{
                        '--billow': columnIndex * billow + 'px',
                        animationDelay: columnIndex * staggeredDelay + 'ms',
                    }}
                />
            ))}
        </div>
    );
}

function generateGradientString(colors) {
    const numOfColors = colors.length;
    const segmentHeight = 100 / numOfColors;

    const gradientStops = colors.map((color, index) => {
        const from = index * segmentHeight;
        const to = (index + 1) * segmentHeight;

        return `${color} ${from}%, ${color} ${to}%`;
    });

    return `linear-gradient(to bottom, ${gradientStops.join(', ')})`;
}

export default PrideFlag;