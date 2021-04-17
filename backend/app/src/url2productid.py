import re
import error
def url2productid(url):
    product_id = ""
    try:
        # dp/<product_id>/hogehogeの場合
        product_id = re.findall("dp.*",url)[0]
        product_id = re.findall("[a-zA-Z0-9_]{10}",product_id)[0]
        product_id = product_id.replace('/','')
        print(product_id)
    except:
        try:
            # product/<product_id>?hogehogeの場合
            product_id = re.findall("product.*",url)[0]
            print(product_id)
            product_id = re.findall("[a-zA-Z0-9_]{10}",product_id)[0]
            product_id = product_id.replace('/','')
        except:
            # 上記を満たさない場合
            raise error.NotFoundProductCode("product_idが見つかりません")
            product_id = "none"
    
    return product_id
