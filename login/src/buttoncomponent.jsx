import React from 'react';
import { useAppContext } from './appcontext';

const ButtonComponent = () => {
    const { setClicked } = useAppContext();

    return (
        <button onClick={() => setClicked(true)}>Click Me</button>
    );
};
// AppContext
export default ButtonComponent;
