# This file specifies the startup of the server

# Check for mySQL server at local host
# Verify the 2 databases specified in config.txt
# Verify the tables in the external data database
# Read files in from sources.txt
# uniqueID - description - source - keyword1, keyword2, ... , keywordn -
# Check to see if the ID is new
# If it is new add a new table
# Else continue
# Write to log what happened
# Begin data collection loop


import MySQLdb

db = MySQLdb.connect(host="localhost",
                     user="root",
                     passwd="password",
                     db="test")

# Oh good now you have my password for a local SQL server, its about as useful as having a key to a locked chest across the world, might be useful but probably not

cur = db.cursor()

print "Didn't break part 1\n"

db.close()


log = open('/home/pi/workspace/testingSuite/resources/log.txt', 'r')

first = log.read()

log.close()

print first
