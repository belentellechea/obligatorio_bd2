const apiUrl = import.meta.env.VITE_API_URL;

export const getListaPorPartido = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/listas/partido/${id}`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo listas del partido",error); 
    }
}