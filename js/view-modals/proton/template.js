"use strict";
var qtk_1 = require("qtk");
var Template = (function () {
    function Template() {
    }
    Template.prototype.parse = function (json) {
        var data = {};
        var propsDesc = [];
        json.forEach(function (item) {
            var pagePropsDesc = qtk_1.PagePropsDesc.create(item.title, item.propsDesc);
            item.propsDesc.forEach(function (desc) {
                if (desc.path) {
                    data[desc.path] = desc.value;
                }
            });
            propsDesc.push(pagePropsDesc);
        });
        this.data = data;
        this.propsDesc = propsDesc;
    };
    Template.register = function (name, json) {
        Template.templates[name] = json;
    };
    Template.create = function (name) {
        var json = Template.templates[name];
        var template = new Template();
        template.parse(json);
        return template;
    };
    Template.templates = {};
    return Template;
}());
exports.Template = Template;
var defaultTemplateJson = [
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
Template.register("default", defaultTemplateJson);
