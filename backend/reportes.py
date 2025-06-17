from flask import jsonify, request 
from main import get_db_connection
from mysql.connector import Error 
import json 


def reportesRoutes(app): 
    
    @app.route("/reportes/pais", methods=['GET'])
    def getReportePais(): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM resultados_pais_eleccion WHERE id_eleccion=1')
            resultados_pais = cursor.fetchone()
            
            return jsonify({"resultados_pais": resultados_pais}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
    
    @app.route("/reportes/departamento/<nombre>", methods=['GET'])
    def getReporteDpto(nombre): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM resultados_por_departamento WHERE id_eleccion=1 AND departamento=%s',(nombre,))
            resultados_departamento = cursor.fetchone()
            
            return jsonify({"resultados_departamento": resultados_departamento}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()  
    
    @app.route("/reportes/circuito/<id>", methods=['GET'])
    def getReporteCircuito(id): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM resultados_por_circuito WHERE id_eleccion=1 AND circuito=%s',(id))
            resultados_circuito = cursor.fetchone()
            
            return jsonify({"resultados_circuitos": resultados_circuito}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
