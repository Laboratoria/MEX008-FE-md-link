# Libreria MDLinks setg

## Preámbulo
MD-Links es un proyecto en el cual se desarrolla una libreria para leer el contenido de archivos markdown (.md), buscar links, mostrar opciones de interacción.

## Objetivo del proyecto
CCrear una libreria que permita leer una ruta, revisar si hay un documento markdown (.md), leerlo y analizar sí contiene links 
## Diagrama de Flujo

![diagrama-flujo](https://github.com/silviatrinidad/MEX008-FE-md-link/blob/master/img/Diagrama%20en%20blanco.jpeg)

## INSTRUCCIONES

### Instalación

* GLOBAL
```
sudo npm install -g mdlinks-setg
```
* LOCAL
```
sudo npm install <mdlinks-setg>
```

## Modo de uso

* Global
Ejecutamos mdlinks-setg
* Local


### CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la terminal:

`mdlinks-setg <path-to-file> [options]`

Por ejemplo:

```sh
$ mdlinks-setg ./some/example.md

./some/example.md http://algo.com/2/3/ Link a algo

./some/example.md https://otra-cosa.net/algun-doc.html algún doc

./some/example.md http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ mdlinks-setg ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ mdlinks-setg ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ mdlinks-setg ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```


