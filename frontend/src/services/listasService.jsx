const apiUrl = import.meta.env.VITE_API_URL;

export const getListaPorPartido = async (id_partido, id_eleccion) => {
    try {
        const response = await fetch(`${apiUrl}/listas/partido`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_partido,
                id_eleccion
            })
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo listas del partido",error); 
    }
}