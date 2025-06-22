const apiUrl = import.meta.env.VITE_API_URL;

export const getPartidos = async(id_eleccion) => { 
    try {
        const response = await fetch(`${apiUrl}/partidos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id_eleccion })
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo partidos",error); 
    }
}

