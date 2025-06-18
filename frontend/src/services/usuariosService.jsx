export const loginAdmin = async ({CC,contrasenia}) => {
    try {
        const response = await fetch(`http://localhost:8080/loginAdmin`, {
            method: "POST",
            headers: {
                "Content_Type":"application/json"
            },
            body: JSON.stringify({CC,contrasenia}),
        });

        const data = await response.json();

        if (!response.ok) {
            const err = await response.json(); 
            throw new Error(err.error || "Error al iniciar sesión como administrador"); 
        }

        return data; 

    } catch (error) {
        console.log("Error iniciando sesión",error); 
    }
}

export const loginVotante = async ({CC}) => {
    try {
        const response = await fetch(`http://localhost:8080/login`, {
            method: "POST",
            headers: {
                "Content_Type":"application/json"
            },
            body: JSON.stringify({CC}),
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