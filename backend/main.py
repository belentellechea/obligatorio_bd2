from flak import Flask
from flask_cors import CORS
import mysql.connector 
from mysql.connector import Error

app = Flask(__name__)
CORS(app, origins='http://localhost:5173')

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
        print("Error connecting to MySQL: {e}")
        return None 

if __name__ == "__main__":
    app.run(port=8080)
