/**
 * Created by danielabrao on 1/7/17.
 */
(function () {
    "use strict";

    module.exports = function (elements, pictures) {
        return {
            "getRandomIndex": function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },
            "setPictureCaption": function (pictureIndex) {
                elements.pictureCaption.innerHTML = pictures[pictureIndex].pictureDescription || pictures[pictureIndex].pictureAlt
                return this;
            },
            "setPictureSrc": function (index) {
                elements.mobileSrc.setAttribute("srcset", pictures[index].pictureImg.small.imgSrc);
                elements.retinaSrc.setAttribute("srcset", pictures[index].pictureImg.retina.imgSrc);
                elements.pictureHolder.setAttribute("src", pictures[index].pictureImg.high.imgSrc);
                return this;
            },
            "init": function () {
                var self = this;
                var index = self.getRandomIndex(0, pictures.length - 1);
                self.setPictureSrc(index).setPictureCaption(index);
            }
        };
    };

}());