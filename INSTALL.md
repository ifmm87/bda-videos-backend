# Instalación del proyecto

# Requisitos

## Instalar node

Instalar node 8.9.x usando [nvm](https://github.com/creationix/nvm) o [n](https://github.com/tj/n)

## Instalar MongoDB
Instalar base de datos mongo DB
## Configuración

Configurar el archivo config/app.json especificando las rutas para la base de datos

|Ejemplo|
|---|---|
```
{
  "mongoUrl": "mongodb://localhost/microservicio-segip",
  "mongoUrlDev": "mongodb://localhost/microservicio-segip-dev",
  "mongoUrlTest": "mongodb://localhost/microservicio-segip-test"
}
```

## Comandos
Si desea posicionarse en la rama develop
```sh
$ git checkout develop
```

Instalar dependencias
```sh
$ npm install
```
Para inicializar la base de datos en producción
```sh
$ npm run seeders
```
Para inicializar la base de datos en desarrollo
```sh
$ npm run seeders:dev
```
Para ejecutar la aplicación en producción
```sh
$ npm start
```
Para ejecutar la aplicación en desarrollo 
```sh
$ npm run start:dev
```

Para verificar la correcta instalación se puede ejecutar los tests
```sh
$ npm  run test
```
Para ver el apidoc de la aplicación, debe abrir el siguiente enlace en el navegador(despues de inicializar la aplicación):

 > [http://localhost:1987](http://localhost:1987)



