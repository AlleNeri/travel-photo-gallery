# Photo gallery
A photo gallery for travel.

## MyGallery
`src/components/myGallery/myGallery.tsx` contains a react component which creates a gallery starting from an array of photo in the `Photo` format(look the library documentation).

## Generate Photo
`generatePhotos.py` is a python script witch generate, in a standard way the `photos.ts` file from a directory of photo.
The file has to be moved to the correct directory: `src/components/<component-name>`.

## Webp Converter
`toWebp.py` is a python script witch, starting from a folder of images, generate a folder with the images converted in `.webp`.
