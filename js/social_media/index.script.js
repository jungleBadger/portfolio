/**
 * Created by danielabrao on 12/25/16.
 */
(function () {
    "use strict";

    var elements = require("./partials/elements.script"),
        dataSet = require("./partials/social.dataset"),
        controller = require("./partials/methods.script");

    module.exports = function (socialBox) {
        return controller(elements, dataSet, socialBox);
    };

}());