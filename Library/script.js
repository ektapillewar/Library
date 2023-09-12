
window.addEventListener('load', function() {
 
    var loadingCube = document.querySelector('.cube-wrapper');
    setTimeout(function() {
        loadingCube.style.display = 'none';
    }, 1000);

    var formContainer = document.getElementById('form-container');
    formContainer.classList.remove('hidden');
});
