
/*

npm install --save styled-components


import styled from 'styled-components';
*/


import React from 'react'
import styled from 'styled-components';

function Styled_component() {

 const Manoj=styled.h1`
 color:pink;
 border:solid 2px pink;
 text-align: center;
 `;

 const MyButton = styled.button`
    border:2px solid palevioletred;
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:none;
    color:skyblue;
    display:block;
    margin:0 auto;
    &:hover{
            background : palevioletred;
            color:white;
    }
`

    const Btn = styled.button`
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:LightGray;
    color:white;
    display:block;
    margin:0 auto;
    `

    const Btnred = styled(Btn)`
    background:red;
    `
    const Btngreen = styled(Btn)`
    background:green;
    `
    const Btnpink = styled(Btn)`
    background:pink;
    `
    const Btnblue = styled(Btn)`
    background:blue;
    `


    const Dynamic = styled(Btn)`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    `;


  return (
    <div>
        <h1>Styled_component</h1>

        <Manoj>Tops Technologies</Manoj>
        <hr />
        <MyButton>My button</MyButton>
        <hr />

        <Btn>Basic button</Btn>
        <Btnred>Red button</Btnred>
        <Btngreen>Red button</Btngreen>
        <Btnpink>Red button</Btnpink>
        <Btnblue>Red button</Btnblue>

        <hr />

        <Dynamic primary> Dynamic Button</Dynamic>
        <Dynamic > Dynamic Button</Dynamic>
    </div>
  )
}

export default Styled_component