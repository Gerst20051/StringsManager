# StringsManager

Organizations can manage translations for the strings in all of their applications.

Open [http://hnswave.co/strings-manager/](http://hnswave.co/strings-manager/) to view it in the browser.

## Setup Repo

[$]> `mkdir StringsManager && cd $_`

[$]> `nvm version-remote --lts=fermium > .nvmrc`

[$]> `nvm install && nvm use`

https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html

### Setup Provider Credentials

https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/credentials.md

### Create Backend Service

[$]> `npx serverless create --template aws-nodejs --path strings-manager`

https://github.com/serverless/serverless

### Create Frontend App

[$]> `npx create-react-app react-strings-manager --use-npm`

https://github.com/facebook/create-react-app
