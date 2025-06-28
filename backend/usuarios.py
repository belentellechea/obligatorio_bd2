from flask import jsonify, request 
from db import get_db_connection
from mysql.connector import Error 
import json 

def usuariosRoutes(app): 
    
    @app.route("/loginAdmin", methods=['POST'])
    def loginAdministrador(): 
        try: 
            data = request.get_json()
            contrasenia = data.get('contrasenia') 
            cc_miembro_mesa = data.get('CC_miembro_mesa')
            
            if not cc_miembro_mesa or not contrasenia:
                return jsonify({'error':'Faltan credenciales'}),400
        
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute("""
                SELECT p.CC, p.CI, p.nombre, p.apellido, p.fecha_nacimiento
                FROM USUARIO u
                JOIN PERSONA p ON u.CC_miembro_mesa = p.CC
                WHERE u.CC_miembro_mesa = %s AND u.contrasenia = %s
            """, (cc_miembro_mesa, contrasenia))
            usuario = cursor.fetchone()
          
            if usuario:
                return jsonify(usuario), 200, {'Content-Type': 'application/json; charset=utf-8'}
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
            cc_persona = data.get('CC_persona')
            
            if not cc_persona:
                return jsonify({'error':'Faltan credenciales'}),400
        
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute('SELECT * FROM VOTANTE WHERE CC_persona=%s', (cc_persona,))
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
