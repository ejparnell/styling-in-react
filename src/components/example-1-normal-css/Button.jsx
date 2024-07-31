import './Button.css'

const Button = ({ buttonText }) => {
    return <button className='btn'>{buttonText}</button>
}

export default Button

// Benefits
// straight forward. Easy for us to use
// Pitfalls
// our styles are global styles. btn class in one place then
// a btn class in another we might have a conflict
