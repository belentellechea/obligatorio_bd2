export const getDepartamentos = async () => {
    try {
        const response = await fetch(`http://localhost:8080/departamentos`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo departamentos", error); 
    }
}