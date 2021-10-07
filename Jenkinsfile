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
                    sh '''
                    make run.web &
                    wget --retry-connrefused --tries=120 --waitretry=1 -q http://localhost:3000 -O /dev/null
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