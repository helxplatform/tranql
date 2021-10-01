pipeline {
    agent {
        kubernetes {
            cloud 'kubernetes'
            label 'agent-docker'
            defaultContainer 'agent-docker'
        }
    }
    stages {
        stage('Install') {
            steps {
                sh '''
                python3 -m pip install --user --upgrade pip
                python3 -m pip install --user -r requirements.txt
                python3 -m pip install --user .
                make install.npm_nobuild
                '''
            }
        }
        stage('Test') {
            environment {
                MOCKING=true
                BROWSER_MODE = "HEADLESS"
                CI=true
            }
            steps {
                sh '''
                make find_chromium
                make test
                '''
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
                sh '''
                echo $DOCKERHUB_CREDS_PSW | docker login -u $DOCKERHUB_CREDS_USR --password-stdin
                make build
                '''
            }
        }
    }
}