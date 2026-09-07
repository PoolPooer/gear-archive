#!/bin/bash

set -e

if [ "$#" -ne 2 ]; then
    echo "Usage: ./replace-photo.sh <image-folder> <new-image>"
    echo "Example: ./replace-photo.sh jhs-the-smiley ~/Desktop/smiley.webp"
    exit 1
fi

FOLDER="$1"
SOURCE="$2"
DESTINATION="assets/images/$FOLDER/as-acquired.webp"

if [ ! -f "$SOURCE" ]; then
    echo "Error: source image not found:"
    echo "$SOURCE"
    exit 1
fi

if [ ! -d "assets/images/$FOLDER" ]; then
    echo "Error: archive image folder does not exist:"
    echo "assets/images/$FOLDER"
    exit 1
fi

cp "$SOURCE" "$DESTINATION"

echo "Replaced:"
echo "$DESTINATION"