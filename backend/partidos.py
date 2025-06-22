from flask import jsonify, request 
from db import get_db_connection
from mysql.connector import Error 
import json 

def partidosRoutes(app): 
    
    @app.route("/partidos", methods=['POST'])
    def getPartidos(): 
        data = request.get_json()
        id_eleccion = data.get("id_eleccion")
        
        if not id_eleccion:
            return jsonify({"error": "id_eleccion es requerido"}), 400
        
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute("""
                SELECT DISTINCT pp.ID, pp.nombre, pp.direccion_sede
                FROM PARTIDO_POLITICO pp
                JOIN LISTA l ON pp.nombre = l.partido
                JOIN LISTA_NACIONAL ln ON l.id_papeleta = ln.id_lista
                WHERE ln.id_eleccion_presidencial = %s
            """, (id_eleccion,))
            partidos = cursor.fetchall()
            
            if not partidos: 
                return jsonify({"error":"No se encontraron partidos para la eleccion"})
          
            return jsonify({"partidos": partidos}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
                
