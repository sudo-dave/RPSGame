from flask_json_schema import JsonSchema, JsonValidationError
from flask import Flask, jsonify, request
from DB_Controller import Controller
app = Flask(__name__)
schema = JsonSchema(app)

# in the futre add the contry of orgin of ip
scores_res_schema = {
    "username": {
        "type": "string",
        "required": True
    },
    "wins": {
        "type": "number",
        "required": True,
        "maximum": 120,
        "minimum": 0
    }
}


@app.route('/api/scores', methods=["GET"])
def get_scores():
    res = dict()
    db = Controller()
    db_res = db.get_top_n_scores(5)
    for tup in db_res:
        res[tup[0]] = tup[1]
    return jsonify(res), 200


# when player wins a gloabl match
# Accept {username: "", wins: true} json
# @app.route('/api/user', methods=["POST"])
# def post_scores():
#     ErrBody = {"Error": "Not valid JSON"}
#     try:
#         data = request.get_json()
#     except Exception as e:
#         return jsonify(ErrBody), 400
#     # Add some validation checking to json
#     return jsonify({"Status": "good"}), 200

@app.errorhandler(JsonValidationError)
def validation_error(e):
    return jsonify({'error': e.message, 'errors': [validation_error.message for validation_error in e.errors]})


# @app.route('/api/user', methods=["POST"])
# @schema.validate(scores_res_schema)
# def post_scores():
#     return jsonify({"success": True}), 200


if __name__ == '__main__':
    Controller.db_init()
    app.run(debug=True)
