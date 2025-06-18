from flask import jsonify, request 
from db import get_db_connection
from mysql.connector import Error 
import json 

def circuitosRoutes(app): 
    
    @app.route("/circuitos", methods=['GET'])
    def getCircuitos(): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM CIRCUITO')
            circuitos = cursor.fetchall()
            
            return jsonify({"circuitos": circuitos}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
                
