//All the regular common functions and polyfills drop here...

function showToast(message) {
  console.log("Reached toast : ",message);
  let toastHtml = document.createElement("div");
  toastHtml.innerHTML = message;
  document.appendChild(toastHtml);
}

function debounce(callback, timeout) {
  let timeoutId=null;
  return () => {
    if(!timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback.call(this), timeout);
  }
}