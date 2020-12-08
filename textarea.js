let rulesText = document.getElementById("rulesText");

let saveButton = document.getElementById("saveButton");

saveButton.onclick = function (element) {
  let text = rulesText.value;
  chrome.storage.sync.set({ text });
  window.close();
};

window.onload = function () {
  chrome.storage.sync.get("text", function (data) {
    rulesText.value = data.text || "";
  });
};
