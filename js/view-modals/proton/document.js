"use strict";
var qtk_1 = require("qtk");
var Document = (function () {
    function Document() {
    }
    Document.prototype.toJson = function () {
        var json = {
            data: this.data,
            propsDesc: this.propsDesc.map(function (item) {
                return item.toJson();
            })
        };
        return json;
    };
    Document.prototype.fromJson = function (json) {
        this.data = json.data;
        this.propsDesc = json.propsDesc.map(function (item) {
            return qtk_1.PagePropsDesc.create(item.title, item.propsDesc.items);
        });
        return this;
    };
    Document.prototype.fromTemplate = function (json) {
        var data = {};
        this.propsDesc = json.map(function (item) {
            var pagePropsDesc = qtk_1.PagePropsDesc.create(item.title, item.propsDesc);
            item.propsDesc.forEach(function (desc) {
                if (desc.path) {
                    data[desc.path] = desc.value;
                }
            });
            return pagePropsDesc;
        });
        this.data = data;
        return this;
    };
    Document.createFromJson = function (json) {
        var doc = new Document();
        return doc.fromJson(json);
    };
    Document.registerTemplate = function (name, json) {
        Document.templates[name] = json;
        Document.templateNames.push(name);
    };
    Document.createFromTemplate = function (name) {
        var doc = new Document();
        return doc.fromTemplate(Document.templates[name]);
    };
    Document.templates = {};
    Document.templateNames = [];
    return Document;
}());
exports.Document = Document;
var defaultTemplate = [
    {
        title: "Initialize",
        propsDesc: [
            { type: "range", name: "Radius", converter: "radius", path: "radius", value: { first: 1, second: 12 } },
            { type: "range", name: "Life", converter: "life", path: "life", value: { first: 2, second: 4 } },
            { type: "range", name: "Mass", converter: "mass", path: "mass", value: { first: 1, second: 1 } },
            { type: "vector2", name: "Position", path: "position", converter: "point", value: { x: 300, y: 300 } },
            { type: "line", name: "Rate" },
            { type: "range", name: "number", converter: "number", path: "rateNum", value: { first: 10, second: 20 } },
            { type: "range", name: "time", converter: "time", path: "rateTime", value: { first: .1, second: .25 } },
            { type: "line" },
            { type: "options", name: "Type", converter: "velocity", path: "vType", value: "polar",
                options: ["polar", "linear"] },
            { type: "range", name: "rpan", converter: "velocity", path: "vRpan", value: { first: 2, second: 4 } },
            { type: "range", name: "thapan", converter: "velocity", path: "vThapan", value: { first: -30, second: 30 } },
            { type: "line" }
        ]
    },
    {
        title: "Behaviour",
        propsDesc: [
            { type: "range", name: "Scale", path: "scale", converter: "scale", value: { first: 1, second: 0.7 } },
            { type: "range", name: "Alpha", path: "alpha", converter: "alpha", value: { first: 1, second: 0 } },
            { type: "line", name: "Drift" },
            { type: "vector2", name: "Point", path: "driftPoint", converter: "point", value: { x: 30, y: 30 } },
            { type: "number", name: "Delay", path: "driftDelay", converter: "delay", value: 0.05 },
            { type: "line" }
        ]
    }
];
Document.registerTemplate("default", defaultTemplate);
//# sourceMappingURL=document.js.map