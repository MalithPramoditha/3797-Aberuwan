pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_CREDENTIALS = 'your_docker_registry_credentials_id'
        DOCKER_IMAGE_NAME = 'your_image_name'
        DOCKERFILE_PATH = './Dockerfile'
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE_NAME, '-f ${DOCKERFILE_PATH} .')
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    docker.image(DOCKER_IMAGE_NAME).run('-p 8080:8080', '--name my-container')
                }
            }
        }
    }

    post {
        always {
            script {
                docker.image(DOCKER_IMAGE_NAME).remove(force: true)
            }
        }
    }
}
