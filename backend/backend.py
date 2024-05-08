from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

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

if __name__ == '__main__':
    app.run(debug=True)