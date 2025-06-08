DROP DATABASE IF EXISTS database_obligatorio;

CREATE DATABASE database_obligatorio DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;

USE database_obligatorio;

CREATE TABLE ELECCION (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    fecha_hora_inicio DATETIME NOT NULL,
    fecha_hora_fin DATETIME NOT NULL

);

CREATE TABLE ELECCION_PRESIDENCIAL (
    id_eleccion INT PRIMARY KEY,
    FOREIGN KEY (id_eleccion) REFERENCES ELECCION(ID)
);

CREATE TABLE ELECCION_MUNICIPAL (
    id_eleccion INT PRIMARY KEY,
    FOREIGN KEY (id_eleccion) REFERENCES ELECCION(ID)
);

CREATE TABLE REFERENDUM_PLEBISCITO (
    id_eleccion INT PRIMARY KEY,
    FOREIGN KEY (id_eleccion) REFERENCES ELECCION(ID)
);

CREATE TABLE BALLOTAGE (
    id_eleccion INT PRIMARY KEY,
    FOREIGN KEY (id_eleccion) REFERENCES ELECCION(ID)
);

CREATE TABLE PAPELETA (
    ID INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE PARTIDO_POLITICO (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion_sede VARCHAR(200)
);

CREATE TABLE LISTA (
    id_papeleta INT PRIMARY KEY,
    numero INT NOT NULL,
    partido VARCHAR(100),
    FOREIGN KEY (id_papeleta) REFERENCES PAPELETA(ID)
);

CREATE TABLE LISTA_NACIONAL (
    id_lista INT,
    id_eleccion_presidencial INT,
    PRIMARY KEY (id_lista),
    FOREIGN KEY (id_lista) REFERENCES LISTA(id_papeleta),
    FOREIGN KEY (id_eleccion_presidencial) REFERENCES ELECCION_PRESIDENCIAL(id_eleccion)
);

CREATE TABLE DEPARTAMENTO (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE LISTA_MUNICIPAL_DEPARTAMENTAL (
    id_lista INT,
    id_eleccion_municipal_departamental INT,
    id_dpto INT,
    tipo VARCHAR(20),
    PRIMARY KEY (id_lista),
    FOREIGN KEY (id_lista) REFERENCES LISTA(id_papeleta),
    FOREIGN KEY (id_eleccion_municipal_departamental) REFERENCES ELECCION_MUNICIPAL(id_eleccion),
    FOREIGN KEY (id_dpto) REFERENCES DEPARTAMENTO(ID),
    CHECK (tipo IN ('municipal', 'departamental'))
);

CREATE TABLE PAPELETA_SI_NO (
    id_papeleta INT,
    id_referendum_plebiscito INT,
    color VARCHAR(50),
    tipo VARCHAR(2) NOT NULL,
    PRIMARY KEY (id_papeleta),
    FOREIGN KEY (id_papeleta) REFERENCES PAPELETA(ID),
    FOREIGN KEY (id_referendum_plebiscito) REFERENCES REFERENDUM_PLEBISCITO(id_eleccion),
    CHECK (tipo IN ('si', 'no'))
);

CREATE TABLE PERSONA (
    CC VARCHAR(8) PRIMARY KEY,
    CI VARCHAR(8) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE,
    CHECK (CI REGEXP '^[0-9]{8}$'),
    CHECK (CC REGEXP '^[A-Z]{3}[0-9]{4,5}$')
);

CREATE TABLE CANDIDATO (
    CC_persona VARCHAR(8),
    id_partido_politico INT,
    anio INT,
    PRIMARY KEY (CC_persona, anio),
    FOREIGN KEY (CC_persona) REFERENCES PERSONA(CC),
    FOREIGN KEY (id_partido_politico) REFERENCES PARTIDO_POLITICO(ID)
);

CREATE TABLE FORMULA (
    id_papeleta INT,
    id_ballotage INT,
    cc_candidato VARCHAR(8) UNIQUE,
    PRIMARY KEY (id_papeleta),
    FOREIGN KEY (id_papeleta) REFERENCES PAPELETA(ID),
    FOREIGN KEY (id_ballotage) REFERENCES BALLOTAGE(id_eleccion),
    FOREIGN KEY (cc_candidato) REFERENCES CANDIDATO(CC_persona)
);

CREATE TABLE LUGAR (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(20),
    id_dpto INT,
    FOREIGN KEY (id_dpto) REFERENCES DEPARTAMENTO(ID),
    CHECK (tipo IN ('pueblo', 'ciudad', 'paraje', 'barrio', 'zona'))
);

CREATE TABLE ESTABLECIMIENTO (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    id_lugar INT,
    direccion VARCHAR(200) NOT NULL,
    tipo VARCHAR(50),
    FOREIGN KEY (id_lugar) REFERENCES LUGAR(ID)
);

CREATE TABLE COMISARIA (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    id_dpto INT NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    FOREIGN KEY (id_dpto) REFERENCES DEPARTAMENTO(ID)
);

CREATE TABLE CIRCUITO (
    numero INT PRIMARY KEY,
    accesible BOOLEAN,
    inicio_rango_cc_habilitadas INT NOT NULL,
    fin_rango_cc_habilitadas INT NOT NULL,
    id_establecimiento INT,
    FOREIGN KEY (id_establecimiento) REFERENCES ESTABLECIMIENTO(ID),
    CHECK (inicio_rango_cc_habilitadas REGEXP '^[A-Z]{3}[0-9]{4,5}$'),
    CHECK (fin_rango_cc_habilitadas REGEXP '^[A-Z]{3}[0-9]{4,5}$')
);

CREATE TABLE CIRCUITO_ELECCION (
    id_eleccion INT,
    numero_circuito INT,
    PRIMARY KEY (id_eleccion, numero_circuito),
    FOREIGN KEY (id_eleccion) REFERENCES ELECCION(ID),
    FOREIGN KEY (numero_circuito) REFERENCES CIRCUITO(numero)
);

CREATE TABLE POLICIA (
    CC_persona VARCHAR(8),
    id_comisaria INT,
    id_establecimiento INT,
    fecha DATE,
    PRIMARY KEY (CC_persona, fecha),
    FOREIGN KEY (CC_persona) REFERENCES PERSONA(CC),
    FOREIGN KEY (id_comisaria) REFERENCES COMISARIA(ID),
    FOREIGN KEY (id_establecimiento) REFERENCES ESTABLECIMIENTO(ID)
);

CREATE TABLE VOTANTE (
    CC_persona VARCHAR(8),
    confirmacion_voto INT,
    numero_circuito_esperado INT,
    numero_circuito_votacion INT,
    id_eleccion INT,
    PRIMARY KEY (CC_persona, confirmacion_voto),
    FOREIGN KEY (CC_persona) REFERENCES PERSONA(CC),
    FOREIGN KEY (numero_circuito_esperado) REFERENCES CIRCUITO_ELECCION(numero_circuito),
    FOREIGN KEY (numero_circuito_votacion) REFERENCES CIRCUITO_ELECCION(numero_circuito),
    FOREIGN KEY (id_eleccion) REFERENCES CIRCUITO_ELECCION(id_eleccion)
);

CREATE TABLE MIEMBRO_MESA (
    CC_persona VARCHAR(8) PRIMARY KEY,
    organismo VARCHAR(50),
    FOREIGN KEY (CC_persona) REFERENCES PERSONA(CC)
);

CREATE TABLE PRESIDENTE (
    CC_miembro_mesa VARCHAR(8) PRIMARY KEY,
    FOREIGN KEY (CC_miembro_mesa) REFERENCES MIEMBRO_MESA(CC_persona)
);

CREATE TABLE SECRETARIO (
    CC_miembro_mesa VARCHAR(8) PRIMARY KEY,
    FOREIGN KEY (CC_miembro_mesa) REFERENCES MIEMBRO_MESA(CC_persona)
);

CREATE TABLE VOCAL (
    CC_miembro_mesa VARCHAR(8) PRIMARY KEY,
    FOREIGN KEY (CC_miembro_mesa) REFERENCES MIEMBRO_MESA(CC_persona)
);

CREATE TABLE MESA (
    ID INT AUTO_INCREMENT,
    numero_circuito INT UNIQUE,
    id_eleccion INT UNIQUE,
    CC_presidente VARCHAR(8) UNIQUE,
    CC_secretario VARCHAR(8) UNIQUE,
    CC_vocal VARCHAR(8) UNIQUE,
    PRIMARY KEY (ID),
    FOREIGN KEY (numero_circuito, id_eleccion) REFERENCES CIRCUITO_ELECCION(numero_circuito, id_eleccion),
    FOREIGN KEY (CC_presidente) REFERENCES PRESIDENTE(CC_miembro_mesa),
    FOREIGN KEY (CC_secretario) REFERENCES SECRETARIO(CC_miembro_mesa),
    FOREIGN KEY (CC_vocal) REFERENCES VOCAL(CC_miembro_mesa)
);

CREATE TABLE CANDIDATO_LISTA (
    cc_candidato VARCHAR(8),
    id_lista INT,
    orden INT,
    organo VARCHAR(50),
    PRIMARY KEY (cc_candidato, id_lista),
    FOREIGN KEY (cc_candidato) REFERENCES CANDIDATO(CC_persona),
    FOREIGN KEY (id_lista) REFERENCES LISTA(id_papeleta),
    CHECK (organo IN ('presidencia', 'vicepresidencia', 'camara_senadores', 'camara_representantes', 'junta_electoral'))
);

CREATE TABLE VOTO (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    numero_circuito INT,
    fecha_hora DATETIME,
    tipo VARCHAR(30),
    observado BOOLEAN,
    FOREIGN KEY (numero_circuito) REFERENCES CIRCUITO(numero),
    CHECK (tipo IN ('valido_en_blanco', 'anulado', 'valido_simple'))
);

CREATE TABLE VOTO_PAPELETA (
    id_voto INT,
    id_papeleta INT,
    PRIMARY KEY (id_voto, id_papeleta),
    FOREIGN KEY (id_voto) REFERENCES VOTO(ID),
    FOREIGN KEY (id_papeleta) REFERENCES PAPELETA(ID)
);
