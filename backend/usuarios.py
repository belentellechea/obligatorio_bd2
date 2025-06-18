from flask import jsonify, request 
from db import get_db_connection
from mysql.connector import Error 
import json 

def usuariosRoutes(app): 
    
    @app.route("/loginAdmin", methods=['POST'])
    def loginAdministrador(): 
        try: 
            data = request.get_json(); 
            CC = data.get('CC')
            contrasenia = data.get('constrasenia') 
            
            if not CC or not contrasenia:
                return jsonify({'error':'Faltan credenciales'}),400
        
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM USUARIO WHERE CC_miembro_mesa = %s AND contrasenia = %s',(CC,contrasenia))
            usuario = cursor.fetchone()
            
            if usuario:
                return jsonify({'message': 'Login exitoso', 'usuario': usuario}), 200
            else:
                return jsonify({'error': 'Credenciales inválidas'}), 401
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
    
    @app.route("/login", methods=['POST'])
    def loginVotante():
        try: 
            data = request.get_json(); 
            CC = data.get('CC')
            
            if not CC:
                return jsonify({'error':'Faltan credenciales'}),400
        
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM VOTANTE WHERE CC_persona=%s',(CC))
            usuario = cursor.fetchone()
            
            if usuario:
                return jsonify({'message': 'Login exitoso', 'usuario': usuario}), 200
            else:
                return jsonify({'error': 'Credenciales inválidas'}), 401
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
