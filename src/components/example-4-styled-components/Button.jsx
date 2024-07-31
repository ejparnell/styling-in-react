import styled from 'styled-components'

const Button = ({ buttonText, backgroundColor }) => {

    // when using tagged template lits
    // we use CSS syntax
    const StyleButton = styled.button`
        background-color: ${backgroundColor};
        border-radius: 8px;
        color: #3d3d3d;
        padding: 15px 50px;
        font-size: 24pt;
        width: 300px;
    `

    return <StyleButton>{buttonText}</StyleButton>
}

export default Button

// Benefit
// best of examples 1 and 2
// dynamic styles -> prop, state 
// reduce the conflicts we might have in css
// Pitfalls
// it's an extra library