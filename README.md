<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="https://github.com/abadano2019/AppBazar5A/blob/master/assets/icon.png" width="80" height="80">
    <p> E-COMMERCE BAZAR 5A </p>
  </a>
</div>




<!-- ABOUT THE PROJECT -->
## Introducción

El sitio Bazar 5A surge como un proyecto familiar en donde se vuelcan muchos años de experiencia en venta de articulos de Bazar. Consta de varias secciones como ser cristalería, electrodomésticos, cocina, vajilla entre otros, pudiendo adaptarse a las necesidades del mercado. Dentro de las funcionalidades un cliente puede ingresar a la pagina, navegar entre las opciones disponibles, seleccionar un producto, ver los detalles particulares del producto, agregarlo al carrito de compra.

### Tecnologias utilizadas

Dentro de las tecnologías utilizadas para el desarrollo de la aplicación podemso encontrar:

##### * React Native
##### * Java Script
##### * Firebase rtdb
##### * Firebase Storage
##### * Firebase Autentication
##### * Expo
##### * SQLite
##### * Utilización de la Camara de los dispositivos
##### * Utilización de Geolocalización de Google

React Native y Expo como herramientas base para la elaboración de la aplicación, Java Script para todo lo relacionado a lógica de decisión, Firebase se utilizó como repositorio de imagenes, base de datos y medio de registro y autenticación de usuarios, SQLite como base de datos local y librerias especificas para la utilización de la camara del dispositivo y la geolocalización- 

<!-- GETTING STARTED -->
## Instalación

A continución se presentan instrucciónes para la utilización de la aplicación de forma local.

### Requisitos previos

Se recomienda el uso de Visual Studio Code para la visualización y administración del codigo, se debe tener instalado Node JS, en caso de querer utilizar datos propios, se debe utilizar una cuenta de gmail para la configuración de firebase y el servicio de google maps.

### Pasos a seguir

A continuación se marcan los pasos para poder utilizar la aplicación con datos propios.

1. Configurar el servicio de realtime database en firebase. 
2. Configurar el servicio de autenticación de firebase por intermedio de correo electónico.
3. En caso de querar utilizar imagenes propias se deberá cambiar la url en el archivo productos.js ubicado en la carpeta src/constants/data
4. Configurar los servicios necesarios para el uso de la api de geolocalización de google.maps 
5. De las configuraciones vista en los puntos del 1 al 4 se deben obtener 2 api key una de firebase y otra de google.maps

6. Clonar o descargar el repositorio, antes de ejecutar este comando debe posicionarse en la carpeta donde desea clonar el repositorio
   ```sh
   git clone https://github.com/abadano2019/AppBazar5A.git
   ```
7. Instalar NPM packages
   ```sh
   npm install
   ```
8. En caso de querer utilizar datos propios modificar los archivos categories.js y products.js ubicados en la carpeta src/constants/data 
  

## Estructura de carpetas

![image](https://user-images.githubusercontent.com/48340360/227794486-d415326e-6c50-48be-8f82-f37c6beb055a.png)


Dentro de la carpeta src tenemos la siguiente esctrucutra, una carpeta components donde se encuentran los componentes de la aplicación, una carpeta con el nombre constants donde se encuentaran los datos, la configuración para la conexición a firebase, la conexión al servicio de google.maps y la definición de colotes para ser utilizados por los estilos de los distintos componentes y vistas, una carpeta models donde se encuentran los distintos modelos a utilizar por las bases de datos, una carpeta navigation con toda la estructura y archivos para la navegación de las pantallas por intermedio de @react-navigation, una carpeta con el nombre screens con todas las vistas que la apliación utiliza, una carpta con el nombre Store con la implementación de 'redux-thunk' y una carpeta utils con elementos de uso reutilizable como ser el formulario de inicio y registro de sesión.

#### components

![image](https://user-images.githubusercontent.com/48340360/227795274-ca088124-6a0d-486a-a4de-fd4999d8a43c.png)

Dentro de la carpeta components podemos destacar los siguientes archivos:
* cart-item.jsx: encargado de desplegar un elemento del carrito con los botones de mas y menos para aumentar o disminuir la cantidad del producto seleccionado, tambien cuenta con la posibilidad de borrarse del carrito.

* category-item.jxs: encargado de desplegar una tarjeta con el nombre de una categoría. El dato se encuentra disponible en el archivo categories.js en la ruta /src/constants/data

* image-selector.jsx: encargado de verificar permisos de usa de la camara del dispositivo y posterior toma de imagen.

* order-item.jsx: encargado de desplegar la información de una orden, esta información se encuentra en firebase en rtdb por usuario de generación de orden.

* place-item.jsx: encargado de desplegar la información de una dirección cargada por el usuario, la información de guardea en SQLite, la dirección puede ser borrada por intermedio del icono de borrado.

* product-item.jsx: encargado de desplegar la información de un producto para la vista por categorías.

#### constants

![image](https://user-images.githubusercontent.com/48340360/227796245-eb228be7-b68c-4015-bf43-046904765d8a.png)

* data: contiene archivos .js con la información necesaria para el renderizado de lo componentes de productos y categorias, además cuenta con otros archivos de proebs en desarrollo.
* firebase: cuenta con la configuración necesaria para la conexión con firebase para el uso de la rtdb y el servicio de autenticación y registro de usuarios. 
* db: cuenta con la configuración necesaria para la conexión con SQLite y las transacciones de inicialización, inserción, busqueda y borrado de datos que la aplicación utiliza.
* maps: cuenta con la configuración necesaria para la conexión con el servicio de google.maps
* theme: cuenta con las definiciones de colores utilizada por los estilos de los componentes.

#### models

![image](https://user-images.githubusercontent.com/48340360/227796737-23bfa035-bd2c-473b-a11c-48c41c0f5e67.png)

* places.js: archivos con el modelo especifico utilizado por SQLite para las direcciones cargados por los usuarios.

Nota: falta integrar la definción de los restantes modelos de datos 

#### navigation

![image](https://user-images.githubusercontent.com/48340360/227796925-c6661f5a-eaaf-405b-9e93-59cc1016f376.png)

La aplicación cuanta con 2 stack de navegación uno para las direcciones, donde se dan de alta, se listan y se pueden ver en detalles y otro para las categorias de los productos donde se pueden listar los productos por categoría y luego ver en detalle. El primer stack se encuenta bajo el item del menú (Tab de navegación) shop y el segundo stack para el item places.

![image](https://user-images.githubusercontent.com/48340360/227798283-a0e58de9-b321-49e1-97e1-bf0915371e95.png)

Luego se pueden ver otros tres items uno para ver las ordenes generadas por el usuario, el historico de órdenes (se guardan en una base de dato de firebase), otro para ver el carrito del usuario, no tienen persistencia una vez que se cierra la aplicación el carrito se borra y un formulario de contacto simple. 

#### vistas

![image](https://user-images.githubusercontent.com/48340360/227798846-5ffcd2bc-2f3b-4bd4-858f-72d0a2cc370f.png)


En esta carpeta contamos con las paginas que la oplicación utiliza:
* Home.jsx: encargada de mostrar el componente ItemListConteiner.jsx el cual contendrá todos los productos de la base de datos
* Category.jsx: encargada de mostra el componente ItemDetailConteiner.jsx el cual contndrá todos los productos de la base de datos de una categoría particular.
* Detail.jsx: encargada de mostrar los detalles de un producto en particular, para este caso se utiliza el componente ItemDetailConteiner.jsx.
* NotFoundPage.jsx: encargada de mostrar un mensaje de error 404 en caso de no encontrar un producto.
* Cart.jsx: encargada de desplegar por pantalla todos los elementos del carrito además de mostrar el subtotal, el iva sobre el subtotal, el costo del envío y el total de la compra, desde esta pagina se llama al formulario el cual solicita los datos del cliente para poder terminar la compra. Al confirmar la compra el cliente recibe por pantalla el nro de pedido correspondiente al id de la orden de compra cargada en la base de datos.

#### store

![image](https://user-images.githubusercontent.com/48340360/227798900-d28078ab-0b8c-441e-8b97-0b7af89cb666.png)

![image](https://user-images.githubusercontent.com/48340360/227798921-8bfc52b5-94e8-40e8-b827-b8953b9dacec.png)

![image](https://user-images.githubusercontent.com/48340360/227798951-b6d5bbc8-7288-4512-82b1-b2614d8c6bfa.png)

![image](https://user-images.githubusercontent.com/48340360/227798969-81dbed76-08c9-468e-a344-399950e56414.png)



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
