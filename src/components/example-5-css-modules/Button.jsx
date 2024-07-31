import styles from './button.module.css'

const Button = ({ buttonText }) => {
    // styles in an object we use dot notation on the
    // object to get the class we want
    return <button className={styles.btn}>{buttonText}</button>
}

export default Button

// benefits
// classnames are scoped to the component we don't run into
// conflict very often
// Pitfalls 
// elements and ids are still global -> we have to plan
// our CSS