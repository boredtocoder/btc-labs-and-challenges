import React from 'react';

class MyClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        // STEP1:Replace X with JavaScript expression 3*7
        const myElement = <h1> There is only going to be X millions of Bitcoins </h1>;
    

        // STEP2: Create Large block of HTML and assign it to JSX element named myElement.
        // HTML should contain an unordered list (<ul>) with three list items (<li>), each with different text content: "Apples", "Bananas", and "Cherries".
        const myElement2 = (
            <p>REPLACE ME</p>
          );


        //STEP3: Replace X with JavaScript expression of user-defined JavaScript function called getName()
        function getName(){
            return "John";
        }
          
        const myElement3 = (
            <h1>
                Hello, X
            </h1>
        );


        //STEP4: Change x in order to change text value to "Cat"
        const x = 4;
        let text = " Cat ";
        if (x < 5) {
          text = " Dog ";
        }
        const myElement4 = <h1>{text}</h1>;


        return (
        <div>
            <p>{myElement}</p>
            <p>{myElement2}</p>
            <p>{myElement3}</p>
            <p>{myElement4}</p>
        </div>
        );
    }
}

export default MyClassComponent;
