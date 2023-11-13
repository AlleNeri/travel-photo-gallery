# read the folder and create a typescript file wich exports
# an array of photos for the react-photo-album library

import os, sys
from PIL import Image

def minusReplace(string):
    return string.replace('-', '_')

def importImages(folder_path):
    outputStr = ''
    for filename in os.listdir(folder_path):
        if filename.endswith('.png') or filename.endswith('.jpg') or filename.endswith('.jpeg') or filename.endswith('.webp'):
            image_name = os.path.splitext(filename)[0]
            outputStr += f'import {minusReplace(image_name)} from "./photo/{filename}"\n'
    return outputStr

def arrayImages(folder_path):
    outputStr= 'import { MyPhoto } from "../../myPhoto";\n' + '\nconst photos: MyPhoto[] = [\n'
    for filename in os.listdir(folder_path):
        if filename.endswith('.png') or filename.endswith('.jpg') or filename.endswith('.jpeg') or filename.endswith('.webp'):
            with Image.open(folder_path + '/' + filename) as img:
                image_name = os.path.splitext(filename)[0]
                width, height = img.size
                outputStr += '\t{' + f'src: {minusReplace(image_name)}, width: {str(width)}, height: {str(height)}, title: "{image_name}", description: "{image_name}"' + '},\n'
    outputStr += '];\n\n'
    outputStr += 'export default photos;'
    return outputStr

# get the path from the command line
path = sys.argv[1]

# generate the imports
imports = importImages(path)

#generate the array
array = arrayImages(path)

# write the array in a file
with open('photos.tsx', 'w') as f:
    f.write(imports)
    f.write("\n")
    f.write(array)
