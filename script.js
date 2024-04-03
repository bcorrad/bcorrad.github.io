function changeLanguage(lang) {
    var currentUrl = window.location.href;
    var baseUrl = currentUrl.split('?')[0]; // Rimuove eventuali parametri dalla URL corrente
    var newUrl;

    // Aggiunge il parametro lang alla URL in base alla lingua selezionata
    if (lang === 'en') {
        newUrl = baseUrl + '?lang=en';
    } else if (lang === 'it') {
        newUrl = baseUrl + '?lang=it';
    }

    // Redirect alla nuova URL
    window.location.href = newUrl;
}
