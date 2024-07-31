const Button = ({ buttonText, backgroundColor }) => {

    const buttonStyle = {
        // in CSS background-color -> JS backgroundColor
        backgroundColor: `${backgroundColor}`,
        borderRadius: '8px',
        color: 'white',
        fontSize: '24pt',
        padding: '15px 50px',
        width: '300px',
    }

    return <button style={buttonStyle}>{buttonText}</button>
}

export default Button

// Benefits
// dynamic pass props and use state effect the UI
// Pitfalls
// Our code quickly becomes wet -> DRY Don't repeat yourself

