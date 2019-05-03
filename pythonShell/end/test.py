import sys
from time import sleep

#sleep(3)
print (sys.argv[1])
exitEnd = sys.argv[1]


if exitEnd.startswith('value'):
    print ('success')
    #sys.exit()


print ('end')