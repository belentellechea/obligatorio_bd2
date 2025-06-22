from flask import jsonify, request 
from db import get_db_connection
from mysql.connector import Error 

def circuitosRoutes(app): 
    
    @app.route("/circuitos", methods=['POST'])
    def getCircuitos(): 
        data = request.get_json()
        id_eleccion = data.get("id_eleccion")
        
        if not id_eleccion:
            return jsonify({"error":"id_eleccion vacio"}),400
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute("""
                           SELECT c.* 
                           FROM CIRCUITO c
                           JOIN CIRCUITO_ELECCION ce ON c.numero = ce.numero_circuito
                           WHERE ce.id_eleccion = %s""", (id_eleccion,))
            circuitos = cursor.fetchall()
            
            return jsonify({"circuitos": circuitos}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
                
