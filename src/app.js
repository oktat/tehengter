/*
File: app.js
Author: Sallai András
Copyright: 2025, Sallai András
Group: szit
Date: 2025-01-10
Github: https://github.com/oktat/
Licenc: MIT
*/

import { calcVolume } from './cylinder.js';

const doc = {
  cylinderForm: document.querySelector('#cylinderForm'),
  radiusInput: document.querySelector('#radius'),
  heightInput: document.querySelector('#height'),
  volumeOutput: document.querySelector('#volume'),  
}

doc.cylinderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const radius = Number(doc.radiusInput.value);
  const height = Number(doc.heightInput.value);
  const volume = calcVolume(radius, height);
  doc.radiusInput.value = '';
  doc.heightInput.value = '';
  doc.volumeOutput.value = volume;
})
