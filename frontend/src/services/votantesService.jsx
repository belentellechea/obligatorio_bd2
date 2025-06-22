const apiUrl = import.meta.env.VITE_API_URL;

export const getVotante = async (cc,id_eleccion)=>{
    try {
        const response = await fetch(`${apiUrl}/votantes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ cc, id_eleccion })
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo votante", error); 
    }
}