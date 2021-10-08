pipeline {
    agent {
        kubernetes {
            cloud 'kubernetes'
            yaml '''
              apiVersion: v1
              kind: Pod
              spec:
                containers:
                - name: agent-docker
                  image: helxplatform/agent-docker:latest
                  command:
                  - cat
                  tty: true
                  volumeMounts:
                    - name: dockersock
                      mountPath: "/var/run/docker.sock"
                volumes:
                - name: dockersock
                  hostPath:
                    path: /var/run/docker.sock
            '''
        }
    }
    stages {
        stage('Install') {
            steps {
                container('agent-docker') {
                    sh '''
                    python3 -m pip install --user --upgrade pip
                    python3 -m pip install --user -r requirements.txt
                    python3 -m pip install --user .
                    make install.npm_nobuild
                    '''
                }
            }
        }
        stage('Test') {
            environment {
                MOCKING=true
                BROWSER_MODE = "HEADLESS"
                SANDBOX=false
                CI=true
            }
            steps {
                container('agent-docker') {
                    // Run the webserver in the background.
                    // Use curl to wait until the webserver is serving localhost:3000 and redirect stout and stderr to null device.
                    // Run Puppeteer and Python tests once React app is ready to be used.
                    sh '''
                    make run.web &
                    curl -X GET --retry-connrefused --retry 120 --retry-delay 1 http://localhost:3000
                    make test
                    '''
                }
            }
        }
        stage('Publish') {
            when {
                buildingTag()
            }
            environment {
                DOCKERHUB_CREDS = credentials('rencibuild_dockerhub_machine_user')
            }
            steps {
                container('agent-docker') {
                    sh '''
                    echo $DOCKERHUB_CREDS_PSW | docker login -u $DOCKERHUB_CREDS_USR --password-stdin
                    make build
                    '''
                }
            }
        }
    }
}