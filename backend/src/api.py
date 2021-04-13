from flask import Blueprint, request, abort, jsonify

import url2score 
import url2productid

#/api以下をデフォルトルート
api = Blueprint('api',__name__,url_prefix='/api')

# https://www.amazon.co.jp/gp/product/B082M5XW63/

#/api/url2score?url=""
@api.route('/url2score')
def retscore():
    
    #クエリー文字列の取得
    url = request.args.get('url')
    #urlからproduct_idの抽出
    try:
        product_id = url2productid.url2productid(url)
    except:
        return jsonify({'error':{
            'code': 'Not found Product Code',
            'mesage': 'プロダクトコードが見つかりません'
            }}),503
    #product_idでscoreの取得
    score = url2score.url2score(product_id)
    return jsonify({"score":str(score)})
    
