/**
 * Created by danielabrao on 12/22/16.
 */
(function () {
    "use strict";

    var picturesFeature = require("./featured_pictures/index.script"),
        projectFeature = require("./featured_projects/index.script"),
        socialBoxHandler = require("./social_media/index.script");

    module.exports = function (jngFramework) {
        return {
            "social_pictures_feature": picturesFeature(),
            "project_tiles_feature": projectFeature(jngFramework),
            "social_box_handler": socialBoxHandler(jngFramework.socialBox())
        };
    };


}());