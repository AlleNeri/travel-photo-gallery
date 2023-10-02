# read the folder and create a typescript file wich exports
# an array of photos for the react-photo-album library

import os, sys
from PIL import Image

# get the path from the command line
path = sys.argv[1]

# imports and const
imports = 'import { Photo } from \'react-photo-album\';\n\n'
basePathConst = 'const basePath: string = \'../../../photo/\';\n\n'

# get the files in the path
files = os.listdir(path)

# create the array
prefix = '\n\t{ src: `${basePath}'
array = 'const photos: Photo[] = ['
for file in files:
    with Image.open(path + '/' + file) as img:
        # get the img dimensions
        width, height = img.size
        # add the photo to the array
        array += prefix + file + '`, width: ' + str(width) + ', height: ' + str(height) + ', title: \'' + file + '\', description: \'' + file + '\' },'
array += '\n];\n\n'

# export the array
export = 'export default photos;\n'

# write the array in a file
with open('photos.tsx', 'w') as f:
    f.write(imports)
    f.write(basePathConst)
    f.write(array)
    f.write(export)
