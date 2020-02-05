import React from 'react';

const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'blue', 'yellow', 'green', 'black'];
    const randomColor = colours[Math.floor(Math.random() * 4)]
    const className = randomColor + '-text';

    return (props) => {
        return (
            <div className = {className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }

}

export default Rainbow;