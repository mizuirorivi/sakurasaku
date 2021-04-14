from flask import Flask, render_template, jsonify


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
    print('server run!!')
    app.run(host="0.0.0.0", port=8080, debug=True)
