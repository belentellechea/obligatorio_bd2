from flask import jsonify, request 
from main import get_db_connection
from mysql.connector import Error 
import json 

def partidosRoutes(app): 
    
    @app.route("/partidos", methods=['GET'])
    def getPartidos(): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM PARTIDO_POLITICO')
            partidos = cursor.fetchall()
          
            return jsonify({"partidos": partidos}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
                
