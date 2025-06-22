from flask import jsonify, request 
from db import get_db_connection
from mysql.connector import Error 
import json 

def listasRoutes(app):
    
    @app.route("/listas/partido", methods=['POST'])
    def getListasPartido(): 
        data = request.get_json()
        id_partido = data.get("id_partido")
        id_eleccion = data.get("id_eleccion")
        
        if not id_partido or not id_eleccion:
            return jsonify({"error":"id_eleccion o id_partido vacío"})
        
        try: 
            db = get_db_connection()
            if db is None: 
                return jsonify({"error":"No se pudo conectar a la base de datos"}), 500
            
            cursor = db.cursor(dictionary=True)
            cursor.execute("""
                SELECT 
                    l.numero AS numero_lista,
                    p.nombre AS nombre_persona,
                    p.apellido AS apellido_persona,
                    p.CC AS cc_persona,
                    cl.organo
                FROM LISTA l
                JOIN LISTA_NACIONAL ln ON l.id_papeleta = ln.id_lista
                JOIN ELECCION_PRESIDENCIAL ep ON ln.id_eleccion_presidencial = ep.id_eleccion
                JOIN CANDIDATO_LISTA cl ON l.id_papeleta = cl.id_lista
                JOIN CANDIDATO c ON cl.cc_candidato = c.CC_persona AND cl.anio = c.anio
                JOIN PERSONA p ON c.CC_persona = p.CC
                JOIN PARTIDO_POLITICO pp ON l.partido = pp.nombre
                WHERE pp.ID = %s AND ep.id_eleccion = %s AND cl.organo IN ('presidencia', 'vicepresidencia')
                ORDER BY l.numero, cl.organo
            """, (id_partido, id_eleccion))
            filas = cursor.fetchall()
            if not filas:
                return jsonify({"error": "No se encontraron listas"}), 404

            listas_dict = {}
            for fila in filas:
                num_lista = fila["numero_lista"]
                if num_lista not in listas_dict:
                    listas_dict[num_lista] = {
                        "numero": num_lista,
                        "candidatos": []
                    }
                listas_dict[num_lista]["candidatos"].append({
                    "cc": fila["cc_persona"],
                    "nombre": fila["nombre_persona"],
                    "apellido": fila["apellido_persona"],
                    "organo": fila["organo"]
                })

            return jsonify({"listas": list(listas_dict.values())}), 200
        
        except Error as error: 
            return jsonify({"error": str(error)}), 500
        
        finally: 
            if cursor: 
                cursor.close()
            if db:
                db.close()
                
