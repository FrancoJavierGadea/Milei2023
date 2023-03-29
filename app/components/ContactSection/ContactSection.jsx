
import ContactForm from "../ContactForm/ContactForm";
import styles from "./ContactSection.module.css";


function ContactSection({className = '', provincia}) {


    return (<section className={styles.Contact + ' ' + className}>

        <h1>SUMATE A COLABORAR</h1>
           
        <ContactForm defaultValues={{provincia}} />

    </section>);
}

export default ContactSection;