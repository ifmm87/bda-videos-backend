# Microservicio para interoperar datos personales básicos con SEGIP

Este proyecto tiene la finalidad de interoperar y validar los datos personales mediante los servicios de SEGIP.


## Flujo:

1. Se crea una configuración desde el plugin en el frontend, donde se especifica que campos se enviara desde el cliente y los datos que el microservicio recuperará desde los servicios del SEGIP. También se especifica que con que metodo se va interoperar (recuperar o contrastar).

2. Se recibe datos asociados con una configuracion, el microservicio busca esta configuración y arma la peticion  para consumir los métodos del servicio de Segip.

3. Se guarda cada respuesta desde los metodos del servicio de Segip con una bandera indicando que el dato interoperado es válido o no.

4. Se valida cada respuesta para verificar la integridad de los datos que llegaran desde una aplicacion cliente.

# Instalacion del Microservicio
Para una correcta instalación ver el siguiente enlace
> [INSTALL.md](INSTALL.md)
