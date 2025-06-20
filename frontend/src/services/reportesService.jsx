const apiUrl = import.meta.env.VITE_API_URL;

export const getReporteListaPartidoPais = async () => {
    try {
        const response = await fetch(`${apiUrl}/listapartido/pais`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo datos de los votos por lista y partido en el país",error); 
    }
}

export const getReportePartidoPais = async () => {
    try {
        const response = await fetch(`${apiUrl}/partido/pais`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo datos de los votos por partido en el país",error); 
    }
}

export const getReporteListaPartidoDpto = async (nombre) => {
    try {
        const response = await fetch(`${apiUrl}/listapartido/departamento/${nombre}`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo datos de los votos por lista y partido en el departamento seleccionado",error); 
    }
}

export const getReportePartidoDpto = async () => {
    try {
        const response = await fetch(`${apiUrl}/partido/departamento/${nombre}`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo datos de los votos por partido en el departamento seleccionado",error); 
    }
}

export const getReporteListaPartidoCircuito = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/listapartido/circuito/${id}`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo datos de los votos por lista y partido en el circuito seleccionado",error); 
    }
}

export const getReportePartidoCircuito = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/partido/circuito/${id}`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo datos de los votos por partido en el circuito seleccionado",error); 
    }
}