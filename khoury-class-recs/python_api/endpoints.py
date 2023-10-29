from flask import FLask, request

import json

app = Flask(__name__)

@app.route('populatesearchbar', methods=['POST'])

def populatesearchbar():
    return json.dumps("this is the function")



if __name__ == "__main__":
    app.run(port=5000)

