import styled, {css} from 'styled-components';
import {Container} from '../../style/styled';

export const ModalLayer = styled.div`
    width: 100px;
    height: 100px;
    display: ${(props)=> props.layerDisplay};
    position: absolute;
    background-color: gray;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
`

export const ModalButton = styled.div`
    dispaly: block;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 30px;
    background-color: black;
    margin: 0 auto;
    color: white;
    cursor: pointer;
`

export const ModalContainer = styled(Container)`
    position: relative;
    opacity: ${(props)=> props.containerStateOpacity};
    background-color: ${(props)=> props.containerStateColor};
    height: 180px;
`