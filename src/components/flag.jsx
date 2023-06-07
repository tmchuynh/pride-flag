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

export default PrideFlag;