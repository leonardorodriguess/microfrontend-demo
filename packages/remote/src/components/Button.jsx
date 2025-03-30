import './Button.css';

import { useState } from 'react';
//import { useSharedState } from '../MyContext';
export const Button = () => {
    // const { count, increment } = useSharedState()
    const [state, setState] = useState(0);

    return (
        <div>
            <button
                id="click-btn"
                className="shared-btn"
                onClick={() => setState((s) => s + 1)}
                >
                hello world: {state}
            </button>
        </div>
    );
};

export default Button;