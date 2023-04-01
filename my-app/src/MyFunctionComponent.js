import React from 'react';


// STEP 1: Include `props` object as a parameter that is passed to the MyFunctionComponent component 
function MyFunctionComponent() {
  // STEP2: Replace X in `<p>Hello, X!</p>` with JavaScript expression rendering 'props.name'.  
  return (
    <div>  
      <p>Hello, X!</p>
    </div>
  );
}

export default MyFunctionComponent;
