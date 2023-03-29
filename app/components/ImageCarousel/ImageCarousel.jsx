'use client'

import Image from "next/image";
import { Carousel } from "react-bootstrap";

import styles from "./ImageCarousel.module.css";

function ImageCarousel({images = []}) {


    return (<Carousel>

        {
            images.map((image, i) => {

                const {alt = '', src = ''} = image;

                return (<Carousel.Item key={`item-${i}`}>

                    <div className={styles.Carousel_image}>
                        <Image src={src} fill alt={alt} />
                    </div>

                </Carousel.Item>);
            })
        }

    </Carousel>);
}

export default ImageCarousel;