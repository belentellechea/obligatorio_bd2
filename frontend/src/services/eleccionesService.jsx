const apiUrl = import.meta.env.VITE_API_URL;

export const getEleccion = async ({tipo,fecha}) => {
    try {
        const response = await fetch(`${apiUrl}/eleccion`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({tipo,fecha}),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Error al obtener la elección"); 
        }

        return data; 

    } catch (error) {
        console.log("Error obteniendo elección",error); 
    }
}