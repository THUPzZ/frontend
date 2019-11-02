node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build Docker test'){
     sh 'docker build -t react-test -f Dockerfile --no-cache .'
    }
    stage('Docker test'){
      sh 'docker run --rm react-test'
    }
    stage('Clean Docker test'){
      sh 'docker rmi react-test'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker build -t frontend --no-cache .'
        sh 'docker tag frontend 127.0.0.1:5000/frontend'
        sh 'docker push 127.0.0.1:5000/frontend'
        sh 'docker rmi -f frontend 127.0.0.1:5000/frontend'
      }
    }
  }
  catch (err) {
    throw err
  }
}
