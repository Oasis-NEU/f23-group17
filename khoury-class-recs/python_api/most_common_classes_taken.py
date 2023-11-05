from collections import Counter as Counter
from most_common_words import find_most_common

def classes_taken_most_common(class_taken_dictionary_list):

    some_list = []
    for x in class_taken_dictionary_list:
        lower_case_string = x["desc"].lower().replace(".", " ")
        class_description = lower_case_string.split(" ")
        student_most_common_classes = find_most_common(class_description) # returns list of most common words
        # student_most_common_classes_set = set(student_most_common_classes)

        some_list.append(student_most_common_classes)

        student_most_common_classes_set = set(some_list)



    return student_most_common_classes_set #returns list of sets containing the most common words in the classes that the student took

    