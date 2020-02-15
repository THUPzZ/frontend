pipeline {
    agent any

    environment {
        dockerImage = ''
    }

    stages {
        stage('Environment') {
            steps {
                sh 'git --version'
                echo "Branch: ${env.BRANCH_NAME}"
                sh 'sudo docker -v'
                sh 'printenv'
            } 
        }
        stage('Test') {
            steps {
                sh 'echo stage test'
            } 
        }
        stage('Build image') {
            steps {
                sh 'sudo docker-compose -f ./docker-compose.yml build'
                //sh 'docker build -t frontend:1 --no-cache .'
                sh 'sudo docker tag frontend:1 localhost:5001/frontend:1'
                sh 'sudo docker push localhost:5001/frontend:1'
            }
        }
        stage('Deployment') {
            steps {
                sh 'echo stage Deployment'
				sshPublisher(publishers: [sshPublisherDesc(configName: 'frontend', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''cd /app/frontend/
bash scriptdeploy.sh''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }

        }
    }
}

