from flask import jsonify, request 
from db import get_db_connection
from mysql.connector import Error 
import json 

def eleccionesRoutes(app):
    
    @app.route("/eleccion", methods=['POST'])
    def getEleccion(): 
        data = request.get_json()
        tipo = data["tipo"]
        fecha = data["fecha"]
        
        try:
            db = get_db_connection()
            if db is None:
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            
            if tipo.lower() == "presidencial":
                tabla_tipo = "ELECCION_PRESIDENCIAL"
            elif tipo.lower() == "municipal":
                tabla_tipo = "ELECCION_MUNICIPAL"
            elif tipo.lower() == "plebiscito":
                tabla_tipo = "REFERENDUM_PLEBISCITO"
            elif tipo.lower() == "ballotage":
                tabla_tipo = "BALLOTAGE"
            else:
                return jsonify({"error": "Tipo de elección inválido"}), 400
            
            cursor.execute(f"""
                           SELECT e.ID 
                           FROM ELECCION e 
                           JOIN {tabla_tipo} t ON e.ID = t.id_eleccion 
                           WHERE DATE(e.fecha_hora_inicio) = %s""", (fecha,))
            id=cursor.fetchone()
            return jsonify(id)
            
        except Error as error: 
            return jsonify({"error":str(error)}),500
        
        finally:
            if cursor:
                cursor.close()
            if db:
                db.close()