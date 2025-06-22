from flask import jsonify, request 
from db import get_db_connection
from mysql.connector import Error 
import json 
from datetime import datetime

def votosRoutes(app): 
    
    @app.route("/voto", methods=['POST'])
    def postVoto(): 
    
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            data = request.get_json()
            numero_circuito_vota = data.get('numero_circuito_vota')
            tipo = data.get('tipo')
            observado = data.get('observado', False)
            id_papeleta = data.get('id_papeleta')
            cc_votante = data.get('cc_votante')
            id_eleccion = data.get('id_eleccion')
            id_sobre = data.get('id_sobre')
            
            if not all([numero_circuito_vota, tipo, cc_votante, id_eleccion]):
                return jsonify({"error": "Faltan datos"}), 400

            
            if tipo not in ['valido_en_blanco', 'anulado', 'valido_simple']:
                return jsonify({'error': 'Tipo de voto inválido'}), 400
    
            cursor = db.cursor(dictionary=True)
            fecha_hora_actual = datetime.now()
            cursor.execute('INSERT INTO VOTO (numero_circuito, fecha_hora, tipo, observado) VALUES (%s,%s,%s,%s)',(numero_circuito_vota,fecha_hora_actual,tipo,observado))
            id_voto = cursor.lastrowid
            
            if tipo == 'valido_simple':
                if not id_papeleta:
                    return jsonify({'error':'id_papeleta inválido'})
                cursor.execute('INSERT INTO VOTO_PAPELETA (id_voto, id_papeleta) VALUES (%s,%s)',(id_voto,id_papeleta))
            
            cursor.execute('INSERT INTO VOTANTE_VOTA (ID,CC_votante,id_eleccion,numero_circuito) VALUES (%s,%s,%s,%s)',(id_sobre,cc_votante,id_eleccion,numero_circuito_vota))
            db.commit()
            return jsonify({'message':'Voto registrado exitosamente', 'id_voto': id_voto}), 201
            
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()