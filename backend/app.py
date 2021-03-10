import os
import json

from flask import Flask
from flask import request
from flask import jsonify
from flask import render_template
from flask_cors import CORS

from person import Person

app = Flask(__name__,
    template_folder=os.path.abspath('../frontend'),
    static_folder=os.path.abspath('../frontend/static'))

CORS(app)

@app.route('/', methods=['GET'])
def get():
    return render_template('index.html')

@app.route('/imc/table', methods=['GET'])
def table():
    data = {
        "0": "Magreza",
        "18.5": "Normal",
        "24.9": "Sobrepeso",
        "99": "Obesidade"
    }
    return data

@app.route('/imc/calculate', methods=['POST'])
def calculate():
    response = json.loads(request.data)
    person = Person(**response).get()
    return jsonify(person.__dict__)
