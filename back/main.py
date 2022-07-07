from asyncio.log import logger
from flask import Flask
from DB_Controller import Controller
app = Flask(__name__)


@app.route('/api/scores')
def hello_world():
    return 'Hello, World!'


if __name__ == '__main__':
    print("okTHEn")
    Controller.DB_Init()
    app.run(debug=True)
