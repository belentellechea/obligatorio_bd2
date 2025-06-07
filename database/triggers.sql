USE database_obligatorio;

DELIMITER //

CREATE TRIGGER lista_unica_eleccion_nacional
BEFORE INSERT ON LISTA_NACIONAL
FOR EACH ROW
BEGIN
    DECLARE numero_existente INT;

    SELECT COUNT(*) INTO numero_existente
    FROM LISTA_NACIONAL LN
    JOIN LISTA L ON LN.id_lista = L.id_papeleta
    WHERE LN.id_eleccion_presidencial = NEW.id_eleccion_presidencial
      AND L.numero = (SELECT numero FROM LISTA WHERE id_papeleta = NEW.id_lista);

    IF numero_existente > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Ya existe una lista con ese número para esta elección presidencial.';
    END IF;
END;

//

CREATE TRIGGER lista_unica_eleccion_municipal
BEFORE INSERT ON LISTA_MUNICIPAL_DEPARTAMENTAL
FOR EACH ROW
BEGIN
    DECLARE numero_existente INT;

    SELECT COUNT(*) INTO numero_existente
    FROM LISTA_MUNICIPAL_DEPARTAMENTAL LMD
    JOIN LISTA L ON LMD.id_lista = L.id_papeleta
    WHERE LMD.id_eleccion_muncipal_departamental = NEW.id_eleccion_municipal_departamental
      AND L.numero = (SELECT numero FROM LISTA WHERE id_papeleta = NEW.id_lista);

    IF numero_existente > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Ya existe una lista con ese número para esta elección municipal/departamental.';
    END IF;
END;

//

CREATE TRIGGER dos_formula_por_ballotage
BEFORE INSERT ON FORMULA
FOR EACH ROW
BEGIN
    DECLARE total INT;

    SELECT COUNT(*) INTO total
    FROM FORMULA
    WHERE id_ballotage = NEW.id_ballotage;

    IF total >= 2 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'No se pueden ingresar más de dos fórmulas por elección de ballotage.';
    END IF;
END;

//

CREATE TRIGGER max_2_papeleta_si_no
BEFORE INSERT ON PAPELETA_SI_NO
FOR EACH ROW
BEGIN
    DECLARE total INT;

    SELECT COUNT(*) INTO total
    FROM PAPELETA_SI_NO
    WHERE id_referendum_plebiscito = NEW.id_referendum_plebiscito;

    IF total >= 2 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Solo se permiten hasta 2 papeletas por referéndum/plebiscito.';
    END IF;
END;

//

CREATE TRIGGER color_unico_por_referendum
BEFORE INSERT ON PAPELETA_SI_NO
FOR EACH ROW
BEGIN
    DECLARE existe_color INT;

    SELECT COUNT(*) INTO existe_color
    FROM PAPELETA_SI_NO
    WHERE id_referendum_plebiscito = NEW.id_referendum_plebiscito
      AND color = NEW.color;

    IF existe_color > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'El color ya existe para la elección de referéndum/plebiscito indicada.';
    END IF;
END;

//

CREATE TRIGGER verificar_anio_candidato
BEFORE INSERT ON CANDIDATO
FOR EACH ROW
BEGIN
    IF NEW.anio > YEAR(CURDATE()) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'El año no puede ser mayor al año actual';
    END IF;
END;

//

DELIMITER ;