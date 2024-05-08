import searchs
import database

def test_create_tables():
    database.drop_tables()
    database.create_tables()

def test_insert_products_smartphones():

    names = ["iPhone 13", "iPhone 12", "Xiaomi Redmi Note 13", "Samsung Galaxy A05s", "Samsung Galaxy A15"]
    categories = ["smartphone", "smartphone", "smartphone", "smartphone", "smartphone"]
    url_imgs = ["https://d2e6ccujb3mkqf.cloudfront.net/ef5660d2-6883-4b81-b47d-86e5720687ef-1_72ddd233-c9b6-4f10-a739-447c440b6357.jpg",
                "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-black-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202741000",
                "https://thumb.pccomponentes.com/w-530-530/articles/1080/10804888/1104-xiaomi-redmi-note-13-6-128gb-verde-libre.jpg",
                "https://thumb.pccomponentes.com/w-530-530/articles/1081/10812950/1511-samsung-galaxy-a05s-4-64gb-negro-libre.jpg",
                "https://thumb.pccomponentes.com/w-530-530/articles/1081/10815118/1921-samsung-galaxy-a15-4-128gb-negro-libre.jpg"]
    searchs_results = searchs.get_searchs(names)

    database.insert_products(names, categories, url_imgs, searchs_results)

# test_create_tables()
test_insert_products_smartphones()