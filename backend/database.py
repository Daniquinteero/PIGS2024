import sqlite3
import searchs

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
        '''
        CREATE TABLE IF NOT EXISTS portfolios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_user INTEGER,
            name TEXT,
            FOREIGN KEY (id_user) REFERENCES users(id)
        )
        ''',
        '''
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE,
            category TEXT,
            url_img TEXT,
            searchs TEXT
        )
        ''',
        '''
        CREATE TABLE IF NOT EXISTS products_portfolios (
            id_product INTEGER,
            id_portfolio INTEGER,
            FOREIGN KEY (id_product) REFERENCES products(id),
            FOREIGN KEY (id_portfolio) REFERENCES portfolios(id),
            PRIMARY KEY (id_product, id_portfolio)
        )
        '''
    ]

    execute_queries(queries)

def drop_tables():
     
    queries = [
        "DROP TABLE IF EXISTS portfolios;",
        "DROP TABLE IF EXISTS products;",
        "DROP TABLE IF EXISTS products_portfolios;"
        ]
    
    execute_queries(queries)

def insert_products(names, categories, url_imgs, searchs_results):

    queries = ['''INSERT INTO products (name, category, url_img, searchs) VALUES (?, ?, ?, ?)'''
               for i in names]

    variables = list(zip(names, categories, url_imgs, searchs_results))

    execute_queries(queries, variables)