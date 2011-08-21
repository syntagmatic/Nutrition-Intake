import csv
import json

sources = {
    'food_groups': 'data/FD_GROUP.txt',
    'food': 'data/FOOD_DES.txt',
    'nutrients': 'data/NUTR_DEF.txt',
    'weights': 'data/WEIGHT.txt',
    #'footnotes': 'data/FOOTNOTE.txt',
    #'langdesc': 'data/LANGDESC.txt',
    'data': 'data/NUT_DATA.txt',
}

data = {}
nutrients = {}
foods = {}

for k,v in sources.iteritems():
    source = csv.reader(open(v, 'rb'), delimiter='^', quotechar='~')
    data[k] = []
    for i in source:
        data[k].append(i)

# Nutrients
"""
for nut in data['nutrients']:
    nutrients[nut[0]] = {
        'name': nut[3],
        'tagname': nut[2],
        'unit': nut[1],
        'benefit':[],
    }
"""

# Food
for food in data['food']:
    foods[food[0]] = {
        'name': food[2],
        'foodgroup':food[1],
        'nutrients':[],
    }

for item in data['data']:
    amount = float(item[2])
    if amount > 0.001:
        nut = {
            'id': item[1],
            'amount': amount,
        }
        foods[item[0]]['nutrients'].append(nut)

f = open('json/data.js', 'w' )
f.write('var data = ' + json.dumps(foods, indent=2) + ';')
f.close()
