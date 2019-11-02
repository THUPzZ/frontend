pipeline {
    agent any

    environment {
        dockerImage = ''
    }

    stages {
        stage('Build') {
            steps {
                sh 'echo stage Build '
            }
        }
        stage('Test') {
            steps {
                sh 'echo stage test'
            }
            
        }
        stage('Build image') {
            steps {
                sh 'echo Build image'
            }
        }
        stage('Push image') {
            steps {
                sh 'echo Push image'
            }
        }
        stage('Deployment') {
            steps {
                sh 'echo stage Deployment'
	          }
        }
    }
}

