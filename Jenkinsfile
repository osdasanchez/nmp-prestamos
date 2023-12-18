 if(env.BRANCH_NAME == 'main') {
    ENVIRONMENT_TO_BUILD='build_production'
    BUCKET_NAME='nmp-prestamos-front'
    ENV_NAME='dist/nmp-prestamos'

}

pipeline {
    agent any
    tools {
        nodejs 'node 20.10.0'
    }

    stages {
        stage('Install') {
            steps {
                sh 'echo $PATH'
                sh 'node --version'
                sh 'npm --version'
                sh 'npm install'
            }
        }
        stage('Build') {
            when {
                expression {
                    currentBuild.result == null || currentBuild.result == 'SUCCESS'
                }
            }
            steps {
                sh "npm run ${ENVIRONMENT_TO_BUILD}"
            }
        }
        stage('Deploy') {
            when {
                expression {
                    currentBuild.result == null || currentBuild.result == 'SUCCESS'
                }
            }
            steps{
                 withAWS(credentials: 'daniel-dev', region: 'us-east-1' ) {
                     sh "aws s3 sync ${ENV_NAME} s3://${BUCKET_NAME}/ --acl \"public-read\""
                 }
            }
        }
    }
}
