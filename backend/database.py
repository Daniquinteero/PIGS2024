import sqlite3

def createTables():
    conn = sqlite3.connect('backend/database.db')
    cursor = conn.cursor()

    # User Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT
        )
    ''')

    # Portfolio Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS portfolios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_user INTEGER,
            name TEXT,
            FOREIGN KEY (id_user) REFERENCES users(id)
        )
    ''')

    # Product Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            category TEXT
        )
    ''')

    # Relational Table Products_Portfolios
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS products_portfolios (
            id_product INTEGER,
            id_portfolio INTEGER,
            FOREIGN KEY (id_product) REFERENCES products(id),
            FOREIGN KEY (id_portfolio) REFERENCES portfolios(id),
            PRIMARY KEY (id_product, id_portfolio)
        )
    ''')

    conn.commit()
    conn.close()

# createTables()