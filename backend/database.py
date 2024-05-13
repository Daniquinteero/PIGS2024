import sqlite3

def execute_queries(queries, variables=[]):

    conn = sqlite3.connect('backend/database.db')
    cursor = conn.cursor()

    try:
        for i, query in enumerate(queries):
            if variables:
                cursor.execute(queries[i], variables[i])
            else:
                cursor.execute(query)
        conn.commit()

    except sqlite3.Error as e:
        print(f"Error executing queries: {e}")
        conn.rollback()

    finally:
        conn.close()

def create_tables():

    queries = [
        '''CREATE TABLE IF NOT EXISTS portfolios (
            id INTEGER PRIMARY KEY,
            id_user TEXT,
            name TEXT
        )''',
        '''
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE,
            category TEXT,
            url_img TEXT,
            searchs TEXT
        )
        ''',
        '''CREATE TABLE IF NOT EXISTS productos_portfolios (
            id INTEGER PRIMARY KEY,
            producto_id INTEGER,
            portfolio_id INTEGER,
            FOREIGN KEY(producto_id) REFERENCES productos(id),
            FOREIGN KEY(portfolio_id) REFERENCES portfolios(id)
        )
        '''
    ]

    execute_queries(queries)
    
def drop_tables():
     
    queries = [
        "DROP TABLE IF EXISTS portfolios;",
        "DROP TABLE IF EXISTS products;"
        ]
    
    execute_queries(queries)

def insert_products(names, categories, url_imgs, searchs_results):

    queries = ['''INSERT INTO products (name, category, url_img, searchs) VALUES (?, ?, ?, ?)'''
               for i in names]

    variables = list(zip(names, categories, url_imgs, searchs_results))

    execute_queries(queries, variables)