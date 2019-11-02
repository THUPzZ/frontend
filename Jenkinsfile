node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'sudo docker -v'
      sh 'sudo printenv'
    }
    stage('Build Docker test'){
     sh 'sudo docker build -t react-test -f Dockerfile --no-cache .'
    }
    stage('Docker test'){
      sh 'sudo docker run --rm react-test'
    }
    stage('Clean Docker test'){
      sh 'sudo docker rmi react-test'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'sudo docker build -t frontend --no-cache .'
        sh 'sudo docker tag frontend 127.0.0.1:5000/frontend'
        sh 'sudo docker push 127.0.0.1:5000/frontend'
        sh 'sudo docker rmi -f frontend 127.0.0.1:5000/frontend'
      }
    }
  }
  catch (err) {
    throw err
  }
}
