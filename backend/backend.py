from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
from sqlite3 import IntegrityError

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

def getDBConnection():
    conn = sqlite3.connect("backend/database.db")
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/products/<id>', methods=['GET'])
def getProductByName(id):
    conn = getDBConnection()
    cursor = conn.execute('SELECT * FROM products WHERE id = ?', (id,))
    product = cursor.fetchone()
    conn.close()
    if product:
        product_dict = dict(product)
        return jsonify(product_dict)
    else:
        return jsonify({'error': 'Producto no encontrado'}), 404

@app.route('/buscar-productos', methods=['GET'])
def searchProducts():
    term = request.args.get('term')
    conn = sqlite3.connect('backend/database.db')
    cursor = conn.execute('SELECT * FROM products WHERE name LIKE ?', ('%' + term + '%',))
    products = cursor.fetchall()
    conn.close()
    return jsonify(products)

@app.route('/all-products', methods=['GET'])
def getAllProducts():
    conn = getDBConnection()
    cursor = conn.execute('SELECT * FROM products')
    products = cursor.fetchall()
    conn.close()
    product_dicts = [dict(row) for row in products]
    return jsonify(product_dicts)

@app.route('/add-portfolio', methods=['POST'])
def addPortfolio():
    data = request.json
    if 'name' not in data or 'user_id' not in data:
        return jsonify({'error': 'El nombre del portfolio y la ID del usuario son requeridos'}), 400
    
    name = data['name']
    user_id = data['user_id']
    
    conn = getDBConnection()
    cursor = conn.cursor()

    try:
        cursor.execute('INSERT INTO portfolios (name, id_user) VALUES (?, ?)', (name, user_id))
        conn.commit()
        conn.close()
        return jsonify({'message': 'Portfolio agregado exitosamente'}), 201
    except IntegrityError:
        conn.rollback()
        conn.close()
        return jsonify({'error': 'El nombre del portfolio ya existe'}), 400
    
@app.route('/api/usuario/<string:usuario_id>/portfolios', methods=['GET'])
def obtener_portfolios_usuario(usuario_id):
    conn = sqlite3.connect('backend/database.db')
    cursor = conn.cursor()

    cursor.execute('''SELECT * FROM portfolios WHERE id_user = ?''', (usuario_id,))
    portfolios = cursor.fetchall()

    conn.close()

    portfolios_json = []
    for portfolio in portfolios:
        portfolio_dict = {
            'id': portfolio[0],
            'user_id': portfolio[1],
            'nombre': portfolio[2]
        }
        portfolios_json.append(portfolio_dict)

    return jsonify(portfolios_json)

if __name__ == '__main__':
    app.run(debug=True)
