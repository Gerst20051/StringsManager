# StringsManager

Organizations can manage translations for the strings in all of their applications.

Open [http://hnswave.co/strings-manager/](http://hnswave.co/strings-manager/) to view it in the browser.

## Setup Repo

[$]> `mkdir StringsManager && cd $_`

[$]> `nvm version-remote --lts=fermium > .nvmrc`

[$]> `nvm install && nvm use`

https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html

### Create Assets

[$]> `mkdir assets`

[$]> `cp path/to/original/logo.svg assets/logo.svg`

### Setup Provider Credentials

https://www.serverless.com/framework/docs/providers/aws/guide/credentials
https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/credentials.md

### Create Backend Service

[$]> `npx serverless create --template aws-nodejs --path strings-manager`

https://github.com/serverless/serverless

#### Init Gitignore File

[$]> `echo 'node_modules' > strings-manager/.gitignore`

#### Init Package JSON File

```bash
cat << JSON > strings-manager/package.json
{
  "name": "strings-manager",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "serverless": "^$(npm show serverless version)"
  }
}
JSON
```

### Create Frontend App

[$]> `npx create-react-app react-strings-manager --use-npm`

https://github.com/facebook/create-react-app

#### Update NPM Start Command

[$]> `sed -i '' 's/react-scripts start/PORT=4000 react-scripts start/' react-strings-manager/package.json`

#### Update NPM Build Command

[$]> `sed -i '' 's#react-scripts build#PUBLIC_URL=http://hnswave.co/strings-manager/ react-scripts build#' react-strings-manager/package.json`

#### Add NPM Deploy Command

[$]> `(FILE='react-strings-manager/package.json'; jq '.scripts.deploy = "rsync -r -a -v -e ssh --delete build/ droplet:/root/www/strings-manager"' $FILE | sponge $FILE)`

#### Update Public Logos

[$]> `./create_logos.sh`

#### Update Public Index HTML

```bash
cat << BASH | bash
app_name='Strings Manager'
old_description='Web site created using create-react-app'
new_description='Organizations can manage translations for the strings in all of their applications'
file='react-strings-manager/public/index.html'
sed -i '' "s/\$old_description/\$new_description/g" \$file
sed -i '' "s/React App/\$app_name/g" \$file
BASH
```

#### Update Public Manifest JSON

[$]> `(NAME='Strings Manager'; FILE='react-strings-manager/public/manifest.json'; jq ".short_name = \"$(echo $NAME)\" | .name = \"$(echo $NAME)\"" $FILE | sponge $FILE)`

## Backend Instructions

[$]> `cd strings-manager`

### Install Dependencies

[$]> `nvm use`

[$]> `npm i`

### Invoke Lambda (Locally)

[$]> `./node_modules/.bin/serverless invoke local -f hello`

## Frontend Instructions

[$]> `cd react-strings-manager`

### Install Dependencies

[$]> `nvm use`

[$]> `npm i`

### Run Development Server

[$]> `npm start` => `PORT=4000 react-scripts start`

Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

### Build & Deploy Production

[$]> `npm run build` => `PUBLIC_URL=http://hnswave.co/strings-manager/ react-scripts build`

[$]> `npm run deploy` => `rsync -r -a -v -e ssh --delete build/ droplet:/root/www/strings-manager`
