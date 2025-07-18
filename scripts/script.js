document.addEventListener("DOMContentLoaded", () => {
  fetch("data/elements.json")
    .then((res) => res.json())
    .then((data) => {
      const path = window.location.pathname;
      if (path.includes("all-elements.html")) {
        generateTable(data);
        setupSearch(data, true);
      } else if (path.includes("ask-mode.html")) {
        setupSearch(data, false);
      }
    });

  // Popup close button
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-btn") || e.target.id === "popup") {
      document.getElementById("popup").classList.add("hidden");
    }
  });
});

// Generate full periodic table grid
function generateTable(elements) {
  const grid = document.getElementById("periodicGrid");
  if (!grid) return;

  elements.forEach((el) => {
    const box = document.createElement("div");
    box.className = `element-box ${el.category || "unknown"}`;
    box.style.gridColumn = el.xpos;
    box.style.gridRow = el.ypos;

    box.innerHTML = `
      <strong>${el.symbol}</strong>
      <small>${el.number}</small>
    `;

    box.addEventListener("click", () => showPopup(el));
    grid.appendChild(box);
  });
}

// Search functionality (both pages)
function setupSearch(elements, isFullTable) {
  const input = document.getElementById(isFullTable ? "searchInput" : "askInput");
  if (!input) return;

  input.addEventListener("input", () => {
    const value = input.value.trim().toLowerCase();
    const found = elements.find((el) =>
      el.name.toLowerCase() === value ||
      el.symbol.toLowerCase() === value ||
      el.number.toString() === value
    );

    if (!isFullTable && found) {
      showPopup(found);
    }

    if (isFullTable) {
      const boxes = document.querySelectorAll(".element-box");
      boxes.forEach((box) => {
        const symbol = box.querySelector("strong").textContent.toLowerCase();
        const number = box.querySelector("small").textContent;
        const match = symbol.includes(value) || number.includes(value);
        box.style.display = match ? "block" : "none";
      });
    }
  });
}

// Show popup with element info
function showPopup(el) {
  const popup = document.getElementById("popup");
  const content = document.getElementById("popup-content");

  content.innerHTML = `
    <span class="close-btn">&times;</span>
    <h2>${el.name} (${el.symbol})</h2>
    <p><strong>Atomic Number:</strong> ${el.number}</p>
    <p><strong>Atomic Mass:</strong> ${el.atomic_mass}</p>
    <p><strong>Category:</strong> ${el.category || "Unknown"}</p>
    <p><strong>Phase:</strong> ${el.phase || "N/A"}</p>
    <p><strong>Appearance:</strong> ${el.appearance || "Unknown"}</p>
    <p><strong>Summary:</strong> ${el.summary || "No data available."}</p>
  `;

  popup.classList.remove("hidden");
}
