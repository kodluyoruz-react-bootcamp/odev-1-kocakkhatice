# Kodluyoruz React Bootcamp 1. Ödev 
## Steps 
#### 1- Clone the repo
```bash
git clone <repo-url>
```

#### 2- Initialize project
```bash
npm init -y 
```

#### 3- Install Sucrase and Nodemon
```bash
npm install --save-dev sucrase
npm install --save-dev nodemon
```
For local install, add ```bash  "dev" : "nodemon src/app",```  

#### 4- To set Nodemon to use sucrase, create a file nodemon.json in root directory, with the following code:

```bash
{
  "execMap":{
    "js": "node -r sucrase/register"
  }
}
```
 
#### 5- To build the project, add the following code to package.json scripts:
```bash
 "build" : "sucrase ./src -d ./dist --transforms imports"
```
