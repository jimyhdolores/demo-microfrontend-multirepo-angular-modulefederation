# Demo Microfront Angular 15 con Module Federate - enfoque Multi Repo (proyectos independientes)

Este proyecto se usa la version 15.2. de Angular y la versión 18.10.0 de NodeJS

Crearemos los siguientes proyectos:

## mf-shell

Este proyecto sera nuestro **contenedor** de microfrontend

```console
ng new mf-shell --style=scss --routing=true
```

## mf-payment

```console
ng new mf-payment --style=scss
```

## mf-shopping

```console
ng new mf-shopping --style=scss --routing=true
```

# Activación de la federación de módulos para proyectos angular

El paquete **@angular-architects/module-federation** proporciona un generador personalizado. Si deseas aprender más de esta librería y arquitectura Angular visita el siguiente link:
https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/

Agregamos la librería en cada uno de los proyectos
```console
npm i -D @angular-architects/module-federation
```

Una vez instalada la librería agregaremos el uso de Module Federation a nuestros MF (microfrontends) y agregaremos unas configuraciones:

```console
ng add @angular-architects/module-federation --project mf-shell --port 4200 --type host
ng add @angular-architects/module-federation --project mf-shopping --port 4201 --type remote
ng add @angular-architects/module-federation --project mf-payment --port 4202 --type remote
```

Listo, lo que hara este comando es crear unos archivos **webpack.config.js** en cada uno de nuestros MF para poder hacer uso de la federación de modulos.

Luego solo es cuestion de configurar los MF **"remotos"** y el **"host"**

Ejemplo de configuración para el MF shopping:

```javascript
const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfShopping",
  exposes: {
    "./ProductsModule":
      "./projects/mf-shopping/src/app/products/products.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
```
# Comunicación entre MF usando PubSubJS

Para poder enviar información entre MF podemos usar la librería PubSubJS, más información en https://github.com/mroderick/PubSubJS

Instala la libreía en los MF que los necesite, en nuestro caso serna los MF Shopping y Shell:

```console
npm i pubsub-js
```
Luego instala los **types** para evitar problemas con typescript:

```console
npm i -D @types/pubsub-js
```

y por último agrega el atributo **allowSyntheticDefaultImports** en el tsconfig

```json
"compilerOptions":{
  ...,
  "allowSyntheticDefaultImports": true
}
```

**Suscríbete a mi canal** 😎

https://www.youtube.com/c/LogiDev

**Sígueme en mis redes:**

👉Facebook : https://facebook.com/LogiDev25
búscame como: @LogiDev25

👉Instagram: https://instagram.com/jimyhdolores/
búscame como: @jimyhdolores

👉Twitter: https://twitter.com/jimyHDolores
búscame como: @jimyHDolores

👉LinkedIn:https://linkedin.com/in/jimyhuachodolores/
