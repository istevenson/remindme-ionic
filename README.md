## RemindMe

RemindMe is a simple to do list application built with [Ionic](https://ionicframework.com/), an open-source mobile
app development framework which is based on [Angular](https://angular.io/). It supports the ability to add items
to a list, edit, reorder, prioritize, and remove them.

### Getting Started

To run this application locally, choose one of the following options:
* Download the latest release
* Clone the repo: `git clone https://github.com/istevenson/remindme-ionic.git`
* Fork the repo

## Project Structure

```
.
 ├── resources                    # Build files on the specific platforms (iOS, Android) and app icon + splash
 ├── src                          # This is where the app lives - *the main folder*
 ├── .editorconfig                # A helper file to define and maintain coding styles across environments
 ├── .gitignore                   # Specifies intentionally untracked files to ignore when using Git
 ├── .io-config.json              # Ionic ID
 ├── config.xml                   # Ionic config file
 ├── .ionic.config.json           # Global configuration for your Ionic app
 ├── package.json                 # Dependencies and build scripts
 ├── readme.md                    # Project description
 ├── tsconfig.json                # TypeScript configurations
 └── tslint.json                  # TypeScript linting options
```

### Start the project
1. `$ npm install` to install all dependencies
2. `$ ionic cordova platform add android`
3. `$ ionic cordova run android`

Note: The Android emulator must be opened and running prior to using the ```ionic cordova run android``` command

