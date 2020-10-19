import sys

Openlist = ['{','(','[']
Closelist = ['}',']',')']

# Compares the first and and the next paranthesis to make sure they have closing remarks
def compare(liststr):
    # Temp list
    temp = []
    
    for line in liststr:
        if line in Openlist:
            # Append if found in open list
            temp.append(line)    
        elif line in Closelist:
            p = Closelist.index(line) - 1 # This shouldn't be neccesary, if I had a better debugger I would be able to see the white space being passed 
            
            # Pop if found without a ending
            if ((len(temp) > 0) and (Openlist[p] == temp[len(temp) - 1])):
                temp.pop()
            else:
                return False
    if len(temp) == 0:
        return True
    else: 
        return False
    

for line in sys.stdin:
    # There is some weird white space before and after the parenthesis that .strip() couldnt remove
    print(compare(line))
    