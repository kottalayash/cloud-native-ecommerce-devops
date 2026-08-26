# Architecture

```text
Developer
   |
 GitHub
   |
Jenkins CI/CD
   |
Docker Build/Test
   |
Amazon ECR
   |
Amazon EKS
   |
Kubernetes
 |        |        |
Frontend Product  Order
   \        |       /
    \-------|------/
            |
         Ingress
            |
          Users

Prometheus -> Grafana
```
