"use strict";

document.querySelectorAll("button[data-copy]").forEach((button) => {
  button.hidden = false;
  button.addEventListener("click", async () => {
    const citation = document.getElementById(button.dataset.copy);
    const status = button.closest(".citation-tools").querySelector(".copy-status");
    if (!citation || !status) return;

    try {
      await navigator.clipboard.writeText(citation.textContent.trimEnd() + "\n");
      status.textContent = "Citation copied.";
    } catch {
      status.textContent = "Could not copy. Please select the citation or download the file.";
    }
  });
});
