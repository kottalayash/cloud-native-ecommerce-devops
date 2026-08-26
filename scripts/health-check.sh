#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-http://localhost}"

echo "Checking frontend: ${BASE_URL}"
curl -fsS "${BASE_URL}/" >/dev/null

echo "Frontend is healthy."
