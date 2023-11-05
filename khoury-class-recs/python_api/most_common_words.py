from collections import Counter as Counter

def find_most_common(string_to_search):
    lowercase_string = string_to_search.lower().replace(".", " ")
    word_list = lowercase_string.split(" ")
    most_common_eng_words = ["the", "be", "to", "of", "and", "a", "in", "that", "have", "it", "for", "not", "on", "with", "he", "as", "you", "do", "i", "."]

    list_to_search = []

    for x in word_list:
        if (x not in most_common_eng_words):
            list_to_search.append(x)
            
    keywords_list = Counter(list_to_search).most_common(2)

    keywords = []

    for x in keywords_list:
        keywords.append(x[0])



    return keywords


if __name__ == "__main__":
    print(find_most_common("This is my house. What are you doing in my house. I don't want you in my house I want to be alone I am decorating my house"))
