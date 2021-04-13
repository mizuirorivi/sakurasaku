import re
def url2productid(url):
    product_id = ""
    # amazon
    try:
        product_id = re.findall("dp.*",url)[0]
        product_id = re.findall("[a-zA-Z0-9_]{10}",product_id)[0]
        product_id = product_id.replace('/','')
        print(product_id)
    except:
        try:
            product_id = re.findall("product.*",url)[0]
            print(product_id)
            product_id = re.findall("[a-zA-Z0-9_]{10}",product_id)[0]
            product_id = product_id.replace('/','')
        except:
            product_id = "none"
    
    return product_id