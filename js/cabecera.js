fetch('pages/header.html')
    .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('header-container');
            headerContainer.innerHTML = data;
        });

fetch('pages/footer.html')
.then(response => response.text())
    .then(data => {
        const headerContainer = document.getElementById('footer-container');
        headerContainer.innerHTML = data;
    });