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
                sudo apt-get install -y libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libgbm-dev
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
                make test_puppeteer
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