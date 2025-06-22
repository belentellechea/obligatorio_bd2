const apiUrl = import.meta.env.VITE_API_URL;

export const postVoto = async ({numero_circuito_vota,tipo,observado=false,id_papeleta=null,cc_votante,id_eleccion,id_sobre}) => {
    try {
        const payload = {
            numero_circuito_vota,
            tipo,
            observado,
            id_papeleta,
            cc_votante,
            id_eleccion,
            id_sobre
        }; 

        if (tipo === "valido_simple") {
            if (!id_papeleta) throw new Error("Se requiere id_papeleta para votos válidos simples");
            payload.id_papeleta = id_papeleta;
        }

        const response = await fetch(`${apiUrl}/voto`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const err = await response.json(); 
            throw new Error(err.error || "Error al registrar el voto"); 
        }

        const data = await response.json();
        return data; 

    } catch (error) {
        console.log("Error registrando el voto",error); 
    }
}