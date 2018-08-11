/**
 * Schema:
 *  {
 *    "urlSpoofs" : [
 *       {
 *           "enabled" : bool,
 *           "pattern" : RegEx,
 *           "redirectUrl" : string
 *       }
 *    ]
 *
 *  }
 */
let urlSpoofs = [];
 function readConfig() {
  chrome.storage.sync.get('urlSpoofs', (items) => {
    urlSpoofs = items.urlSpoofs?items.urlSpoofs:[];
    urlSpoofs.push({
      "enabled": true,
      "pattern": "instart.js",
      "redirectUrl":"https://www.autopartswarehouse.com/i10c@p1/client/latest/auto/instart.js?i10c.opts=botox&i10c.opts=abd"
    });
  });
}

readConfig();

function getConfig() {
  return urlSpoofs;
}


chrome.storage.onChanged.addListener((changes, namespace) => {
  //TODO: update
});