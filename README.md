# MY-App

Steps to setupon local machine :

Clone the repo in local machine : 
    1. Go to location where you want to clone the repo.
    2. Open cmd/ git bash and run : git clone https://github.com/ankitmadridista/AngularBikeRental.git
    3. Open Visual Studio Code > File > New Window > Open Folder > Give path of : AngularBikeRental\my-app
    4. Open terminal from VS Code run command : npm i(to install dependencies)
    5. To run the application run command : ng serve 
    5. If this error occurs - Error: error:0308010C:digital envelope routines::unsupported
        run command set NODE_OPTIONS=--openssl-legacy-provider
    6. Re-run the application by running command : ng serve


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
