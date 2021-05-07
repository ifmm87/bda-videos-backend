
# Proyecto Final de Módulo
#### Maestría en Ciencia de Datos v2
#### Base de Datos Avanzadas
#### Universidad Católica Boliviana "San Pablo"
#### Ivan Fernando Mujica Mamani

## 1. Introducción
Este proyecto en una aplicacion de tipo API REST, el stack de tecnologías usado es:
  - Nodejs
    - Express
    - Mongoose
  - MongoDB  

La documentación de los servicios del API REST  se encuentrán en:
 > [http://localhost:1987](http://localhost:1987)

Describen la especificación de los servicios web, también como consumirlos.
Este conjunto de servicios satisfacen las reglas de negocio descritas a continuación:

## Reglas de negocio:
#### Gestión de Videos:
  1. Deseo registrar un nuevo video, guardando la siguiente información:

    a. Duración en minutos.
    b. Genero: Drama, Comedia, suspenso, etc.
    c. Titulo de la pelicula, con varios alternativos
    d. Año de publicacións.
    e. Que nominaciones a premios Oscar tuvo y cuales ganó.
    f. Principales actores de la película.
    g. Costo unitario de cada DVD.
    h. Número de unidades adquiridas.
  2. Registrar nuevas copias para una película.
  3. Registrar bajas de copias para una película, específicando la fecha de la baja y la razón (no devuelto,
robo, etc.)
#### Gestión de Clientes:
  1. Deseo poder registrar nuevos clientes, guardando la siguiente información.

    a. Nombre completo.
    b. Número de telefono celular.
    c. Correo electrónico.
    d. Fecha de Nacimiento.
    e. Dirección.
    f. Geolocalización de la dirección.
    g. Fecha de registro en la BBDD como cliente.
  2. Deseo poder actualizar los datos de los clientes cuando sea necesario.
  3. Deseo poder bloquear malos cliente registrando la fecha del bloqueo y la razón por la que se ha
dicididó bloquearlo (los clientes bloqueados no pueden rentar películas).
#### Gestión de Préstamos:
  1. Deseo podér registrar el prestamo de una película, para lo cual se realizan las siguientes actividades.

    a. Buscar película por nombre, genero, actor o nominaciones al Oscar.
    b. Agregar la película que se desea prestar.
    c. Buscar mas peliculas si el cliente desea llevar varias
    d. Registrar la fecha de devolución.
    e. Calcular el importe de acuerdo a la fecha de devolución.
    f. Emitir la factura con el importe total.
  2. Deseo poder definir y modificar costos por día de prestamo.

    a. 1 día: 2 Bs.
    b. 2 días: 3 Bs.
    c. 3 días: 4 Bs
    d. 4 dias: 5 Bs
    e. 5 dias: 6 Bs
    f. No deberían permitirse prestamos mayores a los dias configurados en el software
  3. Deseo poder definir y modificar descuentos por cantidad de películas.
    a. Si lleva de 3 a 5 peliculas 5% de descuento.
    b. Si lleva mas de 5 peliculas 10% de descuento.
### Casos de uso
![Casos de Uso](docs/casos-uso.png)

# 2. Instalación del proyecto
Para una correcta instalación ver el siguiente enlace:
> [INSTALL.md](INSTALL.md)
# 3. Configuración en alta disponibilidad de la base de datos.
> [CONFIG-HA.md](CONFIG-HA.md)
# 4. Entregables

  a) Diccionario de datos
> [INSTALL-HA.md](CONFIG-HA.md)

  b y c) Script de creación y script de llenado de la base de datos.
  Solo si se quiere hacer una instalación de la base de datos y no asi de la aplicación
  ya que la misma crea  y realiza el poblado de la base datos con data de prueba como esta descrito en el punto 2.

> [INSTALL-HA.md](CONFIG-HA.md)

  d) Consultas a la base de datos  

  Solo si se tiene instalado la base de datos y no asi la aplicación, por que cada consulta 
  esta disponible en su endpoint respectivo.



