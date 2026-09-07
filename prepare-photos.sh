#!/bin/bash

set -e

if [ "$#" -ne 2 ]; then
    echo "Usage: ./prepare-photos.sh <input-directory> <output-directory>"
    echo "Example: ./prepare-photos.sh ~/Desktop/pedal-photos ~/Desktop/pedal-webp"
    exit 1
fi

INPUT_DIR="${1%/}"
OUTPUT_DIR="${2%/}"

if [ ! -d "$INPUT_DIR" ]; then
    echo "Error: input directory does not exist:"
    echo "$INPUT_DIR"
    exit 1
fi

mkdir -p "$OUTPUT_DIR"

count=0

find "$INPUT_DIR" -maxdepth 1 -type f \( \
    -iname "*.jpg" -o \
    -iname "*.jpeg" \
\) -print0 | while IFS= read -r -d '' file; do

    filename="$(basename "$file")"
    name="${filename%.*}"

    echo "Processing: $filename"

    magick "$file" \
        -auto-orient \
        -resize "1500x1100>" \
        -gravity center \
        -background white \
        -extent 1600x1200 \
        -strip \
        -colorspace sRGB \
        -quality 83 \
        "$OUTPUT_DIR/$name.webp"

    echo "Created: $OUTPUT_DIR/$name.webp"
done

echo
echo "Finished."
echo "Prepared photos are in:"
echo "$OUTPUT_DIR"