/**
 * Created by danielabrao on 1/7/17.
 */
(function () {
    "use strict";

    var elements = require("./partials/elements.script"),
        dataSet = require("./partials/pictures.dataset"),
        controller = require("./partials/methods.script");

    module.exports = function () {
        return controller(elements, dataSet);
    };

}());