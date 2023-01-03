# Cookies.js

Script javascript (vanilla) que permite guardar, obtener y eliminar cookies.

Cada cookie se guarda en el directorio raíz del sitio web, por lo cuál se mantiene global a TODO el sitio web.
La separación entre cookies está dada por un punto y coma, por ende, la función getCookie() separa en tokens cada cookie y luego recupera el dato requerido.


## ¿Cómo importarlo dentro de un documento HTML?

Suponiendo que el script y el html está en nuestra carpeta raíz.
```
<script src="cookies.js"></script>
```

## Uso de setCookie(name, value, days)

* @param name, de preferencia, espera un string (cadena de texto). Es el nombre de la cookie a guardar.
* @param value, de preferencia, espera un string (cadena de texto). Es el valor que tendrá la cookie.
* @param days puede recibir un int sin problemas. Es la cantidad de días que se mantendrá vigente la cookie en PATH.

### Ejemplo
```
<a onclick="setCookie('cookieTest', 'mi valor', 30);">Guardar una cookie de prueba</a>
```

## Uso de getCookie(name)
* @param name, de preferencia, espera un string (cadena de texto). Es el nombre de la cookie a recibir
* @return devuelve el valor de la cookie

### Ejemplo
```
setCookie('pepe', 'salta por todo el jardín', 1);
let cookie = getCookie('pepe');
console.log(cookie);
```

**Salida**: "salta por todo el jardín"


## Uso de eraseCookie(name)

* @param name, de preferencia, espera un string (cadena de texto). Es el nombre de la cookie a eliminar.

### Ejemplo
```
removeCookie('pepe'); // Elimina a la cookie 'pepe' del ejemplo anterior
```
