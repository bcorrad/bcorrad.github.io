function changeLanguage(lang) {
    var currentUrl = window.location.href;
    var baseUrl = currentUrl.split('?')[0]; // Rimuove eventuali parametri dalla URL corrente

    // Estrae il valore del parametro lang dall'URL
    var urlParams = new URLSearchParams(window.location.search);
    var currentLang = urlParams.get('lang');

    // Costruisce l'URL della nuova pagina in base alla lingua selezionata
    var newUrl;
    if (lang === 'it') {
        newUrl = 'index_it.html';
    } else {
        newUrl = 'index.html';
    }

    // Reindirizza l'utente alla nuova URL solo se la lingua selezionata è diversa dalla lingua corrente
    if (currentLang !== lang) {
        window.location.href = newUrl;
    }
}
