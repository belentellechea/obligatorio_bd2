export const postVoto = async ({numero_circuito,tipo,observado=false,id_papeleta=null}) => {
    try {
        const payload = {
            numero_circuito,
            tipo,
            observado
        }; 

        if (tipo === "valido_simple") {
            if (!id_papeleta) throw new Error("Se requiere id_papeleta para votos válidos simples");
            payload.id_papeleta = id_papeleta;
        }

        const response = await fetch(`http://localhost:8080/voto`, {
            method: "POST",
            headers: {
                "Content_Type":"application/json"
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