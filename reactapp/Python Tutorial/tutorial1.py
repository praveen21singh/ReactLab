keys = ['a','b','c','d','e']
values = [1,2,3,4,5]  

# dict = { k:v for (k,v) in zip(keys,values)}
# dict = dict(zip(keys, values))  

# dict = {x: x**2 for x in [3,4,5,6,7]}

# sDict = {x.upper(): x*4 for x in 'pythoncoding' if x != 'c'}


# s = 'EFG'

# dict = {x: {y:x+y for y in s} for x in s*2}



# filterfunc = filter(lambda x: x == 'west', {4:'rest',8:'west',12:'east'}.values())

# print(list(filterfunc))

# from functools import reduce
# from itertools import accumulate
# a = [1,2,3,4,5]
# reducefunc = reduce(lambda x, y: x + y, a)
# accumulatefunc = accumulate(a,lambda x,y: x + y)
# print(reducefunc)
# print(list(accumulatefunc))


# s = ['1','2','3','4','5']

# mapfunc = map(lambda x: x*2, s)
# print(list(mapfunc))


# fruits = ['apple', 'banana', 'cherry']
# print(list(map(str.upper,fruits)))

# words = ['apple', 'banana', 'cherry']
# print(list(map(lambda s: s[0].upper(),words)))

a = [1,2,3,4]
b = [5,6,7,8]

# print(list((lambda x, y: x + y)(x, y) for x in a for y in b))

# print(list(map(lambda x: x[0] + x[1], zip(a,b))))


# fruits = ['apple', 'banana', 'cherry']
# index = [5,6,7]

# print(list(zip(fruits,index)))
# dict = {k:v for (k,v) in zip(fruits,index)}

# print(dict)

# class Dog:
#     sound = 'bark'
#     species = 'Canine'

#     def __init__(self,name,age):
#         self.name = name
#         self.age = age

#     def bark(self):
#         print(self.name)


# dog1 = Dog('Dollar',12)


# print(dog1.name)
# print(dog1.age)
# print(dog1.sound)
# print(dog1.bark)



# def shout(text):
#     return text.upper()


# yell = shout

# print(shout('Hello'))

# print(yell('Hello'))

# def outer(x):
#     def inner(y):
#         return x + y
    
#     return inner

# add_15 = outer(15)

# print(add_15(10))


#GENERATOR IN PYTHON

# def fun(N):
#     cnt = 1
#     while cnt <=N:
#         yield cnt
#         cnt+=1


# counter = fun(10)

# print([x for x in counter])



# FIBONACCI NUMBER

# def fibonaci_num(n):
#     fib = [0,1]
#     for i in range(2,n):
#         fib.append(fib[-1]  + fib[-2])

#     return fib

# print(fibonaci_num(10))

#DIVISION (/) & FLOOR DIVISION (//)

# print(-17/5)
# print(-17//5)


# PYTHON REGEX

# import re

# pattern = '[gr*at]'
# test_string = 'Python great Tutorial'

# result = re.match(pattern,test_string)

# if result:
#   print("Search successful.")
# else:
#   print("Search unsuccessful.")	

# from wordcloud import WordCloud
# import matplotlib.pyplot as plt

# # List of keywords for the word cloud
# keywords = """
# Kathak Dance  Shakti Artistry Repertoire Ballets Mythology Vedic Traditions Performing 
# Choreographing Mentoring Tarana Praveen Thumri Raags Taals  Guru-Shishya Parampara Art Culture
#  Mentoring Jharkhand Jharkhand Odisha Kathak Thumri Parampara Uttar  Pradesh Cultural Preservation Women Empowerment Award
# Rashtriya Atal Puraskar Shakti Dance Ratna Nari Samman Raags Women  Ratna Samman  Ratna Award  Award
# Praveen Choreography Mahotsav Uttar Pradesh Bihar Kathak Jharkhand Performances  Guru-Shishya Parampara  Thumri Entrepreneurship Odisha Bihar Bihar
# """

# # Generate the word cloud
# wordcloud = WordCloud(width=800, height=400, background_color='white', colormap='tab10').generate(keywords)

# # Display the word cloud
# plt.figure(figsize=(10, 5))
# plt.imshow(wordcloud, interpolation='bilinear')
# plt.axis('off')
# plt.show()

# # Save the word cloud to a file
# wordcloud.to_file("kathak_dancer_wordcloud.png")
# print("Word cloud saved as kathak_dancer_wordcloud.png")

from PyPDF2 import PdfReader

# Path to your PDF file
pdf_path = "D:/ANU SINHA BOOK A4 2025.pdf"  # Replace with your PDF file's path

# Function to extract text from a specific page
def extract_text_from_page(pdf_path, page_number):
    try:
        # Read the PDF
        reader = PdfReader(pdf_path)

        # Ensure the page exists
        if page_number < 1 or page_number > len(reader.pages):
            return f"Page {page_number} does not exist in the PDF."

        # Extract text
        page_text = reader.pages[page_number - 1].extract_text()
        return page_text.strip() if page_text else "No text found on the page."

    except Exception as e:
        return f"An error occurred: {str(e)}"

# Specify the page number you want to extract
page_number = 3  # Extract text from the 3rd page

# Extract and print the text
text = extract_text_from_page(pdf_path, page_number)
print(f"Text from Page {page_number}:\n{text}")


