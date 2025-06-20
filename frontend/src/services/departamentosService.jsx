const apiUrl = import.meta.env.VITE_API_URL;

export const getDepartamentos = async () => {
    try {
        const response = await fetch(`${apiUrl}/departamentos`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo departamentos", error); 
    }
}