import './button.sass'

const Button = ({ buttonText }) => {
    return <button className='sassy-button'>{buttonText}</button>
}

export default Button

// benefits
// CSS+ logic with style
// Sass makes CSS code reusable
// Pitfalls
// sass in a language -> there is a learning curve
// fall into the Pitfalls for our normal css


// let's talk about real life

// they have a library react bootstrap 
// the ui and ux peeps handle what our componenets look like
// props to do styling

// css at the company
// stylesheet and our component are in the same folder
// they are named the same Button.jsx -> Button.css
// conflict `product-name-container` -> `barclay-six-month-financing-container`
// `${PRODUCTNAME}-container` -> constant file export const PRODUCTNAME = `barclay-six-month-financing`