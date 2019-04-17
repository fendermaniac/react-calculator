import React from 'react';

const Display = ({result}) => {

  return ( 
    <div result={result} id="display" className="screen">
      {result}
    </div>
   );
}
 
export default Display;