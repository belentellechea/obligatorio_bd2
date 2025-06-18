import mysql.connector
from mysql.connector import Error

def get_db_connection(): 
    try: 
        db = mysql.connector.connect(
            host='mysql.reto-ucu.net',
            port='50006',
            user='ic_g2_admin',
            password='Bd2025!',
            database='IC_Grupo2'
        )
        return db
    except Error as e: 
        print(f"Error connecting to MySQL: {e}")
        return None
