import csv
import json

sources = {
    'food_groups': 'data/FD_GROUP.txt',
    'food': 'data/FOOD_DES.txt',
    'nutrients': 'data/NUTR_DEF.txt',
    'units': 'data/WEIGHT.txt',
    'footnotes': 'data/FOOTNOTE.txt',
    'langdesc': 'data/LANGDESC.txt',
    'data': 'data/NUT_DATA.txt',
}

data = {}

for k,v in sources.iteritems():
    source = csv.reader(open(v, 'rb'), delimiter='^', quotechar='~')
    data[k] = []
    for i in source:
        data[k].append(i)

# f = open('json/data.js', 'w' )
# f.write('var data = ' + json.dumps(data['food_groups']) + ';')
# f.close()
