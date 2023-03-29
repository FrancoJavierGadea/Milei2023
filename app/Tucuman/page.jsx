import dynamic from "next/dynamic";
import Image from "next/image";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactSection from "../components/ContactSection/ContactSection";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";

import styles from './Tucuman.module.css';


const images = [
    { src: '/tucuman-1.jpg', alt: 'Javier Milei en Plaza Alberdi - Tucuman' }, 
    { src: '/tucuman-2.jpg', alt: 'Javier Milei en Plaza Alberdi - Tucuman' },
    { src: '/tucuman-3.jpg', alt: 'Javier Milei en Plaza Alberdi - Tucuman' } 
];


function Tucuman() {

    return (<main>
    
        <section className="container">
            
            <ImageCarousel images={images}/>

        </section>

        <ContactSection className="container" provincia="Tucuman" />

        <section className="position-relative my-4" style={{height: 250}}>
            <Image src="/milei-2023.png" fill alt="milei-2023" style={{objectFit: 'scale-down'}}/>
        </section>
    </main>);
}

export default Tucuman;