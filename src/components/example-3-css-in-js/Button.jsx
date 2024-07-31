import { createUseStyles } from 'react-jss'

const Button = ({ buttonText, backgroundColor }) => {

    const styles = createUseStyles({
        // the key is the class name
        btn: {
            /// key/value pairs of the styles we want
            backgroundColor: `${backgroundColor}`, // adding the styles in the object that we'll apply to our button
            borderRadius: '8px',
            color: '#f7df1c',
            fontSize: '24pt',
            padding: '15px 50px',
            width: '300px',
        }
    })

    // give me an object that has my classes in it
    // { btn: {...rules} }
    const classes = styles()

    return <button className={classes.btn}>{buttonText}</button>
}

export default Button

// Benefits
// do the best of both worlds of example 1 and 2
// dynamicly change our css
// classnames are now scoped to the component
// Pitfalls
// this is an extra library
