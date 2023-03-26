'use client'

import { useEffect, useState } from 'react';


export const ArgentinaMap = (props) => {

    const [Client, setClient] = useState();

    useEffect(() => {

        (async () => {

            if (typeof global.window !== "undefined") {

                const newClient = (await import('./ArgentinaMap')).default;

                setClient(() => newClient);
            }

        })();

    }, [])

    if (typeof global.window === "undefined" || !Client) {

        return null;
    }
    
    return Client ? <Client {...props} /> : null;
};