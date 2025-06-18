export const getCircuitos = async () => {
    try {
        const response = await fetch(`http://localhost:8080/circuitos`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo circuitos",error); 
    }
}