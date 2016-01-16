require('./main.css')

import component from './component.js';

var app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());
