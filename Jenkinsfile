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
                sh 'docker -v'
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
                sh 'docker build -t frontend --no-cache .'
                sh 'docker tag frontend localhost:5000/frontend'
                sh 'docker push localhost:5000/frontend'
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

