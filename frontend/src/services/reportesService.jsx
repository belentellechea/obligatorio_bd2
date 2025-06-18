export const getReporteListaPartidoPais = async () => {
    try {
        const response = await fetch(`http://localhost:8080/listapartido/pais`, {
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
        const response = await fetch(`http://localhost:8080/partido/pais`, {
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
        const response = await fetch(`http://localhost:8080/listapartido/departamento/${nombre}`, {
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
        const response = await fetch(`http://localhost:8080/partido/departamento/${nombre}`, {
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
        const response = await fetch(`http://localhost:8080/listapartido/circuito/${id}`, {
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
        const response = await fetch(`http://localhost:8080/partido/circuito/${id}`, {
            method: "GET",
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error obteniendo datos de los votos por partido en el circuito seleccionado",error); 
    }
}