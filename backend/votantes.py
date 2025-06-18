from flask import jsonify, request 
from db import get_db_connection
from mysql.connector import Error 
import json 

def votantesRoutes(app): 
    
    @app.route("/votantes/<cc>", methods=['GET'])
    def getVotante(cc): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM info_votante WHERE CC=%s',(cc,))
            votante = cursor.fetchone()
            
            if not votante:
                return jsonify({"error":"Votante no encontrado"}), 404
            
            return jsonify({"votante": votante}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
                
