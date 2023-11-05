from collections import Counter as Counter
from most_common_words import find_most_common
import json


def common_member(a, b):
    a_set = set(a)
    b_set = set(b)
    if len(a_set.intersection(b_set)) > 0:
        return(True) 
    return(False) 


def match_most_common(keywords_list, class_descriptions_dictionary_list):


    matched_list= []

    keywords_set = set(keywords_list)

    for x in class_descriptions_dictionary_list:
        lower_case_string = x["desc"].lower()
        class_description = lower_case_string.split(" ")
        class_desctiption_keywords = find_most_common(class_description)
        class_des_keywrds_set = set(class_desctiption_keywords)

        if len(keywords_set.intersection(class_des_keywrds_set)) > 1:
            matched_list.append(x)

    # dicti0nary = {
    #     "course_name" = "discrete turctures",
    #     "course_id" ="cs1800"
    #     "desc" = "description"
    #     "prereqs" = ["cs1800", "cs2500"]

    



    return json.dumps(matched_list)