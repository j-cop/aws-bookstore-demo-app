import os
dir = f"{os.getcwd()}/src"
check_line = "/**Jack Coplestone 1504624*/"
for root, dirs, files in os.walk(dir):
   for file in files:
        if file.endswith(".ts"):
             with open((os.path.join(root, file))) as f:
                 if f.readline().strip() != check_line:
                     print(f"file {file} does not have name and ID commented correctly or at all.")
                     exit(1)
exit(0)