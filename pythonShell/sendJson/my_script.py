import sys, json

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def main():

    print (read_in())

if __name__ == '__main__':
    main()
