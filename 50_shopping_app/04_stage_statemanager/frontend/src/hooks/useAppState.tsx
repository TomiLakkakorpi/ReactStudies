import {useContext} from 'react';
import type {AppState} from '../types/states';
import AppStateContext from '../context/AppStateContext';

const useAppState = ():AppState => {
    return useContext(AppStateContext);
}

export default useAppState;