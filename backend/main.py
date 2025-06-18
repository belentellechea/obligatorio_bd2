from flask import Flask
from flask_cors import CORS
from mysql.connector import Error
from votos import votosRoutes
from votantes import votantesRoutes
from circuitos import circuitosRoutes
from departamentos import departamentosRoutes
from listas import listasRoutes
from partidos import partidosRoutes
from reportes import reportesRoutes 
from usuarios import usuariosRoutes

app = Flask(__name__)
CORS(app, origins='http://localhost:5173')

votosRoutes(app)
votantesRoutes(app)
circuitosRoutes(app)
departamentosRoutes(app)
listasRoutes(app)
partidosRoutes(app)
reportesRoutes(app)
usuariosRoutes(app)

if __name__ == "__main__":
    app.run(port=8080)
