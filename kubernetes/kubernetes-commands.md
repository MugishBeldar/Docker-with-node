# Kubernetes commands list

Start minikube

```bash
minikube start
```

Check minikube status

```bash
minikube status
```

Check kubectl version

```bash
kubectl version
```

Tell kubernetes to start config

```bash
kubectl apply -f <yaml file name>
```

Print out information of all running pods

```bash
kubectl get pod <pod name>
```

Deletes the given pod

```bash
kubectl delete pod <pod name>
```

Print out inforamtion of the running pod

```bash
kubectl describe pods <pod name>
```

Executing given in command in a running pod

```bash
kubectl exe -it <pod name> <cmd>
```

Print log from given pod

```bash
kubectl log <pod name>
```

<!-- ----------Dployment commands-------------- -->

# Deployments

> Two way we can deploy

> > First

- Change in docker image and image version
- Then after change image name yaml file
- Then recreate kubernetes deployment

> > Scond :---- Use this

- This is more pereferable way because here we are deploying image on docker hub thats why no local conflict and don't have to work in same terminal and run eval commands.
- Change code make a docker image then push it on docker hub with no tag bydefault it will take latest
- Make changes in yaml file here don't have to specify image tag bydefaul it will take lates.
- Then we have to perform **rollout restart command**.
- ```bash
    kubectl rollout restart deployment <deployment name>
  ```

## For local deployment

> For deployments befor creating image run below command

```bash
eval $(minikube docker-env)
```

> After running this command create image in same terminal then image created inside minikube cluster/node

## Other Commands

Get all deployment pods

```bash
kubectl get deployments
```

Describe deployment

```bash
kubectl describe deployment <depl name>
```

Delete deployment

```bash
kubectl delete deployment <depl name>
```

Get all services
xyz kubectl get services

Describe services
xyz kubectl describe service posts-srv


for mor command check test-1 repo
