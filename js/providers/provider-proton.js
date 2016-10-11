"use strict";
var qtk_1 = require("qtk");
var proton_document_1 = require("./proton-document");
var descJson = [
    {
        title: "Initialize",
        propsDesc: []
    },
    {
        title: "Behaviour",
        propsDesc: []
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
        return proton_document_1.ProtonDocument.create();
    };
    ProviderProton.create = function () {
        var provider = new ProviderProton();
        return provider;
    };
    return ProviderProton;
}());
exports.ProviderProton = ProviderProton;
