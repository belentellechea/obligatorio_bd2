const apiUrl = import.meta.env.VITE_API_URL;

export const getVotante = async (cc)=>{
    try {
        const response = await fetch(`${apiUrl}/votantes/${cc}`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo votante", error); 
    }
}