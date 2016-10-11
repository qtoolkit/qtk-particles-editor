"use strict";
var qtk_1 = require("qtk");
var document_1 = require("./document");
var descJson = [
    {
        title: "Initialize",
        propsDesc: [
            { type: "range", name: "Radius", path: "radius" },
            { type: "range", name: "Life", path: "life" }
        ]
    },
    {
        title: "Behaviour",
        propsDesc: [
            { type: "range", name: "Scale", path: "scale" },
            { type: "range", name: "Alpha", path: "alpha" },
            { type: "number", name: "Drift Delay", path: "drift.delay" },
            { type: "vector2", name: "Drift Point", path: "drift.point" }
        ]
    }
];
var ProviderProton = (function () {
    function ProviderProton() {
    }
    ProviderProton.prototype.getPropsDesc = function () {
        if (!ProviderProton.pagesPropsDesc) {
            ProviderProton.pagesPropsDesc = [];
            descJson.forEach(function (item) {
                ProviderProton.pagesPropsDesc.push(qtk_1.PagePropsDesc.create(item.title, item.propsDesc));
            });
        }
        return ProviderProton.pagesPropsDesc;
    };
    ProviderProton.prototype.createDocument = function () {
        return document_1.ProtonDocument.create();
    };
    ProviderProton.create = function () {
        var provider = new ProviderProton();
        return provider;
    };
    return ProviderProton;
}());
exports.ProviderProton = ProviderProton;
