CREATE VIEW info_votante AS
SELECT
    p.CC AS credencial,
    p.CI,
    p.nombre,
    p.apellido,
    p.fecha_nacimiento,
    v.id_eleccion
FROM VOTANTE v
JOIN PERSONA p ON v.CC_persona=p.CC;

CREATE VIEW resultados_pais_lista_partido AS
SELECT
  ce.id_eleccion,
  COALESCE(CONCAT('Lista ', l.numero), v.tipo) AS lista,
  COALESCE(pp.nombre, v.tipo) AS partido,
  COUNT(*) AS cantidad_votos,
  ROUND(
    COUNT(*) * 100.0 /
    NULLIF(SUM(COUNT(*)) OVER (PARTITION BY ce.id_eleccion), 0),
    2
  ) AS porcentaje
FROM VOTO v
JOIN CIRCUITO_ELECCION ce ON v.numero_circuito = ce.numero_circuito
LEFT JOIN VOTO_PAPELETA vp ON v.ID = vp.id_voto
LEFT JOIN LISTA l ON vp.id_papeleta = l.id_papeleta
LEFT JOIN PARTIDO_POLITICO pp ON l.partido = pp.nombre
GROUP BY ce.id_eleccion, l.numero, pp.nombre, v.tipo
ORDER BY ce.id_eleccion, cantidad_votos DESC;

CREATE VIEW resultados_pais_partido AS
SELECT
  ce.id_eleccion,
  COALESCE(pp.nombre, v.tipo) AS partido,
  COUNT(*) AS cantidad_votos,
  ROUND(
    COUNT(*) * 100.0 /
    NULLIF(SUM(COUNT(*)) OVER (PARTITION BY ce.id_eleccion), 0),
    2
  ) AS porcentaje
FROM VOTO v
JOIN CIRCUITO c ON v.numero_circuito = c.numero
JOIN CIRCUITO_ELECCION ce ON c.numero = ce.numero_circuito
LEFT JOIN VOTO_PAPELETA vp ON v.ID = vp.id_voto
LEFT JOIN LISTA l ON vp.id_papeleta = l.id_papeleta
LEFT JOIN PARTIDO_POLITICO pp ON l.partido = pp.nombre
GROUP BY ce.id_eleccion, pp.nombre, v.tipo
ORDER BY ce.id_eleccion, cantidad_votos DESC;



CREATE VIEW resultados_departamento_lista_partido AS
SELECT
  ce.id_eleccion,
  d.nombre AS departamento,
  COALESCE(CONCAT('Lista ', l.numero), v.tipo) AS lista,
  COALESCE(pp.nombre, v.tipo) AS partido,
  COUNT(*) AS cantidad_votos,
  ROUND(
    COUNT(*) * 100.0 /
    NULLIF(SUM(COUNT(*)) OVER (PARTITION BY ce.id_eleccion, d.nombre), 0),
    2
  ) AS porcentaje
FROM VOTO v
JOIN CIRCUITO c ON v.numero_circuito = c.numero
JOIN CIRCUITO_ELECCION ce ON c.numero = ce.numero_circuito
JOIN ESTABLECIMIENTO e ON c.id_establecimiento = e.ID
JOIN LUGAR lgr ON e.id_lugar = lgr.ID
JOIN DEPARTAMENTO d ON lgr.id_dpto = d.ID
LEFT JOIN VOTO_PAPELETA vp ON v.ID = vp.id_voto
LEFT JOIN LISTA l ON vp.id_papeleta = l.id_papeleta
LEFT JOIN PARTIDO_POLITICO pp ON l.partido = pp.nombre
GROUP BY ce.id_eleccion, d.nombre, l.numero, pp.nombre, v.tipo
ORDER BY ce.id_eleccion, d.nombre, cantidad_votos DESC;

CREATE VIEW resultados_departamento_partido AS
SELECT
  ce.id_eleccion,
  d.nombre AS departamento,
  COALESCE(pp.nombre, v.tipo) AS partido,
  COUNT(*) AS cantidad_votos,
  ROUND(
    COUNT(*) * 100.0 /
    NULLIF(SUM(COUNT(*)) OVER (PARTITION BY ce.id_eleccion, d.nombre), 0),
    2
  ) AS porcentaje
FROM VOTO v
JOIN CIRCUITO c ON v.numero_circuito = c.numero
JOIN CIRCUITO_ELECCION ce ON c.numero = ce.numero_circuito
JOIN ESTABLECIMIENTO e ON c.id_establecimiento = e.ID
JOIN LUGAR lgr ON e.id_lugar = lgr.ID
JOIN DEPARTAMENTO d ON lgr.id_dpto = d.ID
LEFT JOIN VOTO_PAPELETA vp ON v.ID = vp.id_voto
LEFT JOIN LISTA l ON vp.id_papeleta = l.id_papeleta
LEFT JOIN PARTIDO_POLITICO pp ON l.partido = pp.nombre
GROUP BY ce.id_eleccion, d.nombre, pp.nombre, v.tipo
ORDER BY ce.id_eleccion, d.nombre, cantidad_votos DESC;



CREATE VIEW resultados_circuito_lista_partido AS
SELECT
  ce.id_eleccion,
  c.numero AS circuito,
  COALESCE(CONCAT('Lista ', l.numero), v.tipo) AS lista,
  COALESCE(pp.nombre, v.tipo) AS partido,
  COUNT(*) AS cantidad_votos,
  ROUND(
    COUNT(*) * 100.0 /
    NULLIF(SUM(COUNT(*)) OVER (PARTITION BY ce.id_eleccion, c.numero), 0),
    2
  ) AS porcentaje
FROM VOTO v
JOIN CIRCUITO c ON v.numero_circuito = c.numero
JOIN CIRCUITO_ELECCION ce ON c.numero = ce.numero_circuito
LEFT JOIN VOTO_PAPELETA vp ON v.ID = vp.id_voto
LEFT JOIN LISTA l ON vp.id_papeleta = l.id_papeleta
LEFT JOIN PARTIDO_POLITICO pp ON l.partido = pp.nombre
GROUP BY ce.id_eleccion, c.numero, l.numero, pp.nombre, v.tipo
ORDER BY ce.id_eleccion, c.numero, cantidad_votos DESC;

CREATE VIEW resultados_circuito_partido AS
SELECT
  ce.id_eleccion,
  c.numero AS circuito,
  COALESCE(pp.nombre, v.tipo) AS partido,
  COUNT(*) AS cantidad_votos,
  ROUND(
    COUNT(*) * 100.0 /
    NULLIF(SUM(COUNT(*)) OVER (PARTITION BY ce.id_eleccion, c.numero), 0),
    2
  ) AS porcentaje
FROM VOTO v
JOIN CIRCUITO c ON v.numero_circuito = c.numero
JOIN CIRCUITO_ELECCION ce ON c.numero = ce.numero_circuito
LEFT JOIN VOTO_PAPELETA vp ON v.ID = vp.id_voto
LEFT JOIN LISTA l ON vp.id_papeleta = l.id_papeleta
LEFT JOIN PARTIDO_POLITICO pp ON l.partido = pp.nombre
GROUP BY ce.id_eleccion, c.numero, pp.nombre, v.tipo
ORDER BY ce.id_eleccion, c.numero, cantidad_votos DESC;

