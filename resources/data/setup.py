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
import log_data

log = open('/home/pi/workspace/testingSuite/resources/log.txt', 'r+')
target = open('/home/pi/workspace/testingSuite/resources/config.txt', 'r')

while log.readline() != "":
    pass

log.write(str(datetime.datetime.now())[0:-7] + "  : Server Starting\n")
log_data.log("Server starting")

internal = ""
external = ""

# Fine database names
for line in target:
    if "internal" in line:
        internal = str(line)[11:-1]
    elif "external" in line:
        external = str(line)[11:-1]


# Connect to the local data database
try:
    db1 = MySQLdb.connect(host="localhost",
                          user="root",
                          passwd="password",
                          db=internal)
    cur1 = db1.cursor()
except:
    log.write(str(datetime.datetime.now())[0:-7] + "  : Failed to connect to internal data database\n")
    log_data.log("Failed to connect to internal data database")

# Oh good now you have my password for a local SQL server, its about as useful as having a key to a locked chest across the world, might be useful but probably not

db1.close()

# Connect to the outside data database
try:
    db2 = MySQLdb.connect(host="localhost",
                          user="root",
                          passwd="password",
                          db=external)

    cur2 = db2.cursor()
except:
    log.write(str(datetime.datetime.now())[0:-7] + "  : Failed to connect to external data database\n")
    log_data.log("Failed to connect to external data database")



# Check for the appropiate tables from sources.txt

db2.close()

target.close()
log.close()
