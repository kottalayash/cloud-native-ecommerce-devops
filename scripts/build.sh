#!/usr/bin/env bash
set -euo pipefail

docker build -t cloudshop/frontend:local ./frontend
docker build -t cloudshop/product-service:local ./product-service
docker build -t cloudshop/order-service:local ./order-service

echo "Docker images built successfully."
