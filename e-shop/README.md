# E-Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

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


## Commands to create modules and components
ng g m @admin/pages/links --routing
ng g c @admin/pages/links --skipTests

## iniciar servicio Mongo
brew services start mongodb-community@4.2
mongo

## Usar base de datos
use <nombre_base_de_datos>

## ver collecciones
show collections

## Crear colleccion
db.createCollection('<nombre_coleccion>')

## Borrar Coleccion
db.<nombre_coleccion>.drop()

## mostrar documentos de una coleccion
db.<nombre_coleccion>.find().pretty()