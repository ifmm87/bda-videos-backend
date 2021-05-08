# Instalación del proyecto

## 1. Requisitos

### 1.1 Instalación Nodejs

#### Distribuciones basadas en Debian
```
sudo apt update
sudo apt install nodejs
```
#### Distribuciones basadas en Arch Linux
```
sudo pacman -S nodejs
```
Alternativamente se puede instalar varias versiones de node en el mismo equipo con ayuda de 
nvm [nvm](https://github.com/creationix/nvm) o [n](https://github.com/tj/n)

### 1.2 Instalar MongoDB
Instalar base de datos Mongo DB (version comunity)
#### Distribuciones basadas en Debian
Instalación de paquetes adicionales al sistema
```
sudo apt install dirmngr gnupg apt-transport-https software-properties-common ca-certificates curl
```
Adicionar la llave GPG de MongoDB al sistema
```
curl -fsSL https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
```
Adicionar el repositorio de mongo al sistema
```
sudo add-apt-repository 'deb https://repo.mongodb.org/apt/debian buster/mongodb-org/4.2 main'
```
Instalar MongoDB
```
sudo apt update
sudo apt install mongodb-org
```
Habilitar el servicio de MongoDB en el sistema
```
sudo systemctl enable mongod --now
```
#### Distribuciones basadas en Arch Linux
Mongo ha sido quitado de los repositorios **Oficiales** de Arch Linux debido a problemas con el licenciamiento,
sin embargo se encuentra dispoble en los repositorios AUR y se lo puede instalar con cualquier manejador de paquetes de AUR como ser **yay**, de la siguiente manera:
```
yay -S mongodb-bin
```
Verificamos y/o habilitamos el servicio en el sistema.
```
sudo systemctl enable mongodb.service
sudo systemctl start mongodb.service
sudo systemctl status mongodb.service
```
## 2. Instalación de la aplicación

#### 2.1 Clonar el código fuente
La rama por defecto es **master**
```sh
git clone https://github.com/ifmm87/bda-videos-backend.git
cd bda-videos-backend
```
Instalacion de dependencias

```sh
npm install
```
#### 2.2 Configuración de la aplicación para la conexion con la base de datos MongoDB

Configurar el archivo config/app.json especificando las rutas para la base de datos

|Ejemplo|
|---|---|
```
{
  "mongoUrl": "mongodb://primary,secondary1,secondary2/movies",
  "mongoUrlDev": "mongodb://primary,secondary1,secondary2/movies",
  "mongoUrlTest": "mongodb://primary,secondary1,secondary2/movies"
}
```
#### 2.3 Cargado de datos de prueba (seeders)
Para inicializar la base de datos
```sh
npm run seeders:dev
```
Para levantar la aplicación
```sh
npm run start:dev
```
La aplicación estara disponible en el puerto 1987

 > [http://localhost:1987](http://localhost:1987)

La documentación de los servicios del API REST  se encuentrán en:
 > [http://localhost:1987/api-docs](http://localhost:1987/api-docs)


