chrome.webRequest.onBeforeRequest.addListener(function(details) {
  let urlSpoofs = getConfig();
  for(let spoofEntry of urlSpoofs) {
    if (spoofEntry.enabled && details.url.match(spoofEntry.pattern)) {
      return { 'redirectUrl' : spoofEntry.redirectUrl}
    }
  }
}, {urls: ["<all_urls>"]}, ["blocking"])
