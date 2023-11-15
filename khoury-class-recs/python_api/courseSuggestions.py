from dataClean import *
from collections import Counter as Counter

import jellyfish

EXCLUDED = set(["lab", "topics", "research", "recitation", "study", "elective", "seminar", "project"])

# Given a string representing a course name,
# return False if it includes one of the forbidden phrases.
# Else return True
def checkExcluded(courseName):
    for exclusion in EXCLUDED:
        if exclusion in courseName.lower():
            return False
        
    return True

# Given two Course objects representing courses,
# return an integer representing their similarity.
def getSimilarityGrade(course1, course2):
    return jellyfish.levenshtein_distance(course1.description, course2.description)  

# Given two lists of Course objects that represent
# all courses in the database and all courses taken respectively,
# return the top n most similar courses.
def getMostSimilar(allCourses, coursesTaken, n):
    out = []

    for allCourse in allCourses:
        for takenCourse in coursesTaken:
            if checkExcluded(allCourse.courseName):
                out.append([allCourse.courseName, getSimilarityGrade(allCourse, takenCourse)])
    out = sorted(out, key=lambda x:x[1])

    return out[len(coursesTaken):len(coursesTaken)+n]


def main():
    allCourses = generateData()    

    course1 = allCourses[5]
    course2 = allCourses[7]
    course3 = allCourses[15]

    print(course1.courseName)
    print(course2.courseName)
    print(course3.courseName)


    coursesTaken = [course1, course2, course3]

    print(getMostSimilar(allCourses, coursesTaken, 10))

if __name__ == "__main__":
    main()