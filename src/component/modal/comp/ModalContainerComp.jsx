import React, {useState} from 'react';
import {ModalContainer} from '../style/ModalStyle';
import { ModalLayerComp } from './ModalLayerComp';
import { ModalButtonComp } from './ModalButtonComp';



const ModalContainerComp = () =>{
    const [layerDisplay, setLayerDisplay] = useState('none');
    const [containerState, setContainerState] = useState({
        color: 'white',
        opacity: 1
    });

    const onClick = () =>{
        console.log('hi')
        setLayerDisplay('block');
        setContainerState({
            color: 'lightgray',
            opacity: 0.7
        })
    }

    return(
        <>
            <ModalContainer 
                containerStateColor={containerState.color}
                containerStateOpacity={containerState.opacity}
            >
                <ModalButtonComp 
                    click={onClick}
                >
                </ModalButtonComp>
                <ModalLayerComp layerDisplay={layerDisplay}></ModalLayerComp>

            </ModalContainer>
        </>
    )
}

export default ModalContainerComp;