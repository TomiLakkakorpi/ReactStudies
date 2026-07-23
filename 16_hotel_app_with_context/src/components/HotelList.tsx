import Hotel from '../models/Hotel';
import Row from './Row';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';
import { useState } from 'react';
import useAction from '../hooks/useAction';
import useAppState from '../hooks/useAppState';

interface State {
    removeIndex:number;
    editIndex:number;
}

const HotelList = () => {

    const [state,setState] = useState<State>({
        removeIndex:-1,
        editIndex:-1
    })

    const{removeHotel, editHotel} = useAction();

    const {list} = useAppState();

    const changeMode = (mode:string,index:number) => {
        switch(mode) {
            case "remove": {
                setState({
                    removeIndex:index,
                    editIndex:-1
                })
                return;
            }
            case "edit": {
                setState({
                    removeIndex:-1,
                    editIndex:index
                })
                return;
            }
            case "cancel": {
                setState({
                    removeIndex:-1,
                    editIndex:-1
                })
                return;
            }
            default:
                return;
        }
        
    }
    
    const remove = (id:number) => {
        removeHotel(id);
        changeMode("cancel",0)
    }
    
    const edit = (hotel:Hotel) => {
        editHotel(hotel);
        changeMode("cancel",0)
    }

    const hotels = list.map((hotel,index) => {
        if(state.removeIndex === index) {
            return(
                <RemoveRow key={hotel.id} hotel={hotel} changeMode={changeMode} remove={remove}/>
            )
        }
        if(state.editIndex === index) {
            return (
                <EditRow key={hotel.id} hotel={hotel} changeMode={changeMode} edit={edit}/>
            )
        }
        return(
            <Row key={hotel.id} hotel={hotel} index={index} changeMode={changeMode}/>
        )
    })

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Hotel Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Stars</th>
                    <th>Room Price</th>
                    <th>Remove</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {hotels}
            </tbody>
        </table>
    )
}

export default HotelList;