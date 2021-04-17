from flask import Flask, render_template, jsonify
import argparse
import config

from api import api

app = Flask(__name__)

app.config.from_pyfile('../conf.cfg')


app.register_blueprint(api)

# errorコード表示
@app.errorhandler(404)
def page_not_found(error):
    return jsonify(
            {'error': {
                'code': 'Not found',
                'message': 'Page not found.'
    }}), 404


@app.route("/")
def show_page():
    return render_template('index.html',msg='Hello,',addditonal_msg="from Python")

if __name__ == '__main__':
    
    parser = argparse.ArgumentParser(description="armアーキテクチャの選択")
    parser.add_argument('-arch','-a',default="x86-64",help="armの場合には-a arm or -arch armを引数にとる")
    args = parser.parse_args()
    print(args.arch)
    config.Config.arch = args.arch
    print('server run!!')
    app.run(host="0.0.0.0", port=8080, debug=True)

