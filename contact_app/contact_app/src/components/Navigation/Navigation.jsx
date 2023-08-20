import styles from './Navigation.module.css'
const Navigation = () => {
    console.log(styles)
  return (
    <nav className={`${styles.navigation} container`}>
    <div className="logo">
        <img src="../../../src/assets/Frame.png" alt="brand-logo" />
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </nav>
  )
}

export default Navigation