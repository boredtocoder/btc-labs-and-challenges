import React from 'react';

class MyClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        count: 0
        };
    }

    // Step 1
    // implement lifecycle method called componentDidMount()
    // inside componentDidMount() method. log 'Component mounted!' to the console


    // Step 2
    // implement lifecycle method called componentDidUpdate()
    // inside componentDidUpdate() method. log 'Component updated!' to the console

    
    // Step 3
    // implement lifecycle method called componentWillUnmount()
    // inside componentWillUnmount() method. log 'Component will unmount!' to the console

    handleClick = () => {
        // Step 6
        // increment variable this.state.count by 1 and set it's state by callig this.setState()
        this.setState({ count: -1 });
    }

    // Step 4
    // replace X in <p>You clicked X times</p> with JavaScript expression rendering 'this.state.count'

    // Step 5
    // Add a button named Click me just below <p>You clicked...</p> paragraph.
    // onClick of the button 'this.handleClick' should be called
    render() {
        return (
        <div>
            <p>You clicked X times</p>
        </div>
        );
    }
}

export default MyClassComponent;
