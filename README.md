# Gatling Suite on EKS with Istio

## Overview
This project runs Gatling performance tests against the PetClinic API deployed in Amazon EKS. It uses Istio for ingress routing and Grafana + Prometheus for observability.

## Stack
- Gatling (Scala)
- Amazon EKS
- Istio Ingress Gateway
- Prometheus + Grafana
- Spring PetClinic API

## Setup Steps

### 1. AWS & Tools
- Create AWS account
- Install: kubectl, helm, eksctl, docker, aws cli

### 2. EKS Cluster
```bash
eksctl create cluster --name perf-cluster --region eu-west-2 --nodes 2 --node-type t3.medium
kubectl get nodes

3. Deploy PetClinic API
• 	Build Docker image
• 	Push to ECR
• 	Apply Kubernetes manifests:

kubectl apply -f k8s/petclinic-deployment.yaml
kubectl apply -f k8s/petclinic-service.yaml

4. Expose API
• 	Set service type to LoadBalancer
• 	Get external IP:

kubectl get svc petclinic-service
5. Observability Stack
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace
kubectl port-forward svc/grafana 3000:80 -n monitoring

6. Gatling Simulation
- Clone repo
- Write Scala simulation
- Run test:

Summary:
“I deployed PetClinic in EKS with Istio ingress and ran Gatling simulations to validate performance and correctness. All requests passed with low latency, and Grafana dashboards confirmed full-stack observability.
