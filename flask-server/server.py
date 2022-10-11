from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
# import folium
# from folium.plugins import MarketCluster
# import pandas as pd

app = Flask(__name__)
CORS(app, support_credentials=True)

# Google maps API


@app.route("/api/leaflet", methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def leaflet():
    data = request.get_json()
    location = data['location']
    print(location)
    return jsonify({'result': 'Success!'})


@app.route('/api/test')
def test():
    return {"test": "test"}


if __name__ == "__main__":
    app.run(debug=True)
