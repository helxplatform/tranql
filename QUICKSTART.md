## Setting up server

Note: For building react app nodejs and npm are required.

1. Install node js dependencies.
```shell
make install.npm
```
2. Runs Tranql in a docker container, with reload enabled for the web server. UI is not reloaded on change but one can start 
cd
```shell
make run.local 
```

3. Browse to 
    1. [Tranql UI](http://localhost:8001) 
    2. [Openapi Swagger UI](http://localhost:8001/apidocs)
    3. [Tranql UI served from Nodejs](http://localhost:3000) 
