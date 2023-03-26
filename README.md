<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/abadano2019/AppBazar5A/tree/master/assets/logo.png" alt="Logo" width="80" height="80">
    <p> E-COMMERCE BAZAR 5A </p>
  </a>
</div>





<!-- ABOUT THE PROJECT -->
## Introducción

El sitio Bazar 5A surge como un proyecto familiar en donde se vuelcan muchos años de experiencia en venta de articulos de Bazar. Consta de varias secciones como ser cristalería, electrodomésticos, cocina, vajilla entre otros, pudiendo adaptarse a las necesidades del mercado. Dentro de las funcionalidades un cliente puede ingresar a la pagina, navegar entre las opciones disponibles, seleccionar un producto, ver los detalles particulares del producto, agregarlo al carrito de compra

### Tecnologias utilizadas

Dentro del amplio abanico de tecnologías disponibles para el desarrollo de la aplicación se utilizaron:

##### * React
##### * Java Script
##### * Boostrap
##### * Sass
##### * Firebase
##### * React-Icons
##### * React-spinners
##### * SweetAlert

React como herramienta base para la elaboración de la aplicación, Java Script para todo lo relacionado a lógica de decisión, Boostrap se eligió como framework para el armado de componentes, SASS para los estilos, Firebase se utilizó como repositorio y como base de datos, React-Icons para la utilización de iconos, react-spinners para la utilización de loaders y sweetalert para la presentación de mensajes por pantalla.

<!-- GETTING STARTED -->
## Instalación

A continución se presentan instrucciónes para la utilización de la aplicación de forma local.

### Requisitos previos

Se recomienda el uso de Visual Studio Code para la visualización y administración del codigo, se debe tener instalado Node JS, en caso de querer utilizar información personal, se debe utilizar una cuenta de gmail para la configuración de firebase.

### Pasos a seguir

A continuación se marcan los pasos para poder utilizar la aplicación con datos propios.

1. Configurar la base de datos en firebase con los siguiente campos en una colección con el nombre items la cual es necesaria para la carga de información de los productos:
 * categoria: string (corresponde a la categoría del producto para luego utilizar como filtro)
 * descripcion: string (descripción del producto ofrecido)
 * detalle: string (detalle del producto ofrecido)
 * img_src: string (url de la imagen del producto pude ser desde internet o como en el caso del proyecto desde el storage de firebase)
 * precio: numero (precio del producto ofrecido)
 * stock: numero (cantidad de productos disponibles)
 * tag: string (información particular y especifica del producto)
 * titulo: string (Titulo o nombre del producto ofrecido)





2. Clonar o descargar el repositorio, antes de ejecutar este comando debe posicionarse en la carpeta donde desea clonar el repositorio
   ```sh
   git clone https://github.com/abadano2019/bazar5A.git
   ```
3. Instalar NPM packages
   ```sh
   npm install
   ```
4. En caso de querer utilizar una base de datos propia ingresar los datos proporcionados por firebase en el archivo `config.js`
  

## Estructura de carpetas

Dentro de la carpeta src tenemos la siguiente esctrucutra, una carpeta api con los archivos necesarios para la conexión a la base de datos, una carpeta components donde se encuentran los archivos jsx, componentes a renderizar, una carpeta context en la cual tenemos creado un archivo con el contexto del carrito, una carpeta js para clases varias en este caso tenemos la clase alertas.js para la utilización de alertas de sweetalerts, una carpeta pages con las páginas disponibles de la aplicación, una carpeta sass con el archivo App.sass con todos los estilos.

#### api
Dentro de la carpeta api tenemos los siguientes archivos:
* config.js: archivo que contiene la información necesaria para la conexión con firebase, en el se utilizan variables de entorno las cuales toman la información del archivo .env 

* products.js: archivo que contiene la logica necesaria para poder realizar las consultas a la base de datos sobre la colección de productos (items)

* order.js: archivo que contiene la logica necesaria para poder realizar las consultas a la base de datos sobre la colección de ordenes (orders)

#### Components

* AddWidget.jsx: componente que contiene un icono con el simbolo de +.
* SubstractWidget.jsx: componente que contiene un icono con el simbolo de -.
* CartWidget.jsx: compoente que contiene un icono con un carrito de compras. 
* CounterCart.jsx: componente que basicamente suma y resta una variable controlando que no exceda un stock dado por parametro y que no sea menor o igual a cero. Es utilizado para el detalle de los productos para poder agregar una cantidad determinada de productos al carrito.
* Footer.jsx: componente que renderiza los datos del footer del sitio
* FormCompra.jsx: componente encargado de cargar la orden de compra de un cliente a la base de datos, el formulario solicita el nombre, apellido, teléfono, email y email de verificación del cliente, por intermedio del contexto del carrito también se toman los datos de los productos para cargar a la base de datos. La colección utilizada tiene el nombre de orders y en caso de estar vacia se crea. El formulario es modal, el botón de confirmar compra no se activa hasta que no tenga todos los datos completos, en caso de que los campos Email y verificar Email sale un mensaje de error como que los mismos no coinciden, tembién se controla el formato de texto ingresado para el email por intermedio de expresiones regulares.
* Item.jsx: componente encargado de desplegar información de forma visual de los productos cargados en la base de datos. La información se despliega dentro de cards en las paginas de categorias y home.
* ItemDescriptionExt.jsx: componente encargado de presentar información extendida de los productos, es utilizado por el componente ItemDetail.jsx
* ItemDetail.jsx: componente encargado de presentar de forma detallada las caracteristicas de un producto, similar al componente Item.jsx pero con más información, con el componente counterCart y desplegando la información en toda la pantalla.
* ItemDetailContainer.jsx: componente encargado de presentar el compontente itemDetail.jsx, previo a la validación de la existencia del mismo, en caso contrario mostrará un mensaje de error 404, también presenta el componete LoaderClock para mostrar el procesamiento de información.
* ItemListContainer.jsx: componente encargado de pedir y recibir la información de la base de datos, en caso de ser utilizado por la pagina home recibe toda la información y en caso de ser llamado por la pagina Category recibe y muestra la información para una categoría particular.
* Loader.jsx: componente que despliega la leyenda cargando..., con el fin de mostrar el procesamiento de información.
* LoarderClock.jsx: componete similar al componente Loader.jsx con la diferencia que en este se muestra un reloj con sus ajujas girando.
* NavBar.jsx: componente encargado de presentar el header de la aplicación, la barra superior con sus links incluyendo icono de la pagina y el icono del carrigo.
* Tag.jsx: componente encargado de mostrar una breve información y muy especifica del producto. Es utilizado por el componente Item.jsx.
* UserLayout.jsx: componente para la utilización del componente Route

#### Context

Con el fin de poder mostrar la cantidad de elementos que tiene el carro de compras de una forma más simple y evitando el flujo de datos entre compontes es que se utiliza un contexto para el carro de compras. Cada vez que se agrega un elemento al carrito de compras se utiliza el contexto para agregarlo al pedido final. Además el contexto del carro cuenta con el calculo del precio total, el iva de la compra total, el precio del envio y el total de la compra.

#### js
En esta carpeta se presenta un archivo el cual implemente la biblioteca de sweetAlert para poder mostrar mensajes de forma modal por pantalla. Se implementan dos formas posibles de presentar mensajes, una de forma animada el cual recibe por parametro el mensaje a mostrar y el icono que se desea ejemplo: error, sucess, warning y otro simple que solo muestar el mensaje que se desea mostrar.  

#### pages 
En esta carpeta contamos con las paginas que la oplicación utiliza:
* Home.jsx: encargada de mostrar el componente ItemListConteiner.jsx el cual contendrá todos los productos de la base de datos
* Category.jsx: encargada de mostra el componente ItemDetailConteiner.jsx el cual contndrá todos los productos de la base de datos de una categoría particular.
* Detail.jsx: encargada de mostrar los detalles de un producto en particular, para este caso se utiliza el componente ItemDetailConteiner.jsx.
* NotFoundPage.jsx: encargada de mostrar un mensaje de error 404 en caso de no encontrar un producto.
* Cart.jsx: encargada de desplegar por pantalla todos los elementos del carrito además de mostrar el subtotal, el iva sobre el subtotal, el costo del envío y el total de la compra, desde esta pagina se llama al formulario el cual solicita los datos del cliente para poder terminar la compra. Al confirmar la compra el cliente recibe por pantalla el nro de pedido correspondiente al id de la orden de compra cargada en la base de datos.

#### sass 
La carpeta sass cuenta con un archivo App.sass el cual contiene todos los estilos de la aplicación

### Otros archivos

#### App.js
Contiene la estructura de ruteo de la aplicación y se define el contexto del contexto del carrito de compras.

#### .env
Contiene las variables de entorno necesarias para el funcionamiento de la aplicación, las variables de conexión con la base firebase las cuales deberán ser seteadas.

<!-- ROADMAP -->
## Mejoras

Esta es una primera versión del proyecto Bazar5A, en el cual quedan para definir en un nuevo alcance otras funcionalidades como ser:
* Modificar la cantidad de elementos de un producto en el carrito
* Eliminar un producto del carrito desde la pagina de despliege de los datos de carrito, se presentan los botones pero no la logica para poder realizarlo.
* Generar nueva vista para ver el historial de ordenes de un cliente
* Hostear la aplicación en el servicio de hosting de firebase
* Implementar algun servicio de autenticación
* Generar nuevas colecciones en la base de datos como una lista de productos deseados o favoritos.
* Agregar más detalles a los productos, como ser un carrusel de otras imagenes. (se debe contar con un catalogo de imagenes para el producto.)
* Generar las validaciones necesarias del stock disponible en la base de datos.

entre otras cosas

# ANEXO

Proyecto desarrollado utilizando React JS [Create React App](https://github.com/abadano2019/bazar5A).

## Comandos disponibles

### `npm start`

Desde una terminal donde se esté ubicado en la raiz del proyecto se puede iniciar la aplicación ejecutando el comando npm start
Se ejecuta en la siguiente url: [http://localhost:3000](http://localhost:3000).

Previo a la ejecución de la app se deben instalar las dependencias del proyecto.

### `npm install`

Ejecute el comando npm install para instalar todas las dependencias del archivo node_modules del proyecto.

### `npm test`

Para ejecutar el modo iterativo de ejecución (test) ejecutar npm test
Para mayor información dirigirse a la siguiente pagina: [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Para generar un ejecutable para subir a producción ejecute el comando npm run build

Para mayor información dirigirse a la siguiente pagina: [deployment](https://facebook.github.io/create-react-app/docs/deployment).

## Learn More

Si desea aprender sobre React JS dirijase a los siguientes links: 

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
[React documentation](https://reactjs.org/).


<!-- CONTACT -->
## Contact

Ariel Badano - abadano05@gmail.com

Project Link: [https://github.com/abadano2019/bazar5A](https://github.com/abadano2019/bazar5A)
