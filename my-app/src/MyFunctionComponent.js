import React, { useState, useEffect } from 'react';

function MyFunctionComponent() {
    const [count, setCount] = useState(0);

    // Step 1
    // Implement react hook method called useEffect()
    // once useEffect() is triggered, log 'Component mounted/updated!' to the console


    const handleClick = () => {
        // Step 4
        // Increment variable count by 1 and set it's state by calling setCount(...) method
        setCount(count + 1);
    }
    // Step 2
    // Replace X in <p>You clicked X times</p> with JavaScript expression rendering 'count'

    // Step 3
    // Add a button named Click me just below <p>You clicked...</p> paragraph.
    // onClick of the button 'handleClick' method should be called
    return (
        <div>
        <p>You clicked X times</p>
        </div>
    );
}

export default MyFunctionComponent; 