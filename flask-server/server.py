from flask import Flask, jsonify, request
# import folium
# from folium.plugins import MarketCluster
# import pandas as pd

app = Flask(__name__)

# Google maps API


@app.route("/api/leaflet", methods=['GET', 'POST'])
def leaflet():
    data = request
    print(data)


if __name__ == "__main__":
    app.run(debug=True)
