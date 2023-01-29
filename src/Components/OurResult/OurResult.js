import React from 'react';
import s from './OurResult.module.css';
import TabContent from './TabContent';
import { ourResult } from '../../Base/Base';

const OurResult = () => {
  const [active, setActive] = React.useState(null);
  const openTab = (e) => setActive(+e.target.dataset.index);
  return (
    <div className={s.wrapOurResult}>
      <div className={s.wrapContainer}>
        <h1 className={s.h1}>Мы всегда достигаем обещанного результата</h1>
        <p className={s.p}>И вот почему:</p>
        {/* <div> */}
          <div className={s.tab}>
            {ourResult.map((n, i) => (
              <button
                className={` tablinks ${i === active ? 'active' : ''}`}
                onClick={openTab}
                data-index={i}
                key={i}>
                {n.title}
              </button>
            ))}
          {/* </div> */}
          {ourResult[active] && <TabContent {...ourResult[active]} />}
        </div>
      </div>
    </div>
  );
};

export default OurResult;
