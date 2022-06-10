# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Create a method called even_not that will check if a method is even or not 
# Use method .even? 
# use string interpolation to write a number


num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_not num
    if num.even?
        "#{num} is even"
    else
        "#{num} is odd"

    end 
end
p even_not num1
p even_not num2
p even_not num3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Create a method with the name of no_vow
# The method will take a string and return the non vowels 
# Use method .delete and the vowels to delete the vowels of the string



album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vow string 
    string.delete "aeiouAEIOU"
    
end
p no_vow album1
p no_vow album2
p no_vow album3


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# create a method calles pal_or_not
# the the method will take a string and return "is a palindrome" or "is not a palindrome"
# Use method .downcase to turn the upper case  letters into lowecase letters
# Use method .reverse to reverse the string
# If the string equals to the string reversed return the first output, if not return second output


palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def pal_or_not string 
    if string.downcase == string.downcase.reverse
         "#{string} is a palindrome"
    else 
         "#{string} is not a palindrome"
    end 
end


p pal_or_not palindrome_tester1
p pal_or_not palindrome_tester2
p pal_or_not palindrome_tester3

