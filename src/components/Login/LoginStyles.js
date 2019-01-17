import styled from 'styled-components';

const LoginContainer = styled.div`
    text-align: center;
    height: 100vh;
    background: -moz-linear-gradient(top, #f9a7f8 0%, #e93cec 100%); 
    background: -webkit-linear-gradient(top, #f9a7f8 0%,#e93cec 100%); 
    background: linear-gradient(to bottom, #f9a7f8 0%,#e93cec 100%);

    & img {
        width: 30%;
        margin-bottom: 30px;
        margin-top: 15%;
    }
`
const LoginForm = styled.form`
    display: flex;
    flex-direction: column; 
    width: 40%;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0 auto;

    & input {
        margin-bottom: 5%;
        width: 80%;
        height: 30px;
        border-radius: 3px;
        border: none
    }

    & button {
        width: 80%;
        height: 30px;
        border-radius: 2px;
        font-size: 17px;
    }
`

export { LoginContainer, LoginForm }