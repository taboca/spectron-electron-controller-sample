var layout = {
   'html':'<table cellpadding="10" width="100%" height="100%"><tr><td class="target" id="c1" height="100"></td></tr><tr><td class="target" id="c2"></td></tr></table>',
   'components': [
      {'key' : 'c1', 'value': 'http://localhost:8008'},
      {'key' : 'c2', 'value': 'http://localhost:8888/static/ping.html'},
   ],
    'components_backup': [
      {'key' : 'c1', 'value': 'http://localhost:8888/static/ping.html'},
      {'key' : 'c2', 'value': 'http://localhost:8888/static/ping.html'},
   ],
   'width'  : 640,
   'height' : 480,
   'frame'  : false ,
};

module.exports = layout;
