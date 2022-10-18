# goggle search
# first pip install googletrans==3.1.0a0
# I added [::-1] in the end of strings becuse visual studio code doesn't support right to left language such as hebrew

# ייבוא של פלאסק לצורך איי פי איי
#from flask import Flask
from serpapi import GoogleSearch
from googletrans import*
translator = Translator()

print("מה השאלה שלך?"[::-1])
he_q = input()

# step 1 - translate the qustion from hebrew to english
en_q = translator.translate(he_q, src='he')


# step 2 - search the qustion in english
params = {
    "q": en_q.text,
    "hl": "en",
    "gl": "us",
    "api_key": "0d2908e532081c68a310187405f72e671f35380b20b9538834906c49d1c8aedb"
}
search = GoogleSearch(params)

# step 3 - get the snippet answer in english
results = search.get_dict()
answer_box = results["answer_box"]
en_a = answer_box["snippet"]

# step 4 - print the answer in hebrew
he_a = translator.translate(en_a, src='en', dest='he')
print(he_a.text[::-1])
