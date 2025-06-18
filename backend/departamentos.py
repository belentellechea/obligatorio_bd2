from flask import jsonify, request 
from db import get_db_connection
from mysql.connector import Error 
import json 

def departamentosRoutes(app): 
    
    @app.route("/departamentos", methods=['GET'])
    def getDepartamentos(): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM DEPARTAMENTO')
            departamentos = cursor.fetchall()
            
            return jsonify({"departamentos": departamentos}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
            
