fetch('https://raw.githubusercontent.com/solitarysp/script_public/main/google_shell/js/shell_script.js')
.then((response) => response.text())
.then((data) => {
  let script = document.createElement('script');
  script.textContent  = data;
  document.body.appendChild(script);
});