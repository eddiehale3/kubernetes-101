# Kubernetes Sample Application

Basic Kubernetes application for learning purposes. It includes a basic express API served on port 8080, and configuration for Kubernetes Servcie, Deployment, ConfigMap, Secret, and Namespace resources.

The commands assume you will deploy locally to Docker Desktop or Minikube, or `kubectl`'s context is directed at a remote cluster.

## Build and Deployment

1. Build Docker image
```bash
docker build -t demo-app:1 .
```

2. Create resources
```bash
kubectl apply -f k8s/deployment.yaml
```
If successful, the following should appear:

```bash
namespace/demo-namespace created
service/demo-service created
deployment.apps/demo-deployment created
configmap/demo-configmap created
secret/demo-secret created
```

Show workload resources in your newly created namespace. An example output is provided.

```bash
kubectl get all -n demo-namespace
```

Output:
```bash
NAME                                   READY   STATUS    RESTARTS   AGE
pod/demo-deployment-7946fc9958-4kf8x   1/1     Running   0          107s
pod/demo-deployment-7946fc9958-kxs62   1/1     Running   0          107s
pod/demo-deployment-7946fc9958-vjjs5   1/1     Running   0          107s

NAME                   TYPE       CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
service/demo-service   NodePort   10.103.211.219   <none>        80:30007/TCP   107s

NAME                              READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/demo-deployment   3/3     3            3           107s

NAME                                         DESIRED   CURRENT   READY   AGE
replicaset.apps/demo-deployment-7946fc9958   3         3         3       107s
```

Secrets and ConfigMap resources can be displayed with the following:

```bash
kubectl get secrets -n demo-namespace
kubectl get cm -n demo-namespace
```

## Test

In the above deployment we created a Service with type NodePort. In order to verify our application is running, curl the node port specified in the service configuration. A "Hello World!" message should return.

```bash
$ curl localhost:30007
{"message":"Hello World!"}
```

## Cleanup

```bash
kubectl delete -f k8s/deployment.yaml
```

Output:
```bash
namespace "demo-namespace" deleted
service "demo-service" deleted
deployment.apps "demo-deployment" deleted
configmap "demo-configmap" deleted
secret "demo-secret" deleted
```
