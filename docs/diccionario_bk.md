#Base de datos Videos
Generated using [DbSchema](https://dbschema.com)





<a name='layout1'>### Layout with Tools
![img](file:/home/ivan/Codigo/bda-videos-backend/diccionario/LayoutwithTools.svg)






### Collection bajas 
| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='movies.bajas__id'>&#95;id</a>| oid  |
| *⬈ | <a name='movies.bajas_video'>video</a>| oid  |
| *| <a name='movies.bajas_motivo'>motivo</a>| string  |
| *| <a name='movies.bajas_createAt'>createAt</a>| date  |
| *| <a name='movies.bajas_updateAt'>updateAt</a>| date  |
| *| <a name='movies.bajas_deleteAt'>deleteAt</a>| date  |
| *| <a name='movies.bajas___v'>&#95;&#95;v</a>| integer  |
| Indexes 
| 🔑 | &#95;id&#95; || ON &#95;id|| Virtual Relations | Vir | Virtual Relation | ( video ) ref [movies&#46;videos](#videos) (&#95;id) 
|

### Collection clientes 
| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='movies.clientes__id'>&#95;id</a>| oid  |
| *| <a name='movies.clientes_nombreCompleto'>nombreCompleto</a>| string  |
| *| <a name='movies.clientes_nit'>nit</a>| string  |
| *| <a name='movies.clientes_celular'>celular</a>| string  |
| *| <a name='movies.clientes_fechaNacimiento'>fechaNacimiento</a>| date  |
| *| <a name='movies.clientes_direccion'>direccion</a>| string  |
| *| <a name='movies.clientes_latitud'>latitud</a>| string  |
| *| <a name='movies.clientes_longitud'>longitud</a>| string  |
| *| <a name='movies.clientes_createAt'>createAt</a>| date  |
| *| <a name='movies.clientes_updateAt'>updateAt</a>| date  |
| *| <a name='movies.clientes_deleted'>deleted</a>| boolean  |
|  | <a name='movies.clientes_deleteAt'>deleteAt</a>| date  |
|  | <a name='movies.clientes_bloqueado'>bloqueado</a>| boolean  |
|  | <a name='movies.clientes_motivoBloqueo'>motivoBloqueo</a>| string  |
|  | <a name='movies.clientes___v'>&#95;&#95;v</a>| integer  |
| Indexes 
| 🔑 | &#95;id&#95; || ON &#95;id|

### Collection descuentos 
| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='movies.descuentos__id'>&#95;id</a>| oid  |
| *| <a name='movies.descuentos_minimo'>minimo</a>| integer  |
| *| <a name='movies.descuentos_maximo'>maximo</a>| integer  |
| *| <a name='movies.descuentos_descuento'>descuento</a>| integer  |
| Indexes 
| 🔑 | &#95;id&#95; || ON &#95;id|

### Collection prestamos 
| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='movies.prestamos__id'>&#95;id</a>| oid  |
| *⬈ | <a name='movies.prestamos_cliente'>cliente</a>| oid  |
| *⬈ | <a name='movies.prestamos_videos'>videos</a>| array  |
| *| <a name='movies.prestamos_fechaDevolucion'>fechaDevolucion</a>| date  |
| *| <a name='movies.prestamos_diasPrestamo'>diasPrestamo</a>| integer  |
| *| <a name='movies.prestamos_descuento'>descuento</a>| integer  |
| *| <a name='movies.prestamos_importeTotal'>importeTotal</a>| integer  |
| *| <a name='movies.prestamos_devuelto'>devuelto</a>| boolean  |
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
| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='movies.tarifas__id'>&#95;id</a>| oid  |
| *| <a name='movies.tarifas_dias'>dias</a>| integer  |
| *| <a name='movies.tarifas_costo'>costo</a>| integer  |
| Indexes 
| 🔑 | &#95;id&#95; || ON &#95;id|

### Collection videos 
| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='movies.videos__id'>&#95;id</a>| oid  |
| *| <a name='movies.videos_titulo'>titulo</a>| string  |
| *| <a name='movies.videos_genero'>genero</a>| array  |
| *| <a name='movies.videos_anioPublicacion'>anioPublicacion</a>| integer  |
| *| <a name='movies.videos_duracion'>duracion</a>| integer  |
| *| <a name='movies.videos_reparto'>reparto</a>| array  |
|  | <a name='movies.videos_director'>director</a>| string  |
|  | <a name='movies.videos_nominaciones'>nominaciones</a>| object  |
| *| <a name='movies.videos_nominaciones.wins'>nominaciones&#46;wins</a>| integer  |
| *| <a name='movies.videos_nominaciones.nominations'>nominaciones&#46;nominations</a>| integer  |
| *| <a name='movies.videos_nominaciones.text'>nominaciones&#46;text</a>| string  |
| *| <a name='movies.videos_costoUnitario'>costoUnitario</a>| double  |
| *| <a name='movies.videos_copias'>copias</a>| integer  |
| *| <a name='movies.videos_createAt'>createAt</a>| date  |
| *| <a name='movies.videos_updateAt'>updateAt</a>| date  |
| *| <a name='movies.videos_deleted'>deleted</a>| boolean  |
|  | <a name='movies.videos_deleteAt'>deleteAt</a>| date  |
|  | <a name='movies.videos___v'>&#95;&#95;v</a>| integer  |
| Indexes 
| 🔑 | &#95;id&#95; || ON &#95;id|




