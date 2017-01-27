/**
 * Created by danielabrao on 1/6/17.
 */
(function () {
    "use strict";

    module.exports = function (elements, socialMedias, socialBox) {
        return {
            "init": function () {
                var self = this;
                socialBox.renderSocialBox(socialMedias, elements.socialBoxParent, "right");
            }
        };
    };

}());