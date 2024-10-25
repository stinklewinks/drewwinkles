"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var client_1 = require("react-dom/client");
var rootElement = document.getElementById('root');
var App = function () { return ((0, jsx_runtime_1.jsx)("div", { children: "App" })); };
if (rootElement) {
    var root = (0, client_1.createRoot)(rootElement);
    root.render((0, jsx_runtime_1.jsx)(App, {}));
}
else {
    console.error("Root element not found");
}
