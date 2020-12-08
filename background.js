chrome.omnibox.onInputEntered.addListener(function (input) {
  chrome.storage.sync.get("text", function (data) {
    const inputs = input.split(" ");
    const configs = JSON.parse(data.text);
    const keyword = inputs[0];
    let url = null;
    for (let i = 0; i < configs.length; i++) {
      const config = configs[i];
      if (config.key == keyword) {
        url = config.url;
      }
    }
    const args = inputs.slice(1);
    for (let i = 0; i < args.length; i++) {
      const pattern = new RegExp(`\\$${i + 1}`, "g");
      url = url.replace(pattern, args[i]);
    }
    chrome.tabs.update({ url });
  });
});
