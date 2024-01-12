import styles from '../styles/HomeComponent.module.css';

export default function HomeComponent() {


    return (
        <div className={styles.hero}>
            <nav>
                <div >
                    <a href="#">Home</a>
                    <a href="#">Small projects</a>
                    <a href="#">Contacts</a>
                </div>
            </nav>
        </div>
    );
}
