from flask import Flask, jsonify, request
#from flask_cors import CORS
app = Flask(__name__)
#cors = CORS(app)

@app.route("/postFeed", methods=['POST', 'OPTIONS'])
def postfeed():
    """Test post

    :data: things from the interwebs
    :returns: stuff to the interwebs

    """

    # Apparently browsers send this before a post to make sure the server allows Cross-origin POST
    if request.method == 'OPTIONS':
        response = jsonify({'status': 'success'})
        return addCorsHeaders(response)
    
    data = request.get_json()

    req_user = data['user']
    req_message = data['message']

    response = jsonify({'status': 'success', 'user': req_user, 'message': req_message})
    return addCorsHeaders(response)

@app.route("/<user>")
def getfeed(user):
    """Test post

    :user: Stuff from the interwebs
    :returns: stuff to the interwebs

    """

    response = jsonify({'result_count': 'This is ' + user + '\'s feed!'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

def addCorsHeaders(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    response.headers.add('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Requested-With, Accept, Authorization')
    return response
