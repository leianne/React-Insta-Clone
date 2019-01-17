import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: -30px;
    margin-top: 40px;
`
const LogoContainer = styled.div`
    width: 23%;

    & img{
        width: 140px;
        margin-top: -60px
    }
`
const InputContainer = styled.label`
    width: 40%;
    position: relative;

    &:before {
        color: #666;
        content: "\f002";
        font-family: FontAwesome;
        position: absolute;
        top: 2px;
        left: 33%;
    
    }  
`
const Input = styled.input`
    width: 100%;
    border-radius: 3px;
    font-size: 1rem;
    border: 1px solid lightgray;
    text-align: center;

`
const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 23%;
    font-size: 1.3rem;
`
export { Container, LogoContainer, InputContainer, Input, IconsContainer }