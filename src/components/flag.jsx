import React from 'react';
import range from 'lodash.range';

import styles from '../Style.modules/flag.module.css';

function PrideFlag({
  numOfColumns = 10,
  staggeredDelay = 100,
}) {
  return (
    <div className={styles.flag}>
      {range(numOfColumns).map((columnIndex) => (
        <div
          key={columnIndex}
          className={styles.column}
          style={{
            animationDelay: columnIndex * staggeredDelay + 'ms',
          }}
        />
      ))}
    </div>
  );
}

export default PrideFlag;