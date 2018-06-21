import datetime

def log(message):
    file = open('/home/pi/workspace/testingSuite/resources/log.txt', 'r+')

    while file.readline() != "":
        pass

    file.write(str(datetime.datetime.now())[0:-7] + "  : " + message + "\n")

    file.close()
