

import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {


    return (<footer>

        <section className={styles.Redes}> 
            <div className="d-flex justify-content-evenly mx-auto">
                <Link href="https://www.instagram.com/javiermilei" target="_blank">
                    <i className="bi bi-instagram"></i>
                </Link>
                <Link href="https://twitter.com/JMilei" target="_blank">
                    <i className="bi bi-twitter"></i>
                </Link>
                <Link href="https://www.facebook.com/JavierMileiEconomista" target="_blank">
                    <i className="bi bi-facebook"></i>
                </Link>
                <Link href="https://www.youtube.com/@JavierMileiOK" target="_blank">
                    <i className="bi bi-youtube"></i>
                </Link>
            </div>
        </section>

        <div className="text-center text-light pt-3">
            <p>Copyright 2023 – Javier Milei Presidente 2023 | ¡VIVA LA LIBERTAD CARAJO!</p>
        </div>
    </footer>);
}

export default Footer;