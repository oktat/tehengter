(() => {
  // src/cylinder.js
  function calcVolume(radius, height) {
    return Math.PI * radius * radius * height;
  }

  // src/app.js
  doc = {
    cylinderForm: document.querySelector("#cylinderForm"),
    radiusInput: document.querySelector("#radius"),
    heightInput: document.querySelector("#height"),
    volumeOutput: document.querySelector("#volume")
  };
  doc.cylinderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const radius = Number(doc.radiusInput.value);
    const height = Number(doc.heightInput.value);
    const volume = calcVolume(radius, height);
    doc.radiusInput.value = "";
    doc.heightInput.value = "";
    doc.volumeOutput.value = volume;
  });
})();
