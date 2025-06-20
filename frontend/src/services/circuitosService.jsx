const apiUrl = import.meta.env.VITE_API_URL;

export const getCircuitos = async () => {
    try {
        const response = await fetch(`${apiUrl}/circuitos`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo circuitos",error); 
    }
}