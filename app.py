import json

from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS

from person import Person

app = Flask(__name__)
CORS(app)

@app.route('/table', methods=['GET'])
def table():
    data = {
        "0": "Magreza",
        "18.5": "Normal",
        "24.9": "Sobrepeso",
        "99": "Obesidade"
    }
    return data

@app.route('/calculate', methods=['POST'])
def calculate():
    response = json.loads(request.data)
    person = Person(**response).get()
    return jsonify(person.__dict__)