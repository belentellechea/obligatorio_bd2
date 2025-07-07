const apiUrl = import.meta.env.VITE_API_URL;

export const getReporteListaPartidoPais = async (id_eleccion) => {
  try {
    const response = await fetch(`${apiUrl}/reportes/listapartido/pais`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_eleccion }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(
      "Error obteniendo datos de los votos por lista y partido en el país",
      error
    );
  }
};

export const getReportePartidoPais = async (id_eleccion) => {
  try {
    const response = await fetch(`${apiUrl}/reportes/partido/pais`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_eleccion }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(
      "Error obteniendo datos de los votos por partido en el país",
      error
    );
  }
};

export const getReporteListaPartidoDpto = async (nombre, id_eleccion) => {
  try {
    const response = await fetch(
      `${apiUrl}/reportes/listapartido/departamento/${nombre}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_eleccion }),
      }
    );

    if (response.status === 404) {
      return null; // <<< devolvemos null y lo manejamos luego
    }
    if (!response.ok) {
      throw new Error("Error al obtener reporte lista por circuito");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(
      "Error obteniendo datos de los votos por lista y partido en el departamento seleccionado",
      error
    );
  }
};

export const getReportePartidoDpto = async (nombre, id_eleccion) => {
  try {
    const response = await fetch(
      `${apiUrl}/reportes/partido/departamento/${nombre}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_eleccion }),
      }
    );

    if (response.status === 404) {
      return null; // <<< devolvemos null y lo manejamos luego
    }
    if (!response.ok) {
      throw new Error("Error al obtener reporte lista por circuito");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(
      "Error obteniendo datos de los votos por partido en el departamento seleccionado",
      error
    );
  }
};

export const getReporteListaPartidoCircuito = async (id_eleccion, id) => {
  try {
    const response = await fetch(
      `${apiUrl}/reportes/listapartido/circuito/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_eleccion }),
      }
    );

    if (response.status === 404) {
      return null; // <<< devolvemos null y lo manejamos luego
    }
    if (!response.ok) {
      throw new Error("Error al obtener reporte lista por circuito");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(
      "Error obteniendo datos de los votos por lista y partido en el circuito seleccionado",
      error
    );
  }
};

export const getReportePartidoCircuito = async (id_eleccion, id) => {
  try {
    const response = await fetch(`${apiUrl}/reportes/partido/circuito/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_eleccion }),
    });

    if (response.status === 404) {
      return null; // <<< devolvemos null y lo manejamos luego
    }
    if (!response.ok) {
      throw new Error("Error al obtener reporte lista por circuito");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(
      "Error obteniendo datos de los votos por partido en el circuito seleccionado",
      error
    );
  }
};
