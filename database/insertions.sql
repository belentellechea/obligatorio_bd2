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
('DEF3456','39817264','Carlos','Pérez','1988-12-30'), -- Ya votó
('LMN4567','42718345','Lucía','Rodríguez','1999-07-05'), -- Ya votó
('GHI6789','41729384','Pedro','Gómez','1957-03-18'),
('UVW2345','43819273','Sofía','Díaz','1994-11-02'),
('JKL9876','42638471','Diego','Sánchez','1996-08-26'),
('MNO1235','41938476','Valentina','Ramírez','1993-05-12'),
('RST6543','43192847','Nicolás','Torres','1991-10-17'),
('TUV4321','40729183','Camila','Ruiz','1990-09-09'),
('QWE6781','43628471','Mateo','Silva','2001-04-20'),
('ZXC3219','41473829','Florencia','Méndez','1989-07-14'),
('ASD9870','42938472','Tomás','Cabrera','1998-02-27'), -- Ya votó
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
('XCV0741','40817294','Gonzalo','Iglesias','2000-02-25'), -- Ya votó
('MLK5823','40192847','Valentina','Correa','1997-01-19'),
('ZXC4712','42381746','Agustín','Ramos','1975-04-22'), -- Ya votó
('BNM3601','43629184','Isabella','Silva','1963-09-30'),
('POI2490','41482739','Tomás','Cabrera','1990-12-15'), -- Ya votó
('LKJ1388','40739481','Camila','Ferrer','1952-08-08'),
('BMC1234', '47432109', 'Yamandú', 'Orsi',   '1960-02-07'),
('ACJ5678', '37451268', 'Carolina', 'Cosse', '1962-10-25'), -- Ya votó
('FHI4321', '40123456', 'Álvaro', 'Delgado', '1969-04-16'), -- Ya votó
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


INSERT INTO PERSONA(CC, CI, nombre, apellido, fecha_nacimiento) VALUES
  ('DEF00001','70000001','Sofía','Silva','1979-05-18'),
  ('DEF00002','70000002','Martín','Rodríguez','1970-07-25'),
  ('DEF00003','70000003','Lucía','González','1961-04-12'),
  ('DEF00004','70000004','Santiago','Fernández','1975-09-03'),
  ('DEF00005','70000005','Valentina','Pérez','1968-02-28'),
  ('DEF00006','70000006','Mateo','Martínez','1972-11-07'),
  ('DEF00007','70000007','Camila','López','1965-06-20'),
  ('DEF00008','70000008','Nicolás','Díaz','1978-03-01'),
  ('DEF00009','70000009','Florencia','Sánchez','1963-08-14'),
  ('GHI00010','71000010','Tomás','Ramírez','1971-01-29'),
  ('GHI00011','71000011','Julieta','Torres','1969-10-05'),
  ('GHI00012','71000012','Agustín','Ruiz','1977-04-22'),
  ('GHI00013','71000013','Isabella','Gómez','1966-12-19'),
  ('GHI00014','71000014','Lucas','Méndez','1974-07-08'),
  ('GHI00015','71000015','Catalina','Cabrera','1962-03-03'),
  ('GHI00016','71000016','Andrés','Morales','1970-09-16'),
  ('GHI00017','71000017','Mía','Vega','1976-05-27'),
  ('GHI00018','71000018','Gonzalo','Ortega','1964-11-10'),
  ('JKL00019','72000019','Renata','Acosta','1973-02-04'),
  ('JKL00020','72000020','Bruno','Castro','1960-08-01'),
  ('JKL00021','72000021','Emilia','Suárez','1979-01-15'),
  ('JKL00022','72000022','Facundo','Pereira','1970-06-28'),
  ('JKL00023','72000023','Agustina','Lozano','1961-03-09'),
  ('JKL00024','72000024','Paula','Navarro','1975-08-21'),
  ('JKL00025','72000025','Martina','Molina','1968-01-02'),
  ('JKL00026','72000026','Santiago','Bermúdez','1972-10-17'),
  ('JKL00027','72000027','Victoria','Sosa','1965-05-30'),
  ('MNO00028','73000028','Benjamín','Rivas','1978-02-11'),
  ('MNO00029','73000029','Olivia','Leal','1963-07-24'),
  ('MNO00030','73000030','Joaquín','Iglesias','1971-12-08'),
  ('MNO00031','73000031','Sofía','Correa','1969-09-13'),
  ('MNO00032','73000032','Martín','Ramos','1977-03-06'),
  ('MNO00033','73000033','Lucía','Herrera','1966-11-01'),
  ('MNO00034','73000034','Santiago','Núñez','1974-06-16'),
  ('MNO00035','73000035','Valentina','Vázquez','1962-02-20'),
  ('MNO00036','73000036','Mateo','Rivero','1970-08-05'),
  ('PQR00037','74000037','Camila','Benítez','1976-04-18'),
  ('PQR00038','74000038','Nicolás','Cardozo','1964-10-29'),
  ('PQR00039','74000039','Florencia','Costa','1973-01-10'),
  ('PQR00040','74000040','Tomás','Olivera','1960-07-23'),
  ('PQR00041','74000041','Julieta','Silva','1979-04-07'),
  ('PQR00042','74000042','Agustín','Rodríguez','1970-09-19'),
  ('PQR00043','74000043','Isabella','González','1961-06-02'),
  ('PQR00044','74000044','Lucas','Fernández','1975-11-14'),
  ('PQR00045','74000045','Catalina','Pérez','1968-04-26'),
  ('STU00046','75000046','Andrés','Martínez','1972-01-09'),
  ('STU00047','75000047','Mía','López','1965-08-22'),
  ('STU00048','75000048','Gonzalo','Díaz','1978-05-03'),
  ('STU00049','75000049','Renata','Sánchez','1963-10-16'),
  ('STU00050','75000050','Bruno','Ramírez','1971-03-31'),
  ('STU00051','75000051','Emilia','Torres','1969-12-07'),
  ('STU00052','75000052','Facundo','Ruiz','1977-06-24'),
  ('STU00053','75000053','Agustina','Gómez','1966-01-21'),
  ('STU00054','75000054','Paula','Méndez','1974-08-12'),
  ('VWX00055','76000055','Martina','Cabrera','1962-04-05'),
  ('VWX00056','76000056','Santiago','Morales','1970-10-28'),
  ('VWX00057','76000057','Victoria','Vega','1976-06-09'),
  ('VWX00058','76000058','Benjamín','Ortega','1964-12-02'),
  ('VWX00059','76000059','Olivia','Acosta','1973-03-17'),
  ('VWX00060','76000060','Joaquín','Castro','1960-09-08'),
  ('VWX00061','76000061','Sofía','Suárez','1979-02-28'),
  ('VWX00062','76000062','Martín','Pereira','1970-07-11'),
  ('VWX00063','76000063','Lucía','Lozano','1961-04-24'),
  ('YZA00064','77000064','Santiago','Navarro','1975-09-06'),
  ('YZA00065','77000065','Valentina','Molina','1968-03-19'),
  ('YZA00066','77000066','Mateo','Bermúdez','1972-12-01'),
  ('YZA00067','77000067','Camila','Sosa','1965-07-14'),
  ('YZA00068','77000068','Nicolás','Rivas','1978-04-25'),
  ('YZA00069','77000069','Florencia','Leal','1963-09-06'),
  ('YZA00070','77000070','Tomás','Iglesias','1971-02-19'),
  ('YZA00071','77000071','Julieta','Correa','1969-11-04'),
  ('YZA00072','77000072','Agustín','Ramos','1977-05-17'),
  ('BCD00073','78000073','Isabella','Herrera','1966-12-30'),
  ('BCD00074','78000074','Lucas','Núñez','1974-07-29'),
  ('BCD00075','78000075','Catalina','Vázquez','1962-03-13'),
  ('BCD00076','78000076','Andrés','Rivero','1970-09-01'),
  ('BCD00077','78000077','Mía','Benítez','1976-05-12'),
  ('BCD00078','78000078','Gonzalo','Cardozo','1964-11-23'),
  ('BCD00079','78000079','Renata','Costa','1973-02-06'),
  ('BCD00080','78000080','Bruno','Olivera','1960-08-18'),
  ('BCD00081','78000081','Emilia','Silva','1979-01-01'),
  ('EFG00082','79000082','Facundo','Rodríguez','1970-06-05'),
  ('EFG00083','79000083','Agustina','González','1961-03-28'),
  ('EFG00084','79000084','Paula','Fernández','1975-08-10'),
  ('EFG00085','79000085','Martina','Pérez','1968-02-07'),
  ('EFG00086','79000086','Santiago','Martínez','1972-11-20'),
  ('EFG00087','79000087','Victoria','López','1965-06-03'),
  ('EFG00088','79000088','Benjamín','Díaz','1978-03-14'),
  ('EFG00089','79000089','Olivia','Sánchez','1963-08-27'),
  ('EFG00090','79000090','Joaquín','Ramírez','1971-01-08'),
  ('HIJ00091','80000091','Sofía','Torres','1969-10-19'),
  ('HIJ00092','80000092','Martín','Ruiz','1977-04-02'),
  ('HIJ00093','80000093','Lucía','Gómez','1966-12-13'),
  ('HIJ00094','80000094','Santiago','Méndez','1974-07-20'),
  ('HIJ00095','80000095','Valentina','Cabrera','1962-03-26'),
  ('HIJ00096','80000096','Mateo','Morales','1970-09-04'),
  ('HIJ00097','80000097','Camila','Vega','1976-05-20'),
  ('HIJ00098','80000098','Nicolás','Ortega','1964-11-05'),
  ('HIJ00099','80000099','Florencia','Acosta','1973-02-18'),
  ('KLM00100','81000100','Tomás','Castro','1960-08-09'),
  ('KLM00101','81000101','Julieta','Suárez','1979-01-23'),
  ('KLM00102','81000102','Agustín','Pereira','1970-07-01'),
  ('KLM00103','81000103','Isabella','Lozano','1961-04-14'),
  ('KLM00104','81000104','Lucas','Navarro','1975-09-17'),
  ('KLM00105','81000105','Catalina','Molina','1968-03-02'),
  ('KLM00106','81000106','Andrés','Bermúdez','1972-12-13'),
  ('KLM00107','81000107','Mía','Sosa','1965-07-28'),
  ('KLM00108','81000108','Gonzalo','Rivas','1978-04-07');

INSERT INTO CANDIDATO (cc_persona, id_partido_politico, anio) VALUES
  ('DEF00001',1,2024),
  ('DEF00002',1,2024),
  ('DEF00003',1,2024),
  ('DEF00004',1,2024),
  ('DEF00005',1,2024),
  ('DEF00006',1,2024),
  ('DEF00007',1,2024),
  ('DEF00008',1,2024),
  ('DEF00009',1,2024),
  ('GHI00010',2,2024),
  ('GHI00011',2,2024),
  ('GHI00012',2,2024),
  ('GHI00013',2,2024),
  ('GHI00014',2,2024),
  ('GHI00015',2,2024),
  ('GHI00016',2,2024),
  ('GHI00017',2,2024),
  ('GHI00018',2,2024),
  ('JKL00019',3,2024),
  ('JKL00020',3,2024),
  ('JKL00021',3,2024),
  ('JKL00022',3,2024),
  ('JKL00023',3,2024),
  ('JKL00024',3,2024),
  ('JKL00025',3,2024),
  ('JKL00026',3,2024),
  ('JKL00027',3,2024),
  ('MNO00028',4,2024),
  ('MNO00029',4,2024),
  ('MNO00030',4,2024),
  ('MNO00031',4,2024),
  ('MNO00032',4,2024),
  ('MNO00033',4,2024),
  ('MNO00034',4,2024),
  ('MNO00035',4,2024),
  ('MNO00036',4,2024),
  ('PQR00037',1,2024),
  ('PQR00038',1,2024),
  ('PQR00039',1,2024),
  ('PQR00040',1,2024),
  ('PQR00041',1,2024),
  ('PQR00042',1,2024),
  ('PQR00043',1,2024),
  ('PQR00044',1,2024),
  ('PQR00045',1,2024),
  ('STU00046',2,2024),
  ('STU00047',2,2024),
  ('STU00048',2,2024),
  ('STU00049',2,2024),
  ('STU00050',2,2024),
  ('STU00051',2,2024),
  ('STU00052',2,2024),
  ('STU00053',2,2024),
  ('STU00054',2,2024),
  ('VWX00055',3,2024),
  ('VWX00056',3,2024),
  ('VWX00057',3,2024),
  ('VWX00058',3,2024),
  ('VWX00059',3,2024),
  ('VWX00060',3,2024),
  ('VWX00061',3,2024),
  ('VWX00062',3,2024),
  ('VWX00063',3,2024),
  ('YZA00064',4,2024),
  ('YZA00065',4,2024),
  ('YZA00066',4,2024),
  ('YZA00067',4,2024),
  ('YZA00068',4,2024),
  ('YZA00069',4,2024),
  ('YZA00070',4,2024),
  ('YZA00071',4,2024),
  ('YZA00072',4,2024),
  ('BCD00073',1,2024),
  ('BCD00074',1,2024),
  ('BCD00075',1,2024),
  ('BCD00076',1,2024),
  ('BCD00077',1,2024),
  ('BCD00078',1,2024),
  ('BCD00079',1,2024),
  ('BCD00080',1,2024),
  ('BCD00081',1,2024),
  ('EFG00082',2,2024),
  ('EFG00083',2,2024),
  ('EFG00084',2,2024),
  ('EFG00085',2,2024),
  ('EFG00086',2,2024),
  ('EFG00087',2,2024),
  ('EFG00088',2,2024),
  ('EFG00089',2,2024),
  ('EFG00090',2,2024),
  ('HIJ00091',3,2024),
  ('HIJ00092',3,2024),
  ('HIJ00093',3,2024),
  ('HIJ00094',3,2024),
  ('HIJ00095',3,2024),
  ('HIJ00096',3,2024),
  ('HIJ00097',3,2024),
  ('HIJ00098',3,2024),
  ('HIJ00099',3,2024),
  ('KLM00100',4,2024),
  ('KLM00101',4,2024),
  ('KLM00102',4,2024),
  ('KLM00103',4,2024),
  ('KLM00104',4,2024),
  ('KLM00105',4,2024),
  ('KLM00106',4,2024),
  ('KLM00107',4,2024),
  ('KLM00108',4,2024);


INSERT INTO CANDIDATO_LISTA(cc_candidato, anio, id_lista, orden, organo) VALUES
  ('DEF00001',2024,1,1,'camara_senadores'),
  ('DEF00002',2024,1,2,'camara_senadores'),
  ('DEF00003',2024,1,3,'camara_senadores'),
  ('DEF00004',2024,1,1,'camara_representantes'),
  ('DEF00005',2024,1,2,'camara_representantes'),
  ('DEF00006',2024,1,3,'camara_representantes'),
  ('DEF00007',2024,1,1,'junta_electoral'),
  ('DEF00008',2024,1,2,'junta_electoral'),
  ('DEF00009',2024,1,3,'junta_electoral'),
  ('GHI00010',2024,2,1,'camara_senadores'),
  ('GHI00011',2024,2,2,'camara_senadores'),
  ('GHI00012',2024,2,3,'camara_senadores'),
  ('GHI00013',2024,2,1,'camara_representantes'),
  ('GHI00014',2024,2,2,'camara_representantes'),
  ('GHI00015',2024,2,3,'camara_representantes'),
  ('GHI00016',2024,2,1,'junta_electoral'),
  ('GHI00017',2024,2,2,'junta_electoral'),
  ('GHI00018',2024,2,3,'junta_electoral'),
  ('JKL00019',2024,3,1,'camara_senadores'),
  ('JKL00020',2024,3,2,'camara_senadores'),
  ('JKL00021',2024,3,3,'camara_senadores'),
  ('JKL00022',2024,3,1,'camara_representantes'),
  ('JKL00023',2024,3,2,'camara_representantes'),
  ('JKL00024',2024,3,3,'camara_representantes'),
  ('JKL00025',2024,3,1,'junta_electoral'),
  ('JKL00026',2024,3,2,'junta_electoral'),
  ('JKL00027',2024,3,3,'junta_electoral'),
  ('MNO00028',2024,4,1,'camara_senadores'),
  ('MNO00029',2024,4,2,'camara_senadores'),
  ('MNO00030',2024,4,3,'camara_senadores'),
  ('MNO00031',2024,4,1,'camara_representantes'),
  ('MNO00032',2024,4,2,'camara_representantes'),
  ('MNO00033',2024,4,3,'camara_representantes'),
  ('MNO00034',2024,4,1,'junta_electoral'),
  ('MNO00035',2024,4,2,'junta_electoral'),
  ('MNO00036',2024,4,3,'junta_electoral'),
  ('PQR00037',2024,5,1,'camara_senadores'),
  ('PQR00038',2024,5,2,'camara_senadores'),
  ('PQR00039',2024,5,3,'camara_senadores'),
  ('PQR00040',2024,5,1,'camara_representantes'),
  ('PQR00041',2024,5,2,'camara_representantes'),
  ('PQR00042',2024,5,3,'camara_representantes'),
  ('PQR00043',2024,5,1,'junta_electoral'),
  ('PQR00044',2024,5,2,'junta_electoral'),
  ('PQR00045',2024,5,3,'junta_electoral'),
  ('STU00046',2024,6,1,'camara_senadores'),
  ('STU00047',2024,6,2,'camara_senadores'),
  ('STU00048',2024,6,3,'camara_senadores'),
  ('STU00049',2024,6,1,'camara_representantes'),
  ('STU00050',2024,6,2,'camara_representantes'),
  ('STU00051',2024,6,3,'camara_representantes'),
  ('STU00052',2024,6,1,'junta_electoral'),
  ('STU00053',2024,6,2,'junta_electoral'),
  ('STU00054',2024,6,3,'junta_electoral'),
  ('VWX00055',2024,7,1,'camara_senadores'),
  ('VWX00056',2024,7,2,'camara_senadores'),
  ('VWX00057',2024,7,3,'camara_senadores'),
  ('VWX00058',2024,7,1,'camara_representantes'),
  ('VWX00059',2024,7,2,'camara_representantes'),
  ('VWX00060',2024,7,3,'camara_representantes'),
  ('VWX00061',2024,7,1,'junta_electoral'),
  ('VWX00062',2024,7,2,'junta_electoral'),
  ('VWX00063',2024,7,3,'junta_electoral'),
  ('YZA00064',2024,8,1,'camara_senadores'),
  ('YZA00065',2024,8,2,'camara_senadores'),
  ('YZA00066',2024,8,3,'camara_senadores'),
  ('YZA00067',2024,8,1,'camara_representantes'),
  ('YZA00068',2024,8,2,'camara_representantes'),
  ('YZA00069',2024,8,3,'camara_representantes'),
  ('YZA00070',2024,8,1,'junta_electoral'),
  ('YZA00071',2024,8,2,'junta_electoral'),
  ('YZA00072',2024,8,3,'junta_electoral'),
  ('BCD00073',2024,9,1,'camara_senadores'),
  ('BCD00074',2024,9,2,'camara_senadores'),
  ('BCD00075',2024,9,3,'camara_senadores'),
  ('BCD00076',2024,9,1,'camara_representantes'),
  ('BCD00077',2024,9,2,'camara_representantes'),
  ('BCD00078',2024,9,3,'camara_representantes'),
  ('BCD00079',2024,9,1,'junta_electoral'),
  ('BCD00080',2024,9,2,'junta_electoral'),
  ('BCD00081',2024,9,3,'junta_electoral'),
  ('EFG00082',2024,10,1,'camara_senadores'),
  ('EFG00083',2024,10,2,'camara_senadores'),
  ('EFG00084',2024,10,3,'camara_senadores'),
  ('EFG00085',2024,10,1,'camara_representantes'),
  ('EFG00086',2024,10,2,'camara_representantes'),
  ('EFG00087',2024,10,3,'camara_representantes'),
  ('EFG00088',2024,10,1,'junta_electoral'),
  ('EFG00089',2024,10,2,'junta_electoral'),
  ('EFG00090',2024,10,3,'junta_electoral'),
  ('HIJ00091',2024,11,1,'camara_senadores'),
  ('HIJ00092',2024,11,2,'camara_senadores'),
  ('HIJ00093',2024,11,3,'camara_senadores'),
  ('HIJ00094',2024,11,1,'camara_representantes'),
  ('HIJ00095',2024,11,2,'camara_representantes'),
  ('HIJ00096',2024,11,3,'camara_representantes'),
  ('HIJ00097',2024,11,1,'junta_electoral'),
  ('HIJ00098',2024,11,2,'junta_electoral'),
  ('HIJ00099',2024,11,3,'junta_electoral'),
  ('KLM00100',2024,12,1,'camara_senadores'),
  ('KLM00101',2024,12,2,'camara_senadores'),
  ('KLM00102',2024,12,3,'camara_senadores'),
  ('KLM00103',2024,12,1,'camara_representantes'),
  ('KLM00104',2024,12,2,'camara_representantes'),
  ('KLM00105',2024,12,3,'camara_representantes'),
  ('KLM00106',2024,12,1,'junta_electoral'),
  ('KLM00107',2024,12,2,'junta_electoral'),
  ('KLM00108',2024,12,3,'junta_electoral');
