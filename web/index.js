const HOST = window.location.host;
console.log(HOST)

if (HOST === "shell.cloud.google.com") {
    fetch('https://raw.githubusercontent.com/solitarysp/script_public/main/web/google_shell/js/shell_script.js')
        .then((response) => response.text())
        .then((data) => {
            let script = document.createElement('script');
            script.textContent = data;
            document.body.appendChild(script);
        });
}
if (HOST === "dash.cloudflare.com") {
    fetch('https://raw.githubusercontent.com/solitarysp/script_public/main/web/cloudflare/js/index.js')
        .then((response) => response.text())
        .then((data) => {
            let script = document.createElement('script');
            script.textContent = data;
            document.body.appendChild(script);
        });
}