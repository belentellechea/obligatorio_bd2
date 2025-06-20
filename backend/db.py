import mysql.connector
from mysql.connector import Error
import os 

def get_db_connection(): 
    try: 
        db = mysql.connector.connect(
            host=os.getenv('DB_HOST', 'mysql.reto-ucu.net'),
            port=os.getenv('DB_PORT', '50006'),
            user=os.getenv('DB_USER', 'ic_g2_admin'),
            password=os.getenv('DB_PASSWORD', 'Bd2025!'),
            database=os.getenv('DB_NAME', 'IC_Grupo2')
        )
        return db
    except Error as e: 
        print(f"Error connecting to MySQL: {e}")
        return None
