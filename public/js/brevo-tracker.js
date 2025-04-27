// Load Brevo SDK
var s = document.createElement("script");
s.src = "https://cdn.brevo.com/js/sdk-loader.js";
s.async = true;
document.head.appendChild(s);

// Initialize Brevo
window.Brevo = window.Brevo || [];
Brevo.push([
  "init",
  {
    client_key: "fxf9sjoyf5kwdt099fp582dr"
  }
]);
