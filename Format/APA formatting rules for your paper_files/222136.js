// HubSpot Script Loader. Please do not block this resource. See more: http://hubs.ly/H0702_H0

(function (id, src, attrs) {
  if (document.getElementById(id)) { 
    try { console.warn('duplicate hubspot script with id: "' + id + '" included on page'); }
    finally { return; }
  }
  var js = document.createElement('script');
  js.src = src;
  js.type = 'text/javascript';
  js.id = id;
  for (var name in attrs) { if(attrs.hasOwnProperty(name)) { js.setAttribute(name, attrs[name]); } }
  var e = document.getElementsByTagName('script')[0];
  e.parentNode.insertBefore(js, e);
})('hubspot-messages-loader', 'https://api.usemessages.com/messages/v2/embed/222136.js', {"data-loader":"hs-scriptloader","data-hsjs-portal":222136,"data-hsjs-env":"prod"});

(function (id, src, attrs) {
  if (document.getElementById(id)) { 
    try { console.warn('duplicate hubspot script with id: "' + id + '" included on page'); }
    finally { return; }
  }
  var js = document.createElement('script');
  js.src = src;
  js.type = 'text/javascript';
  js.id = id;
  for (var name in attrs) { if(attrs.hasOwnProperty(name)) { js.setAttribute(name, attrs[name]); } }
  var e = document.getElementsByTagName('script')[0];
  e.parentNode.insertBefore(js, e);
})('hs-analytics', '//js.hs-analytics.net/analytics/1505552700000/222136.js', {"data-loader":"hs-scriptloader","data-hsjs-portal":222136,"data-hsjs-env":"prod"});
