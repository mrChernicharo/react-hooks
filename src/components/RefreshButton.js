import React from 'react';
import { FiArrowLeftCircle , FiRefreshCcw, FiRepeat } from 'react-icons/fi';
import randomColor from '../randomColor';

export default React.memo(({ cb }) => {
  return (
    <button className="button-refresh-colors" onClick={cb}>
      &#8634;
    </button>)
})
//       <FiRepeat size={20} />
