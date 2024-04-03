window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            updatePage(data);
        }
    };
    xhr.send();
};

function updatePage(data) {
    document.getElementById('cvTitle').innerText = data['cv-title'];
    updateList('personal-info', 'personalInfoList', data);
    createSocialButtons(data['personal-info']['socialLinks']);
}

function updateList(section, listId, data) {
    var list = document.getElementById(listId);
    var sectionData = data[section];
    if (Array.isArray(sectionData)) {
        sectionData.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.textContent = item;
            list.appendChild(listItem);
        });
    } else {
        for (var key in sectionData) {
            var listItem = document.createElement('li');
            listItem.innerHTML = '<strong>' + key.replace(/-/g, ' ') + ':</strong> ' + sectionData[key];
            list.appendChild(listItem);
        }
    }
}

function createSocialButtons(socialLinks) {
    var socialButtonsContainer = document.getElementById('socialButtons');
    for (var platform in socialLinks) {
        var link = socialLinks[platform];
        var button = document.createElement('a');
        button.href = link;
        button.target = '_blank';
        button.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
        button.className = 'socialButton ' + platform;
        socialButtonsContainer.appendChild(button);
    }
}
