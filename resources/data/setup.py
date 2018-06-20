# Check for mySQL server at local host
# Read files in from sources.txt in the folloring format:
# uniqueID - description - source - keyword1, keyword2, ... , keywordn -
# check to see if the ID is new
# if it is new add a new table
# else continue
# on exit


import MySQLdb

db = MySQLdb.connect(host="localhost",
                     user="root",
                     passwd="password",
                     db="test")

cur = db.cursor()

print "Didn't break\n"

db.close()
