import React from 'react';
import { useAppContext } from './appcontext';

const DisplayComponent = () => {
    const { clicked } = useAppContext();

    return (
        <div>
            {clicked ? <p>The button has been clicked!</p> : <p>Button not clicked yet.</p>}
        </div>
    );
};

export default DisplayComponent;