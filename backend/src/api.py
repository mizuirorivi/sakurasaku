from flask import Blueprint, request, abort, jsonify

import url2score 
import url2productid

api = Blueprint('api',__name__,url_prefix='/api')

# https://www.amazon.co.jp/gp/product/B082M5XW63/

@api.route('/url2score')
def retscore():
    url = request.args.get('url')
    product_id = url2productid.url2productid(url)
    score = url2score.url2score(product_id)
    return jsonify({"score":str(score)})
    