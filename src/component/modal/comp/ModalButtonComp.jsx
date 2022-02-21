import React, {} from 'react';
import {ModalButton} from '../style/ModalStyle';

export const ModalButtonComp= (props) =>{
    return(
        <>  
            <h2>Modal</h2> 
            <ModalButton onClick={()=>{
                props.click();
                }}>
                    Modal
            </ModalButton>
        </>
    )
}





