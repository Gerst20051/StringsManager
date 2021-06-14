#!/usr/bin/env sh

# macOS does not support readlink, but it does have perl
system=$(uname -s)
if [ "${system}" = 'Darwin' ]; then
  dir=$(perl -e 'use Cwd "abs_path"; use File::Basename; print dirname(abs_path(shift))' "$0")
else
  dir=$(dirname "$(readlink -f "$0")")
fi

logo_svg=assets/logo.svg
logo_png=assets/logo.png
output=react-strings-manager/public

rsvg-convert -a -w 1024 $dir/$logo_svg -o $dir/$logo_png
convert -resize x64 $dir/$logo_png $dir/$output/favicon.ico
sips -Z 192 $logo_png --out $dir/$output/logo192.png
sips -Z 512 $logo_png --out $dir/$output/logo512.png
