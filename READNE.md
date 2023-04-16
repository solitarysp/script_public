# WEB
## Script add
```js
fetch('https://raw.githubusercontent.com/solitarysp/script_public/main/web/index.js')
.then((response) => response.text())
.then((data) => {
  let script = document.createElement('script');
  script.textContent  = data;
  document.body.appendChild(script);
});
```