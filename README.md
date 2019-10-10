
# Documentación Tarea Docker SA

## Descripción de la tarea

Crear al menos dos contenedores en Docker Compose que involucren:
1. Un servidor web
2. Una base de datos
El servidor web debe hacer alguna consulta a la base (lenguaje libre) y presentar información en el puerto 80 del host.
El Docker Compose debe poder darle los datos a la base en algún archivo que la base importe al iniciar y luego sea lo que presente.
Entrega en repositorio y video de demostración.

## Solución implementada
Se creó una base de datos con una tabla clientes y también un servidor para hacer una consulta a la base de datos para obtener la información del cliente.

## Documentación técnica

### Herramientas utilizadas
* **Lenguaje utilizado:** JavaScript NodeJs 8.12

* **Framework:** Express

* **S.O:** Windows 10 Pro

* **Editor:** Visual Studio Code

* **Docker:** Docker Desktop Windows 10

* **Sistema de control de versiones:** GitHub

* **Módulos utilizados:** Express, BodyParser, Sync-Request


### Instalación:
Para la ejecución de las API REST, se debe de hacer en un entorno de ejecución de Node, por lo que es necesario tener instalado *NodeJs*, en cualquier sistema operativo. Como ya se aclaró, se utilizaron diferentes módulos para el funcionamiento del software, por lo que se deben de instalar de la siguiente manera sobre el entorno: `npm install ` Además se debe de tener instalado docker y docker-compose para hacer funcionar la aplicación. .

### Git:
Se utilizó Git como sistema de control de versiones, se puede verificar el código utilizado en el repositorio https://github.com/DanielGarcia097/-SA-TareaDocker.git. Se utilizó una sola rama Master y una develop, ya que es una aplicación sencilla.

Para obtener el código realizado basta con clonar el repositorio de la siguiente forma:
`git clone https://github.com/DanielGarcia097/-SA-TareaDocker.git`.

### Estándar de código utilizado:
El estándar de código utilizado es **JavaScript Standard Style** es una guía de estilos JavaScript, con linter y corrección automática de código. 

Para la instalación de esta herramienta bastan con `npm install standard --save-dev`.
Documentación de la herramienta: https://standardjs.com/readme-esla.html.
La belleza de JavaScript Standard Style es qué es simple. 

Algunas características del estándar de código.

* 2 espacios como sangría.
* Usar comillas simples en cadenas de texto con la excepción de escapado de texto
* No dejar variables sin usar – esta captura toneladas de bugs!
* Sin punto y coma

### Link del demo:
https://youtu.be/5WbZRFPT4V4













