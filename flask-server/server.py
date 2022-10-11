from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import requests
from dotenv import load_dotenv
load_dotenv()
import os
API_KEY = os.getenv("API_KEY")

app = Flask(__name__)
CORS(app, support_credentials=True)



@app.route("/api/leaflet", methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def leaflet():
    data = request.get_json()
    location = data['location']
    response = requests.get(f'http://api.positionstack.com/v1/forward?access_key={API_KEY}&query={location}')
    response = response.json()
    latitude = response['data'][0]['latitude']
    longitude = response['data'][0]['longitude']
    coordinates = [latitude, longitude]
    print(coordinates)
    return jsonify({'coordinates': coordinates})


@app.route('/api/test')
def test():
    return {"test": "test"}


if __name__ == "__main__":
    app.run(debug=True)
