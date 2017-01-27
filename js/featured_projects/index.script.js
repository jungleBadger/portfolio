/**
 * Created by danielabrao on 12/22/16.
 */
(function () {
    "use strict";

    var elements = require("./partials/elements.script"),
        dataSet = require("./partials/projects.dataset"),
        controller = require("./partials/methods.script");

    module.exports = function (jngFramework) {
        return controller(elements, dataSet, jngFramework);
    };

}());