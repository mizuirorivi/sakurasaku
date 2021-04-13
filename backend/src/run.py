from flask import Flask, render_template, jsonify


from api import api

app = Flask(__name__)

app.config.from_pyfile('../conf.cfg')


app.register_blueprint(api)

@app.errorhandler(404)
def page_not_found(error):
    return jsonify({'error': {
        'code': 'Not found',
        'message': 'Page not found.'
    }}), 404


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
