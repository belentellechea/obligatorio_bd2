const apiUrl = import.meta.env.VITE_API_URL;

export const loginAdmin = async ({CC_miembro_mesa,contrasenia}) => {
    try {
        const response = await fetch(`${apiUrl}/loginAdmin`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({CC_miembro_mesa,contrasenia}),
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
        const response = await fetch(`${apiUrl}/login`, {
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