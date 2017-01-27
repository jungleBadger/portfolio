/**
 * Created by danielabrao on 12/22/16.
 */
(function (window) {
    "use strict";

    // var jngFrame = require("jng_framework"),
    var jngFrame = require("./jng_framework/js/main.script")(),
        app = require("./js/index.dictionary")(jngFrame);

    app.social_pictures_feature.init();
    app.project_tiles_feature.init();
    app.social_box_handler.init();

}(window));