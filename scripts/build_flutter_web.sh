#!/usr/bin/env bash
set -e

export FLUTTER_HOME="$HOME/flutter"
export PATH="$FLUTTER_HOME/bin:$PATH"
export PUB_CACHE="$HOME/.pub-cache"

if [ ! -d "$FLUTTER_HOME" ]; then
  git clone https://github.com/flutter/flutter.git --depth 1 --branch 3.27.0 "$FLUTTER_HOME"
fi

flutter config --enable-web --no-analytics
flutter precache --web

cd particles_flutter/example
rm -f pubspec.lock
flutter pub get
flutter build web --release --no-tree-shake-icons
