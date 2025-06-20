const apiUrl = import.meta.env.VITE_API_URL;

export const getPartidos = async() => { 
    try {
        const response = await fetch(`${apiUrl}/partidos`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo partidos",error); 
    }
}

