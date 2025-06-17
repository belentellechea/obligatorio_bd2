CREATE VIEW info_votante AS
SELECT
    p.CC AS credencial,
    p.CI,
    p.nombre,
    p.apellido,
    p.fecha_nacimiento,
    v.id_eleccion
FROM VOTANTE v
JOIN PERSONA p ON V.CC_persona=P.CC;

CREATE VIEW resultados_pais AS
SELECT
  COALESCE(pp.nombre, v.tipo) AS partido,
  COUNT(*) AS cantidad_votos,
  SUM(CASE WHEN v.tipo = 'valido_simple' THEN 1 ELSE 0 END) OVER () AS total_validos,
  ROUND(
    CASE
      WHEN v.tipo = 'valido_simple' THEN COUNT(*) * 100.0 /
        NULLIF(SUM(CASE WHEN v.tipo = 'valido_simple' THEN 1 ELSE 0 END) OVER (), 0)
      ELSE COUNT(*) * 100.0 /
        NULLIF(COUNT(*) OVER (), 0)
    END
  , 2) AS porcentaje
FROM VOTO v
LEFT JOIN VOTO_PAPELETA vp ON v.ID = vp.id_voto
LEFT JOIN LISTA l ON vp.id_papeleta = l.id_papeleta
LEFT JOIN PARTIDO_POLITICO pp ON l.partido = pp.nombre
GROUP BY pp.nombre, v.tipo
ORDER BY cantidad_votos DESC;

CREATE VIEW resultados_por_departamento AS
SELECT
  d.nombre AS departamento,
  COALESCE(pp.nombre, v.tipo) AS partido,
  COUNT(*) AS cantidad_votos,
  SUM(CASE WHEN v.tipo = 'valido_simple' THEN 1 ELSE 0 END) OVER (PARTITION BY d.nombre) AS total_validos,
  ROUND(
    CASE
      WHEN v.tipo = 'valido_simple' THEN COUNT(*) * 100.0 /
        NULLIF(SUM(CASE WHEN v.tipo = 'valido_simple' THEN 1 ELSE 0 END) OVER (PARTITION BY d.nombre), 0)
      ELSE COUNT(*) * 100.0 /
        NULLIF(COUNT(*) OVER (PARTITION BY d.nombre), 0)
    END
  , 2) AS porcentaje
FROM VOTO v
LEFT JOIN VOTO_PAPELETA vp ON v.ID = vp.id_voto
LEFT JOIN LISTA l ON vp.id_papeleta = l.id_papeleta
LEFT JOIN PARTIDO_POLITICO pp ON l.partido = pp.nombre
JOIN CIRCUITO c ON v.numero_circuito = c.numero
JOIN ESTABLECIMIENTO e ON c.id_establecimiento = e.ID
JOIN LUGAR lu ON e.id_lugar = lu.ID
JOIN DEPARTAMENTO d ON lu.id_dpto = d.ID
GROUP BY d.nombre, pp.nombre, v.tipo
ORDER BY d.nombre, cantidad_votos DESC;

CREATE VIEW vista_resultados_por_circuito AS
SELECT
  c.numero AS circuito,
  COALESCE(pp.nombre, v.tipo) AS partido,
  COUNT(*) AS cantidad_votos,
  SUM(CASE WHEN v.tipo = 'valido_simple' THEN 1 ELSE 0 END) OVER (PARTITION BY c.numero) AS total_validos,
  ROUND(
    CASE
      WHEN v.tipo = 'valido_simple' THEN COUNT(*) * 100.0 /
        NULLIF(SUM(CASE WHEN v.tipo = 'valido_simple' THEN 1 ELSE 0 END) OVER (PARTITION BY c.numero), 0)
      ELSE COUNT(*) * 100.0 /
        NULLIF(COUNT(*) OVER (PARTITION BY c.numero), 0)
    END
  , 2) AS porcentaje
FROM VOTO v
LEFT JOIN VOTO_PAPELETA vp ON v.ID = vp.id_voto
LEFT JOIN LISTA l ON vp.id_papeleta = l.id_papeleta
LEFT JOIN PARTIDO_POLITICO pp ON l.partido = pp.nombre
JOIN CIRCUITO c ON v.numero_circuito = c.numero
GROUP BY c.numero, pp.nombre, v.tipo
ORDER BY c.numero, cantidad_votos DESC;