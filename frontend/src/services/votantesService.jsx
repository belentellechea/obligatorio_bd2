export const getVotante = async (cc)=>{
    try {
        const response = await fetch(`http://localhost:8080/votantes/${id}`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo votante", error); 
    }
}