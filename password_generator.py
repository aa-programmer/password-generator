import random

length = int(input("Enter the Length of the Password: "))

password = ""
try:
  for i in range(length):
    password += random.choice(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", '"', ",", ".", "<", ">", "?", "/", "~", "`"])
  print(f"saving password {password} in file savedpassword.txt")
  with open("savedpassword.txt" "w") as file:
    file.write(password)
expect (ValueError):
  raise ValueError("Entered Length is not an Integer.")
