
  const colorFunc = () => {
    var colorPicker = document.getElementById("inputColor").value;
    document.body.style.backgroundColor = colorPicker;
    document.getElementById("inputText").value = colorPicker;
  };

  const copy = () => {
    const hexColor = document.getElementById("inputText")
    const demo = document.getElementById("demo")
    navigator.clipboard.writeText(hexColor.value)
    demo.innerHTML = "Copied!"
    demo.style.opacity = "1"
  }

  if("serviceWorker" in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/serviceWorker.js')
    })
  }
