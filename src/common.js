//All the regular common functions and polyfills drop here...

function showToast(message) {
  console.log("Reached toast : ",message);
  let toastHtml = document.createElement("div");
  toastHtml.innerHTML = message;
  document.appendChild(toastHtml);
}