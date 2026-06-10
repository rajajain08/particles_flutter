#!/usr/bin/env bash
set -e

export FLUTTER_HOME="$HOME/flutter"
export PATH="$FLUTTER_HOME/bin:$PATH"

if [ ! -d "$FLUTTER_HOME" ]; then
  git clone https://github.com/flutter/flutter.git --depth 1 --branch 3.24.0 "$FLUTTER_HOME"
fi

flutter precache --web
flutter config --enable-web
flutter --version

cd particles_flutter/example
flutter pub get
flutter build web --release
