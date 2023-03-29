
import Image from "next/image";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import styles from "./campaña.module.css";

function Campaña() {


    return (<main className={styles.Main}>

        <section className={styles.Title}>
            <h2>SOMOS: LA LIBERTAD AVANZA</h2>
            <h2>LA NUEVA POLITICA ARGENTINA</h2>

            <div className="position-relative">
                <Image src="/eagle.png" fill alt="Logo - La Libertad avanza"/>
            </div>
        </section>

        <section className={'container ' + styles.Text}>
            <div>
				<p><span><span><strong>Llegamos para construir el espacio que faltaba: uno que te represente</strong></span></span></p>
                <p><span><span><strong>Creemos en el principio de no agresión.</strong> Por eso promovemos los </span><span>intercambios voluntarios, libre de todo tipo de coacción y agresión </span><span>institucionalizada.</span></span></p>
                <p><span><strong><span>Defendemos la Libertad como un derecho natural e inherente de cada </span></strong><span><strong>persona</strong> y la responsabilidad individual que dicha libertad conlleva. </span></span></p>
                <p><span><strong><span>Sostenemos que el crecimiento económico sólo puede lograrse a través de </span><span>la apertura de nuevos mercados. </span></strong></span></p><p><span><span>Respetamos el proyecto irrestricto de vida del prójimo, <strong>la libertad y la </strong></span><strong><span>propiedad privada.</span></strong></span></p><p><span><strong><span>Llegamos para romper con el status quo de la casta política que vive a </span></strong><span><strong>costa tuya.</strong><br /></span><span>Si estás <strong>cansado</strong> de no poder llegar a fin de mes porque te agobian las </span><span>deudas; si estás <strong>harto</strong> de que la casta política te robe el fruto de tus </span><span>ingresos; si <strong>no podés proyectar</strong> una mejora en tu calidad de vida, si creés </span><span>en una gestión más eficiente de los recursos, <strong>entonces Libertad Avanza</strong> es </span><span>el espacio que mejor <strong>te representa. </strong></span></span></p><p><span><strong><span>Vamos a terminar con la decadencia y la corrupción.</span></strong></span></p>
            </div>
        </section>

        <section className={styles.Image}>
            <div className="position-relative mt-3">
                <Image src="/group-1.jpg" fill alt="Logo - La Libertad avanza"/>
            </div>
        </section>    
    </main>);
}

export default Campaña;