pipeline {
    agent any

    environment {
        dockerImage = ''
    }

    stages {
        stage('Checkout') {
            checkout scm
        }
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
                sh 'docker rmi -f frontend localhost:5000/frontend'
            }
        }
        stage('Deployment') {
            steps {
                sh 'echo stage Deployment'
	          }
        }
    }
}

