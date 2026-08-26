# Cloud-Native E-Commerce DevOps Platform

A production-style DevOps portfolio project demonstrating GitHub, Jenkins CI/CD, Docker, AWS ECR, AWS EKS, Kubernetes, Ingress, HPA, Terraform, and monitoring.

## Architecture

GitHub -> Jenkins -> Docker Build/Test -> ECR -> EKS -> Kubernetes Ingress -> Application

## Services

- Frontend: Nginx + HTML/CSS/JavaScript
- Product Service: Node.js + Express
- Order Service: Node.js + Express

## Local Docker Run

```bash
docker compose up --build -d
docker compose ps
```

Open http://localhost

## API checks

```bash
curl http://localhost/api/products
curl http://localhost/api/products/1
curl http://localhost/api/orders
```

## Kubernetes

Kubernetes manifests are under `kubernetes/`.

Before applying them, replace image placeholders in the deployment files with your ECR image URIs.

```bash
kubectl apply -f kubernetes/namespace.yaml
kubectl apply -f kubernetes/configmap.yaml
kubectl apply -f kubernetes/frontend/
kubectl apply -f kubernetes/product/
kubectl apply -f kubernetes/order/
kubectl apply -f kubernetes/ingress/
kubectl apply -f kubernetes/hpa.yaml
```

## Terraform

Terraform files are under `terraform/`. Review variables and AWS costs before applying.

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

## Jenkins

The CI/CD pipeline is in `jenkins/Jenkinsfile`.

Required Jenkins credentials/variables should be configured in Jenkins rather than committed to Git.

## Important

Do not commit AWS credentials, SSH private keys, Docker passwords, Jenkins secrets, or production secrets.
