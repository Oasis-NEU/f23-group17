from dotenv import load_dotenv
load_dotenv()

import os
from supabase import create_client
import json

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase = create_client(url, key)

# A node in the Trie data structure.
# It contains a dictionary of other Nodes
# that would connect it, and a boolean that
# determines if its the end of a word
class TrieNode():
    def __init__(self):
        self.children = {}
        self.last = False

class Trie():
    def __init__(self):
        self.root = TrieNode()
 
    def formTrie(self, keys):
        for key in keys:
            self.insert(key)  
 
    def insert(self, key):
        node = self.root
 
        for a in key:
            if not node.children.get(a):
                node.children[a] = TrieNode()
 
            node = node.children[a]
 
        node.last = True
    
    # Starting from the beginning of the key,
    # recurse through each character in the Trie. 
    # If the current node is the end of a word, print the word.
    def suggestionsRec(self, node, word):
        if node.last:
            print(word)
 
        for a, n in node.children.items():
            self.suggestionsRec(n, word + a)
 
    def printAutoSuggestions(self, key):
        node = self.root
        
        # Parse the entire key. If we find a character
        # in the key that DNE in the Trie path, return 0
        for a in key:
            if not node.children.get(a):
                return 0
            node = node.children[a]

        # If the first character of the key has no connections,
        # return -1
        if not node.children:
            return -1
        
        # If we do not return 0 or -1, at least a partial or full string
        # exists in the Trie
        self.suggestionsRec(node, key)
        return 1    

# Take the raw API Call for the given "key" column of the Courses
# Database, and convert it into a Python list. 
def convertRawToList(key, skip):
    responseName = supabase.table('Courses').select(key).execute()
    raw = str(responseName)
    out = []
    current = ""
    pointer = 0

    while pointer < len(raw):
        if raw[pointer] == '{':
            pointer += skip
            current = ""

            while raw[pointer] != '\'':
                current = current + raw[pointer]
                pointer += 1

            out.append(current)
        pointer += 1

    return out

# Given a partially complete text, return autocomplete suggestions
def searchBarAutocomplete(text):
    outList = convertRawToList("name", 10)
    autocompleteTrie = Trie()
    autocompleteTrie.formTrie(outList)
    comp = autocompleteTrie.printAutoSuggestions(text)

    if comp == -1:
        print("No results")
    if comp == 0:
        print("No results")

# Given a course ID in the format "CX XXXX", return whether or not
# the course ID exists in the database
def searchID(text):
    outList = convertRawToList("ident", 11)
    if text in outList:
        return "Course Found"
    else:
        return "Course not Found"

def main():
    print("---------------")
    inp = input("")
    searchBarAutocomplete(inp)

if __name__ == "__main__":
    main()
