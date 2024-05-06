from pytrends.request import TrendReq
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/process_data', methods=['POST'])
def process_data():
    data = request.json['data']
    # Procesar los datos y obtener resultados
    # Crear una instancia de TrendReq para hacer solicitudes a la API de Google Trends
    pytrends = TrendReq()

    # Especificar las palabras clave que deseas investigar
    keywords = ["{data}"]

    # Configurar los parámetros de búsqueda (opcional)
    pytrends.build_payload(keywords, timeframe='today 12-m', geo='US')  # Ejemplo: últimos 12 meses en EE.UU.

    # Obtener datos de interés
    interest_over_time_df = pytrends.interest_over_time()  # Datos de tendencia a lo largo del tiempo
    #interest_by_region_df = pytrends.interest_by_region()  # Datos de interés por región

    # Convertir los DataFrames a formato JSON serializable
    interest_over_time_json = interest_over_time_df.to_dict(orient='records')
    #interest_by_region_json = interest_by_region_df.to_dict(orient='records')
    
    custom_data ={
        'tendencia':[]
    }
    
    """for index, row in interest_by_region_df.iterrows():
        custom_data['region'].append({
            'region':index,
            'valor':row
        })"""
    
    for index, row in interest_over_time_df.iterrows():
        custom_data['tendencia'].append({
            'fecha':str(index),
            'valor':row[0]
        })
    print(custom_data)    
    
    # Mostrar los datos obtenidos
    #print("Datos de tendencia a lo largo del tiempo:")
    #print(interest_over_time_df)

    #print("\nDatos de interés por región:")
    #print(interest_by_region_df)

    return jsonify({'Datos de tendencia a lo largo del tiempo':custom_data}) 
if __name__ == '__main__':
    app.run(debug=True)