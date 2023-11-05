from flask import FLask, request
from match_most_common import match_most_common
from most_common_words import find_most_common
import json

app = Flask(__name__)

@app.route('giverecs', methods=['POST'])

def giverecs():

    most_common_keywords = find_most_common()

    class_dictionary_lst = []


    return match_most_common(most_common_keywords, class_dictionary_lst)



@app.route('populatesearchbar', methods=['POST'])

def populatesearchbar():
    searchbar_classes = []
    return json.dumps(searchbar_classes)

if __name__ == "__main__":
    app.run(port=5000)

