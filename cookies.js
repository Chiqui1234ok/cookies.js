function saveCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value.toString() || "")  + expires + "; path=/"; /* Uso el ';' cómo parámetro de corte en getCookie() */
    console.log('Cookie guardada.');
    return getCookie(name);
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return false;
}

function removeCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  /* Con una expiración negativa o anterior a la actual, la cookie se borra */
    return true;
}