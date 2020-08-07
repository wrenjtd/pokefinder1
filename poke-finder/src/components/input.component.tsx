import React, { useState } from 'react';

interface InputComponentProps {
    userSubmitReceived: (str: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = (props) => {

    const [input, setInput] = useState('');

    const submit = () => {
        props.userSubmitReceived(input);
    }

    return (
        <React.Fragment>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            type="text"></input>
            <button
                onClick={() => submit()}
            >Submit</button>
        </React.Fragment>
    )
}

export default InputComponent;