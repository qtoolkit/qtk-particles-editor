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
                data[desc.path] = desc.value;
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
            { type: "range", name: "Life", converter: "life", path: "life", value: { first: 2, second: 4 } }
        ]
    },
    {
        title: "Behaviour",
        propsDesc: [
            { type: "range", name: "Scale", path: "scale", value: { first: 1, second: 0.7 } },
            { type: "range", name: "Alpha", path: "alpha", value: { first: 1, second: 0 } },
            { type: "number", name: "Drift Delay", path: "driftDelay", value: 0.05 },
            { type: "vector2", name: "Drift Point", path: "driftPoint", value: { x: 30, y: 30 } }
        ]
    }
];
Template.register("default", defaultTemplateJson);
