from flask import jsonify, request 
from db import get_db_connection
from mysql.connector import Error 
import json 

def listasRoutes(app):
    
    @app.route("/listas/partido/<id_partido>", methods=['GET'])
    def getListasPartido(id_partido): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute(
                """SELECT l.numero
                FROM LISTA l
                JOIN PARTIDO_POLITICO pp ON l.partido = pp.nombre
                WHERE pp.ID = %s""",(id_partido,))
            listas = cursor.fetchall()
          
            if not listas:
                return jsonify({"error":"Listas del partido no encontradas"}), 404 
            
            return jsonify({"listas": listas}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
                
