doc = {
  cylinderForm: document.querySelector('#cylinderForm'),
  radiusInput: document.querySelector('#radius'),
  heightInput: document.querySelector('#height'),
  volumeOutput: document.querySelector('#volume'),  
}

doc.cylinderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const radius = Number(doc.radiusInput.value);
  const height = Number(doc.heightInput.value);
  const volume = Math.PI * radius * radius * height;
  doc.volumeOutput.value = volume;
})
