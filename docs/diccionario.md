
# Base de datos Videos

### Diagrama de documentos
![Casos de Uso](docs/diagram.jpg)

### Collection bajas 
| Idx | Nombre | Data Type | Descripción |
|---|---|---|---|
| *🔑 | <a name='movies.bajas__id'>&#95;id</a>| oid  ||
| *⬈ | <a name='movies.bajas_video'>video</a>| oid  | Relacion con la coleccion **videos**|
| *| <a name='movies.bajas_motivo'>motivo</a>| string  | Motivo de la baja p.e. No fue devuelto|
| *| <a name='movies.bajas_createAt'>createAt</a>| date  ||
| *| <a name='movies.bajas_updateAt'>updateAt</a>| date  ||
| *| <a name='movies.bajas_deleteAt'>deleteAt</a>| date  ||
| *| <a name='movies.bajas___v'>&#95;&#95;v</a>| integer  ||
| Indexes 
| 🔑 | &#95;id&#95; || ON &#95;id|| Virtual Relations | Vir | Virtual Relation | ( video ) ref [movies&#46;videos](#videos) (&#95;id) 
|
# Diccionario de datos
### Collection clientes 
| Idx | Nombre | Data Type | Descripción|
|---|---|---|---|
| *🔑 ⬋ | <a name='movies.clientes__id'>&#95;id</a>| oid  |
| *| <a name='movies.clientes_nombreCompleto'>nombreCompleto</a>| string  | Nombre completo del cliente|
| *| <a name='movies.clientes_nit'>nit</a>| string  | Nit del cliente|
| *| <a name='movies.clientes_celular'>celular</a>| string  |Celular del cliente|
| *| <a name='movies.clientes_fechaNacimiento'>fechaNacimiento</a>| date  ||
| *| <a name='movies.clientes_direccion'>direccion</a>| string  ||
| *| <a name='movies.clientes_latitud'>latitud</a>| string  ||
| *| <a name='movies.clientes_longitud'>longitud</a>| string  ||
| *| <a name='movies.clientes_createAt'>createAt</a>| date  ||
| *| <a name='movies.clientes_updateAt'>updateAt</a>| date  ||
| *| <a name='movies.clientes_deleted'>deleted</a>| boolean  ||
|  | <a name='movies.clientes_deleteAt'>deleteAt</a>| date  ||
|  | <a name='movies.clientes_bloqueado'>bloqueado</a>| boolean  ||
|  | <a name='movies.clientes_motivoBloqueo'>motivoBloqueo</a>| string  ||
|  | <a name='movies.clientes___v'>&#95;&#95;v</a>| integer  ||
| Indexes 
| 🔑 | &#95;id&#95; || ON &#95;id|

### Collection descuentos 
| Idx | Nombre | Data Type | Descripción|
|---|---|---|---|
| *🔑 ⬋ | <a name='movies.descuentos__id'>&#95;id</a>| oid  |
| *| <a name='movies.descuentos_minimo'>minimo</a>| integer  | mínimo del intervalo|
| *| <a name='movies.descuentos_maximo'>maximo</a>| integer  | máximo del intervalo|
| *| <a name='movies.descuentos_descuento'>descuento</a>| integer  | Porcentaje de descuento|
| Indexes 
| 🔑 | &#95;id&#95; || ON &#95;id|

### Collection prestamos 
| Idx | Nombre | Data Type | Descripción |
|---|---|---|---|
| *🔑 | <a name='movies.prestamos__id'>&#95;id</a>| oid  |
| *⬈ | <a name='movies.prestamos_cliente'>cliente</a>| oid  |Id de la coleccion cliente|
| *⬈ | <a name='movies.prestamos_videos'>videos</a>| array  | Id de la coleccion video|
| *| <a name='movies.prestamos_fechaDevolucion'>fechaDevolucion</a>| date  | Fecha de la devolucion| 
| *| <a name='movies.prestamos_diasPrestamo'>diasPrestamo</a>| integer  | Dias de prestamo|
| *| <a name='movies.prestamos_descuento'>descuento</a>| integer  | Monto calculado del descuento|
| *| <a name='movies.prestamos_importeTotal'>importeTotal</a>| integer  | Monto total con descuento|
| *| <a name='movies.prestamos_devuelto'>devuelto</a>| boolean  | Indica si el video fue devuelto |
| *| <a name='movies.prestamos_createAt'>createAt</a>| date  |
| *| <a name='movies.prestamos_updateAt'>updateAt</a>| date  |
|  | <a name='movies.prestamos_deleted'>deleted</a>| boolean  |
|  | <a name='movies.prestamos_deleteAt'>deleteAt</a>| date  |
|  | <a name='movies.prestamos___v'>&#95;&#95;v</a>| integer  |
| Indexes 
| 🔑 | &#95;id&#95; || ON &#95;id|| Virtual Relations | Vir | Virtual Relation | ( cliente ) ref [movies&#46;descuentos](#descuentos) (&#95;id) 
|| Vir | Fk_prestamos_clientes | ( cliente ) ref [movies&#46;clientes](#clientes) (&#95;id) 
|| Vir | Fk_prestamos_videos | ( videos ) ref [movies&#46;videos](#videos) (&#95;id) 
|

### Collection tarifas 
| Idx | Nombre | Data Type | Descripción|
|---|---|---|---|
| *🔑 | <a name='movies.tarifas__id'>&#95;id</a>| oid  |
| *| <a name='movies.tarifas_dias'>dias</a>| integer  | Cantidad de dias|
| *| <a name='movies.tarifas_costo'>costo</a>| integer  | Costo de la cantidad de dias del prestamo|
| Indexes 
| 🔑 | &#95;id&#95; || ON &#95;id|

### Collection videos 
| Idx | Nombre | Data Type | Descripción |
|---|---|---|---|
| *🔑 ⬋ | <a name='movies.videos__id'>&#95;id</a>| oid  |
| *| <a name='movies.videos_titulo'>titulo</a>| string  | Nombre de la pelicula|
| *| <a name='movies.videos_genero'>genero</a>| array  | Generos de la pelicula|
| *| <a name='movies.videos_anioPublicacion'>anioPublicacion</a>| integer  | Anio de la publicacion de la pelicula|
| *| <a name='movies.videos_duracion'>duracion</a>| integer  | Duración de la película en minutos|
| *| <a name='movies.videos_reparto'>reparto</a>| array  | Principales actores de la pelicula|
|  | <a name='movies.videos_director'>director</a>| string  |Director de la pelicula|
|  | <a name='movies.videos_nominaciones'>nominaciones</a>| object  | Nominaciones y premios de la pelicula|
| *| <a name='movies.videos_nominaciones.wins'>nominaciones&#46;wins</a>| integer  |
| *| <a name='movies.videos_nominaciones.nominations'>nominaciones&#46;nominations</a>| integer  |
| *| <a name='movies.videos_nominaciones.text'>nominaciones&#46;text</a>| string  |
| *| <a name='movies.videos_costoUnitario'>costoUnitario</a>| double  |Costo unitario de la pelicula|
| *| <a name='movies.videos_copias'>copias</a>| integer  |Cantidad de copias adquiridas|
| *| <a name='movies.videos_createAt'>createAt</a>| date  |
| *| <a name='movies.videos_updateAt'>updateAt</a>| date  |
| *| <a name='movies.videos_deleted'>deleted</a>| boolean  |
|  | <a name='movies.videos_deleteAt'>deleteAt</a>| date  |
|  | <a name='movies.videos___v'>&#95;&#95;v</a>| integer  |
| Indexes 
| 🔑 | &#95;id&#95; || ON &#95;id|




