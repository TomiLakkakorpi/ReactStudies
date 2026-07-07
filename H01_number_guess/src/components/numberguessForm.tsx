import React,{useState} from 'react';
import Number from '../models/Number';

interface State {
    number:number;
}

interface Props {
    setNumber(number:Number):void;
}

const numberguessForm = (props:Props) => {
    const [state,setState] = useState<State>({
        number:0
    });

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setState((state) => {
            return {
                ...state,
                [event.target.name]:event.target.value
            }
        })
    }

    const onSubmit = (event:React.SyntheticEvent) => {
        event.preventDefault();
        const number = new Number(state.number);
        props.setNumber(number);
        setState({
            number:0
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="number">Guess number</label>
            <input type="text"
                name="number"
                id="number"
                value={state.number}
                onChange={onChange}/>
            <br/>
            
            <input type="submit" value="Guess"/>
        </form>
    )
}

export default numberguessForm;