# Configuración del cluster para alta disponibilidad de la *base de datos*
Para la implementación de alta disponibilidad de la base de datos elegiremos 
la combinación CA (Consistency and Availability) mediante **Replica Set**

![replica](docs/replica.svg)

## a). Requisitos de hardware
Utilizaremos instancias de MongoDB instalados en nodos *Físicos*, Un nodo Primary instalado en el host y dos Secondaries configurados en dos Raspberry Pi
ilustraremos la siguiente configuración:

![replica](docs/replica-local.png)

  - Nodo Primario Arch Linux 16gb RAM Core i7 8th gen 
  - Nodo Secundario Raspberry Pi 4/ Raspberry pi OS 4gb Ram 
  - Nodo Secundario Raspberry Pi 4/ Raspberry pi OS 4gb Ram

Notaremos que los tres nodos estan en la misma red.

## b). Requisitos de software
  Para el cluster necesitamos tener instalados mongoDB en todos los nodos.
  Tambien será necesario tener acceso a los dos nodos Raspberry Pi mediante SSH.

#### Instalar MongoDB
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
## c) Configuración Replica Set
