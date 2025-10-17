document.addEventListener('DOMContentLoaded', function() {
    fetch('input.md')
        .then(response => response.text())
        .then(text => {
            const htmlContent = marked(text);
            document.querySelector('#markdown-output').innerHTML = htmlContent;
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });
        })
        .catch(error => {
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-danger';
            alertDiv.textContent = 'Error loading markdown file: ' + error.message;
            document.querySelector('.container').prepend(alertDiv);
        });
});