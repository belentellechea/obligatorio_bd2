from flask import jsonify, request 
from db import get_db_connection
from mysql.connector import Error 
import json 

def votantesRoutes(app): 
    
    @app.route("/votantes", methods=['POST'])
    def getVotante():
        data = request.get_json()
        cc = data.get("cc")
        id_eleccion = data.get("id_eleccion")
        
        if not cc or not id_eleccion:
            return jsonify({"error":"Faltan datos"})
         
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM info_votante WHERE credencial=%s AND id_eleccion = %s',(cc,id_eleccion))
            votante = cursor.fetchone()
            
            if not votante:
                return jsonify({"error":"Votante no encontrado"}), 404
            
            return jsonify({"votante": votante}), 200, {'Content-Type': 'application/json; charset=utf-8'}
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()

    @app.route("/votantes/yaVoto", methods=["POST"])
    def verificarSiVoto():
        data = request.get_json()
        cc = data.get("cc")
        id_eleccion = data.get("id_eleccion")

        if not cc or not id_eleccion:
            return jsonify({"error": "Faltan datos"}), 400

        try:
            db = get_db_connection()
            if db is None:
                return jsonify({"error": "No se pudo conectar a la base de datos"}), 500

            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM VOTANTE_VOTA WHERE CC_votante = %s AND id_eleccion = %s', (cc, id_eleccion))
            ya_voto = cursor.fetchone() is not None
            return jsonify({"ya_voto": ya_voto}), 200

        except Error as error:
            return jsonify({"error": str(error)}), 500

        finally:
            if cursor:
                cursor.close()
            if db:
                db.close()
            
