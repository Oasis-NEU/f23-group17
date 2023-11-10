import os
from supabase import create_client
import csv

from dotenv import load_dotenv
load_dotenv()

#url = os.environ.get("SUPABASE_URL")
#key = os.environ.get("SUPABASE_KEY")
SUPABASE_URL="https://ibjtodmgtemqldljatte.supabase.co"
SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlianRvZG1ndGVtcWxkbGphdHRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczODY0MzgsImV4cCI6MjAxMjk2MjQzOH0.ZqIJV8qbmAT3GaH2COHwTmEjoZANbJTHeq12HJsep0I"
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

# Represents a Northeastern course in the database
class Course:
    def __init__(self, courseName, courseID, description, hours, prereqs):
        self.courseName = courseName
        self.courseID = courseID
        self.description = description
        self.hours = hours
        self.prereqs = []

    def printClean(self):
        print("Course Name: " + self.courseName)
        print("Course ID: " + self.courseID)
        print("Course Desc Brief: "  + self.description[0:50] + "...")
        print("Course hours: " + self.hours)
        print("Prerequisite Courses: ", end="")
        for prereq in self.prereqs:
            print(prereq, end =", ")
        print("")

# Take a raw API call from supabase data and convert 
# one of the columns (key) into a readable list.
def convertRawToList(key, skip):
    responseName = supabase.table('CoursesCS').select(key).execute()
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

# Take a raw API call from supabase data and convert 
# one of the hours column into a list of characters.
# This function was necessary because the hours column
# was not cooperative :(
def convertRawToListHours():
    responseName = supabase.table('CoursesCS').select("hours").execute()
    raw = str(responseName)
    pointer = 0
    current = []

    while pointer < len(raw):
        if raw[pointer] == "{":
            pointer += 10
            if pointer < len(raw):
                current.append(raw[pointer])

        pointer += 1

    return current

# Take the stored reqs.csv file and return a 
# list that represents the prerequisite courses
# in the context of a Course class
def getPrereqs():
    courseIDs = convertRawToList("ident", 11)
    out = []

    with open('reqs.csv', mode='r') as file:
        csvFile = csv.reader(file)

        for row in csvFile:
            if row[1] == "ORPRE":
                continue
            else:
                current = []
                currentStr = ""
                content = row[1]

                for c in content:
                    if c == "&":
                        current.append(currentStr)
                        currentStr = ""
                    else:
                        currentStr += c

                current.append(currentStr)
                out.append(current)

        return out


# Parse data in Supabase database and prereq csv and return
# a list of Course objects
def generateData():
    out = []
    courseNames = convertRawToList("name", 10)
    courseIDs = convertRawToList("ident", 11)
    courseDescriptions = convertRawToList("desc", 10)
    courseHours = convertRawToListHours()
    coursePrereqs = getPrereqs()
    pointer = 0

    while pointer < len(courseNames):
        cName = courseNames[pointer]
        cID = courseIDs[pointer]
        cDesc = courseDescriptions[pointer]
        cHr = courseHours[pointer]

        course = Course(cName, cID, cDesc, cHr, [])
        out.append(course)

        pointer += 1
    
    out.sort(key=lambda x: x.courseID)
    courseIDs.sort()
    for i in range(2, 99):
        out[i].prereqs = coursePrereqs[i]

    return out[:99]

def main():
    courses = generateData()

if __name__ == "__main__":
    main()


