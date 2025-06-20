INSERT INTO ELECCION (fecha_hora_inicio, fecha_hora_fin) VALUES
('2024-10-27 08:00:00', '2024-10-27 19:30:00');

INSERT INTO ELECCION_PRESIDENCIAL (id_eleccion) VALUES (1);

INSERT INTO DEPARTAMENTO (nombre) VALUES
('Artigas'),
('Canelones'),
('Cerro Largo'),
('Colonia'),
('Durazno'),
('Flores'),
('Florida'),
('Lavalleja'),
('Maldonado'),
('Montevideo'),
('Paysandú'),
('Río Negro'),
('Rivera'),
('Rocha'),
('Salto'),
('San José'),
('Soriano'),
('Tacuarembó'),
('Treinta y Tres');

INSERT INTO LUGAR (nombre, tipo, id_dpto) VALUES
('Centro', 'ciudad', 10),
('Cordón', 'barrio', 10),
('Aguada', 'zona', 10),
('Las Piedras', 'ciudad', 2),
('Santa Rosa', 'pueblo', 2),
('San Carlos', 'ciudad', 9),
('Piriápolis', 'pueblo', 9),
('Bella Unión', 'ciudad', 1),
('Melo', 'ciudad', 3),
('Colonia del Sacramento', 'ciudad', 4),
('Durazno', 'ciudad', 5),
('Trinidad', 'ciudad', 6),
('Florida', 'ciudad', 7),
('Minas', 'ciudad', 8),
('Paysandú', 'ciudad', 11),
('Fray Bentos', 'ciudad', 12),
('Rivera', 'ciudad', 13),
('Rocha', 'ciudad', 14),
('Salto', 'ciudad', 15),
('San José de Mayo', 'ciudad', 16),
('Mercedes', 'ciudad', 17),
('Tacuarembó', 'ciudad', 18),
('Treinta y Tres', 'ciudad', 19);

INSERT INTO ESTABLECIMIENTO (id_lugar, direccion, tipo) VALUES
(1, 'Av. 18 de Julio 1234', 'liceo'),
(2, 'Calle Juan Paullier 456', 'escuela'),
(3, 'Zona Aguada s/n', 'escuela técnica'),
(4, 'Ruta 5 km 28', 'liceo'),
(5, 'Santa Rosa 222', 'escuela rural'),
(6, 'San Carlos centro', 'liceo'),
(7, 'Piriápolis Playa Grande', 'escuela'),
(8, 'Bella Unión Av. Artigas', 'liceo'),
(9, 'Melo Plaza Constitución', 'escuela'),
(10, 'Colonia del Sacramento 18 de Julio', 'liceo'),
(11, 'Durazno centro', 'escuela'),
(12, 'Trinidad barrio Este', 'liceo'),
(13, 'Florida calle Rivera', 'escuela'),
(14, 'Minas calle Lavalleja', 'liceo'),
(15, 'Paysandú costanera', 'escuela'),
(16, 'Fray Bentos centro', 'liceo'),
(17, 'Rivera barrio Mandubí', 'escuela'),
(18, 'Rocha avenida principal', 'liceo'),
(19, 'Salto termas', 'escuela técnica'),
(20, 'San José centro', 'liceo'),
(21, 'Mercedes rambla', 'escuela'),
(22, 'Tacuarembó Plaza 19 de Abril', 'liceo');

INSERT INTO CIRCUITO (numero, accesible, inicio_rango_cc_habilitadas, fin_rango_cc_habilitadas, id_establecimiento) VALUES
(1, TRUE,  'AAA0000', 'AZZ9999',  8),
(2, FALSE, 'BAA0000', 'BZZ9999',  4),
(3, TRUE,  'CAA0000', 'CZZ9999',  9),
(4, FALSE, 'DAA0000', 'DZZ9999', 10),
(5, TRUE,  'EAA0000', 'EZZ9999', 11),
(6, FALSE, 'FAA0000', 'FZZ9999', 12),
(7, TRUE,  'GAA0000', 'GZZ9999', 13),
(8, FALSE, 'HAA0000', 'HZZ9999', 14),
(9, TRUE,  'IAA0000', 'IZZ9999',  6),
(10, FALSE,'JAA0000', 'JZZ9999',  1),
(11, TRUE, 'KAA0000', 'KZZ9999', 15),
(12, FALSE,'LAA0000', 'LZZ9999', 16),
(13, TRUE, 'MAA0000', 'OZZ9999', 17),
(14, FALSE,'PAA0000', 'RZZ9999', 18),
(15, TRUE, 'SAA0000', 'SZZ9999', 19),
(16, FALSE,'TAA0000', 'TZZ9999', 20),
(17, TRUE, 'UAA0000', 'UZZ9999', 21),
(18, FALSE,'VAA0000', 'VZZ9999', 22),
(19, TRUE, 'WAA0000', 'ZZZ9999', 22);

INSERT INTO CIRCUITO_ELECCION(id_eleccion, numero_circuito) VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,6),
(1,7),
(1,8),
(1,9),
(1,10),
(1,11),
(1,12),
(1,13),
(1,14),
(1,15),
(1,16),
(1,17),
(1,18),
(1,19);

INSERT INTO PARTIDO_POLITICO (nombre, direccion_sede) VALUES
('Partido Nacional', 'Uruguay 1347'),
('Frente Amplio','Constituyente 1471'),
('Partido Colorado', 'Mercedes 1247'),
('Cabildo Abierto','25 de Mayo 558');

INSERT INTO PAPELETA () VALUES ();
INSERT INTO PAPELETA () VALUES ();
INSERT INTO PAPELETA () VALUES ();
INSERT INTO PAPELETA () VALUES ();
INSERT INTO PAPELETA () VALUES ();
INSERT INTO PAPELETA () VALUES ();
INSERT INTO PAPELETA () VALUES ();
INSERT INTO PAPELETA () VALUES ();
INSERT INTO PAPELETA () VALUES ();
INSERT INTO PAPELETA () VALUES ();
INSERT INTO PAPELETA () VALUES ();
INSERT INTO PAPELETA () VALUES ();

INSERT INTO LISTA(id_papeleta, numero, partido) VALUES
(1,2050,'Partido Nacional'),
(2,252,'Partido Nacional'),
(3,73,'Partido Nacional'),
(4,52,'Frente Amplio'),
(5,609,'Frente Amplio'),
(6,1001,'Frente Amplio'),
(7,600,'Partido Colorado'),
(8,10,'Partido Colorado'),
(9,25,'Partido Colorado'),
(10,2701,'Cabildo Abierto'),
(11,411,'Cabildo Abierto'),
(12,47,'Cabildo Abierto');

INSERT INTO LISTA_NACIONAL(id_lista, id_eleccion_presidencial) VALUES
(1,1),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1),
(9,1),
(10,1),
(11,1),
(12,1);

INSERT INTO PERSONA(CC, CI, nombre, apellido, fecha_nacimiento) VALUES
('BCA3564','32876579','Juan','Garcia','1998-04-01'),
('KLM4578','43728190','María','Fernández','1995-09-15'),
('XYZ1234','41872345','Luis','Martínez','1992-06-22'),
('PQR9845','40918276','Ana','López','2000-01-10'),
('DEF3456','39817264','Carlos','Pérez','1988-12-30'),
('LMN4567','42718345','Lucía','Rodríguez','1999-07-05'),
('GHI6789','41729384','Pedro','Gómez','1957-03-18'),
('UVW2345','43819273','Sofía','Díaz','1994-11-02'),
('JKL9876','42638471','Diego','Sánchez','1996-08-26'),
('MNO1235','41938476','Valentina','Ramírez','1993-05-12'),
('RST6543','43192847','Nicolás','Torres','1991-10-17'),
('TUV4321','40729183','Camila','Ruiz','1990-09-09'),
('QWE6781','43628471','Mateo','Silva','2001-04-20'),
('ZXC3219','41473829','Florencia','Méndez','1989-07-14'),
('ASD9870','42938472','Tomás','Cabrera','1998-02-27'),
('FGH3452','43728472','Julieta','Morales','1997-06-06'),
('BNM7612','41827462','Martín','Vega','1965-03-30'),
('YUI5623','42387193','Paula','Ortega','1992-12-19'),
('HJK7634','43384920','Agustina','Acosta','2000-10-11'),
('CVB8321','41127364','Facundo','Castro','1973-01-08'),
('QAZ9631','43281736','Emilia','Suárez','1999-11-22'),
('WSX8520','42839475','Bruno','Pereira','1994-08-03'),
('EDC7418','41028364','Renata','Lozano','1991-05-17'),
('RFV6309','43982746','Santiago','Navarro','1966-07-28'),
('TGB5297','43718294','Martina','Molina','1993-03-12'),
('YHN4186','42638492','Lucas','Bermúdez','1990-09-01'),
('UJM3074','41729385','Catalina','Sosa','1995-10-05'),
('IKL2963','41572938','Andrés','Rivas','1992-12-09'),
('OLP1652','41938471','Mía','Leal','1968-06-14'),
('XCV0741','40817294','Gonzalo','Iglesias','2000-02-25'),
('MLK5823','40192847','Valentina','Correa','1997-01-19'),
('ZXC4712','42381746','Agustín','Ramos','1975-04-22'),
('BNM3601','43629184','Isabella','Silva','1963-09-30'),
('POI2490','41482739','Tomás','Cabrera','1990-12-15'),
('LKJ1388','40739481','Camila','Ferrer','1952-08-08'),
('BMC1234', '47432109', 'Yamandú', 'Orsi',   '1960-02-07'),
('ACJ5678', '37451268', 'Carolina', 'Cosse', '1962-10-25'),
('FHI4321', '40123456', 'Álvaro', 'Delgado', '1969-04-16'),
('BME8765', '43125678', 'Valeria', 'Ripoll',  '1970-04-21'),
('CMM2345', '41345678', 'Andrés', 'Ojeda',    '1970-03-15'),
('SFU6789', '42987654', 'Robert', 'Silva',    '1971-05-10'),
('MBE3456', '38561234', 'Guido',   'Manini',   '1958-06-17'),
('JKL9877', '42034567', 'Lorena',  'Quintana', '1975-01-05');

INSERT INTO COMISARIA(id_dpto, direccion) VALUES
(1, 'Av. Lecueder 123'),
(1, 'Gral. Lavalleja 1101'),
(2, 'Cno. Maldonado 456'),
(2, 'Ruta 5 Km 32'),
(2, 'Ruta Interbalnearia Km 26'),
(2, 'Av. Artigas 200'),
(3, 'Gral. Rivera 789'),
(4, 'Av. Roosevelt 321'),
(5, 'Bvar. Artigas 654'),
(5, 'Av. Churchill 340'),
(6, 'Sarandí 987'),
(7, 'Ituzaingó 159'),
(8, 'Av. Lavalleja 753'),
(9, 'Av. Aiguá 852'),
(9, 'Av. Acuña de Figueroa 845'),
(10, 'Bvar. Batlle y Ordóñez 951'),
(10, 'Av. 8 de Octubre 1234'),
(10, 'Cno. Carrasco 2301'),
(10, 'Av. Gral. Flores 875'),
(10, 'Bvar. José Batlle y Ordóñez 1999'),
(11, 'Leandro Gómez 357'),
(11, 'Calle 18 de Julio 1200'),
(12, '18 de Julio 468'),
(13, 'Av. Sarandí 579'),
(13, 'Av. Brasil 420'),
(14, 'Gral. Artigas 680'),
(15, 'Uruguay 791'),
(16, 'Ituzaingó 203'),
(17, 'Zorrilla de San Martín 314'),
(17, 'Av. Rodó 933'),
(18, 'Gral. Flores 425'),
(19, 'Treinta y Tres 536');

INSERT INTO POLICIA (CC_persona, id_comisaria, id_establecimiento, fecha) VALUES
('BCA3564', 8,  2, '2024-10-27'),
('KLM4578', 2,  10, '2024-10-27'),
('XYZ1234', 15,  3, '2024-10-27'),
('PQR9845', 4,  4, '2024-10-27'),
('DEF3456', 11,  6, '2024-10-27');

INSERT INTO CANDIDATO (cc_persona, id_partido_politico, anio) VALUES
('BMC1234',2,2024),
('ACJ5678',2,2024),
('FHI4321',1,2024),
('BME8765',1,2024),
('BME8765',2,2014),
('CMM2345',3,2024),
('SFU6789',3,2024),
('MBE3456',4,2024),
('JKL9877',4,2024);

INSERT INTO CANDIDATO_LISTA(cc_candidato, anio, id_lista, orden, organo) VALUES
('FHI4321', 2024,1,1,'presidencia'),
('FHI4321', 2024,2,1,'presidencia'),
('FHI4321', 2024,3,1,'presidencia'),
('BME8765', 2024,1,2,'vicepresidencia'),
('BME8765', 2024,2,2,'vicepresidencia'),
('BME8765', 2024,3,2,'vicepresidencia'),
('BMC1234', 2024,4,1,'presidencia'),
('BMC1234', 2024,5,1,'presidencia'),
('BMC1234', 2024,6,1,'presidencia'),
('ACJ5678',2024, 4,2,'vicepresidencia'),
('ACJ5678',2024, 5,2,'vicepresidencia'),
('ACJ5678',2024, 6,2,'vicepresidencia'),
('CMM2345',2024, 7,1,'presidencia'),
('CMM2345',2024, 8,1,'presidencia'),
('CMM2345',2024, 9,1,'presidencia'),
('SFU6789',2024, 7,2,'vicepresidencia'),
('SFU6789',2024, 8,2,'vicepresidencia'),
('SFU6789',2024, 9,2,'vicepresidencia'),
('MBE3456',2024, 10,1,'presidencia'),
('MBE3456',2024, 11,1,'presidencia'),
('MBE3456',2024, 12,1,'presidencia'),
('JKL9877',2024, 10,2,'vicepresidencia'),
('JKL9877',2024, 11,2,'vicepresidencia'),
('JKL9877',2024, 12,2,'vicepresidencia');

INSERT INTO VOTANTE (CC_persona, id_eleccion) VALUES
('BCA3564', 1),
  ('KLM4578', 1),
  ('XYZ1234', 1),
  ('PQR9845', 1),
  ('DEF3456', 1),
  ('LMN4567', 1),
  ('GHI6789', 1),
  ('UVW2345', 1),
  ('JKL9876', 1),
  ('MNO1235', 1),
  ('RST6543', 1),
  ('TUV4321', 1),
  ('QWE6781', 1),
  ('ZXC3219', 1),
  ('ASD9870', 1),
  ('FGH3452', 1),
  ('BNM7612', 1),
  ('YUI5623', 1),
  ('HJK7634', 1),
  ('CVB8321', 1),
  ('QAZ9631', 1),
  ('WSX8520', 1),
  ('EDC7418', 1),
  ('RFV6309', 1),
  ('TGB5297', 1),
  ('YHN4186', 1),
  ('UJM3074', 1),
  ('IKL2963', 1),
  ('OLP1652', 1),
  ('XCV0741', 1),
  ('MLK5823', 1),
  ('ZXC4712', 1),
  ('BNM3601', 1),
  ('POI2490', 1),
  ('LKJ1388', 1),
  ('BMC1234', 1),
  ('ACJ5678', 1),
  ('FHI4321', 1),
  ('BME8765', 1),
  ('CMM2345', 1),
  ('SFU6789', 1),
  ('MBE3456', 1),
  ('JKL9877', 1);

INSERT INTO MIEMBRO_MESA(CC_persona, organismo) VALUES
('QWE6781','Ministerio del Interior'),
('ZXC3219','Ministerio de Defensa Nacional'),
('ASD9870','Ministerio de Salud Pública'),
('XCV0741','Ministerio de Trabajo y Seguridad Social'),
('FGH3452','Ministerio del Interior'),
('BNM7612','Asamblea General'),
('YUI5623','Asamblea General'),
('HJK7634', 'Asamblea General'),
('CVB8321','Asamblea General'),
('QAZ9631','Ministerio de Educación y Cultura'),
('WSX8520','Ministerio de Salud Pública'),
('EDC7418','Ministerio de Defensa Nacional');

INSERT INTO USUARIO (contrasenia, CC_miembro_mesa) VALUES
('fG7#Lp9TqX2!', 'QWE6781'),
  ('Km9&TrE5bQ1$', 'ZXC3219'),
  ('hN4*AsD8pL0?', 'ASD9870'),
  ('Yt6@UvR3zX7%', 'FGH3452'),
  ('Po0#WeR5xC2&', 'BNM7612'),
  ('Qz8*JkL4mN1!', 'YUI5623'),
  ('Rt7&YvG2bN5$', 'HJK7634'),
  ('Mn3#BcV9kL6@', 'CVB8321'),
  ('Ui4*OpE7rT8?', 'QAZ9631'),
  ('Xy5$ZaQ2wS3%', 'WSX8520'),
  ('Df9&GhJ1kL7!', 'EDC7418'),
  ('Gk4$PmF8#Qw2', 'XCV0741');

INSERT INTO PRESIDENTE(CC_miembro_mesa) VALUES
('QWE6781'),
('ZXC3219'),
('ASD9870'),
('XCV0741');

INSERT INTO SECRETARIO(CC_miembro_mesa) VALUES
('FGH3452'),
('BNM7612'),
('YUI5623'),
('HJK7634');

INSERT INTO VOCAL(CC_miembro_mesa) VALUES
('CVB8321'),
('QAZ9631'),
('WSX8520'),
('EDC7418');

INSERT INTO MESA(numero_circuito, id_eleccion, CC_presidente, CC_secretario, CC_vocal) VALUES
(1,1,'QWE6781','FGH3452','CVB8321'),
(2,1,'ZXC3219','BNM7612','QAZ9631'),
(3,1,'ASD9870','YUI5623','WSX8520'),
(4,1,'XCV0741','HJK7634','EDC7418');

