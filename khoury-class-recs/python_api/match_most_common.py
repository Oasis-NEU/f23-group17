from collections import Counter as Counter
from most_common_words import find_most_common
from most_common_classes_taken import classes_taken_most_common
import json



def match_most_common(class_taken_dictionary_list, class_descriptions_dictionary_list): 

    matched_list = []


    student_class_taken_keywords_set = classes_taken_most_common(class_taken_dictionary_list)

    for x in class_descriptions_dictionary_list: # x is one dictionary
        lower_case_string = x["desc"].lower()
        class_description = lower_case_string.split(" ")
        class_desctiption_keywords = find_most_common(class_description)
        class_des_keywrds_set = set(class_desctiption_keywords)

        if len(student_class_taken_keywords_set.intersection(class_des_keywrds_set)) > 2:
            matched_list.append(x)

    # dictionary = {
    #     "course_name" = "discrete turctures",
    #     "course_id" ="cs1800"
    #     "desc" = "description"
    #     "prereqs" = ["cs1800", "cs2500"]

    



    return json.dumps(matched_list)