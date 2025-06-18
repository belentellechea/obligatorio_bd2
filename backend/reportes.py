from flask import jsonify, request 
from db import get_db_connection
from mysql.connector import Error 
import json 


def reportesRoutes(app): 
    
    @app.route("/reportes/listapartido/pais", methods=['GET'])
    def getReportePaisListaPartido(): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM resultados_pais_lista_partido WHERE id_eleccion=1')
            resultados_pais = cursor.fetchone()
            
            return jsonify({"resultados_pais": resultados_pais}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
    
    @app.route("/reportes/partido/pais", methods=['GET'])
    def getReportePaisPartido(): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM resultados_pais_partido WHERE id_eleccion=1')
            resultados_pais = cursor.fetchone()
            
            return jsonify({"resultados_pais": resultados_pais}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
    
    
    
    @app.route("/reportes/listapartido/departamento/<nombre>", methods=['GET'])
    def getReporteDptoListaParido(nombre): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM resultados_departamento_lista_partido WHERE id_eleccion=1 AND departamento=%s',(nombre,))
            resultados_departamento = cursor.fetchone()
            
            if not resultados_departamento:
                return jsonify({"error":"Departamento no encontrado"}), 404
            
            return jsonify({"resultados_departamento": resultados_departamento}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()  
                
    @app.route("/reportes/partido/departamento/<nombre>", methods=['GET'])
    def getReporteDptoParido(nombre): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM resultados_departamento_partido WHERE id_eleccion=1 AND departamento=%s',(nombre,))
            resultados_departamento = cursor.fetchone()
            
            if not resultados_departamento:
                return jsonify({"error":"Departamento no encontrado"}), 404
            
            return jsonify({"resultados_departamento": resultados_departamento}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
                
                
    
    @app.route("/reportes/listapartido/circuito/<id>", methods=['GET'])
    def getReporteCircuitoListaPartido(id): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM resultados_circuito_lista_partido WHERE id_eleccion=1 AND circuito=%s',(id))
            resultados_circuito = cursor.fetchone()
            
            if not resultados_circuito:
                return jsonify({"error":"Circuito no encontrado"}), 404
            
            return jsonify({"resultados_circuitos": resultados_circuito}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
                
    @app.route("/reportes/listapartido/circuito/<id>", methods=['GET'])
    def getReporteCircuitoPartido(id): 
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM resultados_circuito_partido WHERE id_eleccion=1 AND circuito=%s',(id))
            resultados_circuito = cursor.fetchone()
            
            if not resultados_circuito:
                return jsonify({"error":"Circuito no encontrado"}), 404
            
            return jsonify({"resultados_circuitos": resultados_circuito}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
