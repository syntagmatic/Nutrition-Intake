import csv
import json

sources = {
    'food_groups': 'data/FD_GROUP.txt',
    'food': 'data/FOOD_DES.txt',
    'nutrients': 'data/NUTR_DEF.txt',
    'units': 'data/WEIGHT.txt',
    'footnotes': 'data/FOOTNOTE.txt',
    'langdesc': 'data/LANGDESC.txt',
}

for k,v in sources.iteritems():
    source = csv.reader(open(v, 'rb'), delimiter='^', quotechar='~')
    data = []
    for i in source:
        data.append(i)
    f = open('processed/' + k + '.js', 'w' )
    f.write('var ' + k + " = " + json.dumps(data) + ";");
    f.close()
