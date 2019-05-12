# okegke

Deploy to two different k8s clusters by changing the app.yaml file in the lines containing:
```
- name: FROMWHERE
  #value: "Oracle Kubernetes Engine (OKE)"
  #value: "Google Kubernetes Engine (GKE)"
```
Deploy to the clusters:
```
kubectl apply -f app.yaml
```
Grab the service IP:
```
kubectl get svc
```
Test in a browser:

http://<serviceip>/greet




