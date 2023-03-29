'use client'

import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./ContactForm.module.css";

import provincias from "../../assets/Provincias.json";
import Image from "next/image";

function ContactForm({defaultValues = {}}) {

    const [nombre, setNombre] = useState(defaultValues.nombre || '');

    const [telefono, setTelefono] = useState(defaultValues.telefono || '');

    const [DNI, setDNI] = useState(defaultValues.dni || '');

    const [provincia, setProvincia] = useState(defaultValues.provincia || '');

    const [email, setEmail] = useState(defaultValues.email || '');


    const handlerChangeNombre  = ({target: {value}}) => {

        setNombre(value);
    }

    const handlerChangeTelefono = ({target: {value}}) => {

        if( !value.match(/[^0-9\+]/g) ){

            setTelefono(value);
        }
    }

    const handlerChangeProvincia  = ({target: {value}}) => {

        setProvincia(value);
    }

    const handlerChangeDNI  = ({target: {value}}) => {

        if( !value.match(/[^0-9]/g) ){

            setDNI(value);
        }
    }

    const handlerChangeEmail  = ({target: {value}}) => {

        setEmail(value);
    }

    const handlerSubmit = (e) => {

        e.preventDefault();
    }

    return (<div className={styles.Contact_form}>

        <Form onSubmit={handlerSubmit}>

            <Form.Group>
                <Form.Control type="text" onChange={handlerChangeNombre} value={nombre} required placeholder="Nombre" />
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" onChange={handlerChangeTelefono} value={telefono} required placeholder="Telefono" />
            </Form.Group>

            <div>
                <Form.Select value={provincia} onChange={handlerChangeProvincia} required>
                    <option>Selecciona tu Provincia</option>

                    {
                        provincias.map((name, i) => {

                            return <option value={name} key={`opt-${i}`}>{name}</option>
                        })
                    }

                </Form.Select>
            </div>

            <Form.Group>
                <Form.Control type="text" onChange={handlerChangeDNI} value={DNI} required placeholder="DNI" />
            </Form.Group>

            <Form.Group>
                <Form.Control type="email" onChange={handlerChangeEmail} value={email} required placeholder="Email" />
            </Form.Group>

            <Button className="w-100"  variant="primary" type="submit">Enviar</Button>
        </Form>

        <Image src="/lion.webp" width={350} height={350} alt="milei-logo"/>
   
    </div>);
}

export default ContactForm;

