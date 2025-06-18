export const loginAdmin = async ({cc_miembro_mesa,contrasenia}) => {
    try {
        const response = await fetch(`http://localhost:8080/loginAdmin`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({cc_miembro_mesa,contrasenia}),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Error al iniciar sesión como administrador"); 
        }

        return data; 

    } catch (error) {
        console.log("Error iniciando sesión",error); 
    }
}

export const loginVotante = async ({cc_persona}) => {
    try {
        const response = await fetch(`http://localhost:8080/login`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({cc_persona}),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Error al iniciar sesión como administrador"); 
        }

        return data; 

    } catch (error) {
        console.log("Error iniciando sesión",error); 
    }
}