const form = document.getElementById("tileCalculator");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const area = Number(document.getElementById("area").value);
  const waste = Number(document.getElementById("waste").value);
  const boxCoverage = Number(document.getElementById("boxCoverage").value);
  const availableBoxes = Number(document.getElementById("availableBoxes").value);

  if (!isValidInput(area, waste, boxCoverage, availableBoxes)) {
    showError("Revisa los datos. Los metros y la cobertura por caja deben ser mayores que cero.");
    return;
  }

  const wasteMultiplier = 1 + waste / 100;
  const totalAreaWithWaste = area * wasteMultiplier;
  const exactBoxesNeeded = totalAreaWithWaste / boxCoverage;
  const boxesNeeded = Math.ceil(exactBoxesNeeded);

  const remainingBoxes = availableBoxes - boxesNeeded;
  const missingBoxes = boxesNeeded - availableBoxes;

  renderResult({
    area,
    waste,
    boxCoverage,
    availableBoxes,
    totalAreaWithWaste,
    boxesNeeded,
    remainingBoxes,
    missingBoxes
  });
});

function isValidInput(area, waste, boxCoverage, availableBoxes) {
  return (
    area > 0 &&
    waste >= 0 &&
    boxCoverage > 0 &&
    availableBoxes >= 0
  );
}

function showError(message) {
  result.classList.remove("hidden");
  result.innerHTML = `<div class="error">${message}</div>`;
}

function renderResult(data) {
  const hasEnoughStock = data.availableBoxes >= data.boxesNeeded;

  result.classList.remove("hidden");

  result.innerHTML = `
    <h2>Resultado del cálculo</h2>

    <div class="result-grid">
      <div class="result-item">
        <span>Metros del proyecto</span>
        <strong>${formatNumber(data.area)} m²</strong>
      </div>

      <div class="result-item">
        <span>Merma aplicada</span>
        <strong>${formatNumber(data.waste)}%</strong>
      </div>

      <div class="result-item">
        <span>Metros con merma</span>
        <strong>${formatNumber(data.totalAreaWithWaste)} m²</strong>
      </div>

      <div class="result-item">
        <span>Cajas necesarias</span>
        <strong>${data.boxesNeeded}</strong>
      </div>
    </div>

    ${
      hasEnoughStock
        ? `<div class="status ok">
            Hay stock suficiente. Sobran ${data.remainingBoxes} caja${data.remainingBoxes === 1 ? "" : "s"}.
          </div>`
        : `<div class="status warning">
            No hay stock suficiente. Faltan ${data.missingBoxes} caja${data.missingBoxes === 1 ? "" : "s"}.
          </div>`
    }
  `;
}

function formatNumber(value) {
  return new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(value);
}
