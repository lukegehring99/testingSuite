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
import datetime


log = open('/home/pi/workspace/testingSuite/resources/log.txt', 'r+')
target = open('/home/pi/workspace/testingSuite/resources/config.txt', 'r')

while log.readline() != "":
    pass

log.write(str(datetime.datetime.now())[0:6] + "  : Server Starting\n")

internal = ""
external = ""

# Fine database names
for line in target:
    if "internal" in line:
        internal = str(line)[11:]
    elif "external" in line:
        external = str(line)[11:]

    line = target.readline()

print internal
print external

# Connect to the local database
try:
    db = MySQLdb.connect(host="localhost",
                        user="root",
                        passwd="password",
                        db="test")
    cur = db.cursor()
except:
    log.write(str(datetime.datetime.now())[0:6] + "  : Failed to connect to internal database\n")

# Oh good now you have my password for a local SQL server, its about as useful as having a key to a locked chest across the world, might be useful but probably not



db.close()



target.close()
log.close()
