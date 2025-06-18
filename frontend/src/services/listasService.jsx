export const getListaPorPartido = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/listas/partido/${id}`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo listas del partido",error); 
    }
}