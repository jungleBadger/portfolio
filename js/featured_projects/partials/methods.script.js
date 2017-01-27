/**
 * Created by danielabrao on 12/22/16.
 */
(function () {
    "use strict";

    module.exports = function (elements, projects, jngFramework) {

        var modalBox = jngFramework.modalBox();

        return {
            "attachModalListener": function (tileEl, project) {
                var tst = this.createProjectInfoEl(project);
                tileEl.addEventListener("click", modalBox.openModal({
                    "template": tst
                }));

                return this;
            },
            "createProjectInfoEl": function (project) {
                var wrapperDiv = document.createElement("div"),
                    projectTitle = document.createElement("h3"),
                    detailsSection = document.createElement("div"),
                    buttonWrapper = document.createElement("div");
                wrapperDiv.classList.add("project-info-wrapper");
                buttonWrapper.classList.add("anchor-wrapper");

                projectTitle.appendChild(document.createTextNode(project.projectName));
                wrapperDiv.appendChild(projectTitle);

                detailsSection.appendChild(this.buildKeyValueInfo("Description: ", project.projectDescription, true));
                detailsSection.appendChild(this.buildKeyValueInfo("Technologies: ", project.projectTechnologies.join(", ")));

                if (project.projectRepo) {
                    // wrapperDiv.appendChild(this.buildKeyValueInfo("Repository:", project.projectRepo));
                    buttonWrapper.appendChild(this.buildLinkButton(project.projectRepo, "Repository"));
                }

                if (project.projectLink) {
                    buttonWrapper.appendChild(this.buildLinkButton(project.projectLink, "Project"));
                }

                detailsSection.appendChild(buttonWrapper);
                wrapperDiv.appendChild(detailsSection);

                return wrapperDiv;
            },
            "buildLinkButton": function (href, buttonText, buttonImg) {

                if (!href) {
                    return;
                }

                var anchor = document.createElement("a"),
                    iconImg = document.createElement("img"),
                    span = document.createElement("span");
                anchor.setAttribute("href", href);
                anchor.setAttribute("target", "_blank");

                iconImg.setAttribute("src", "./assets/icons/link.svg");


                span.appendChild(document.createTextNode(buttonText));
                anchor.appendChild(iconImg);
                anchor.appendChild(span);

                anchor.classList.add("project-anchor");

                return anchor;
            },
            "buildKeyValueInfo": function (key, value, multiline) {
                var infoWrapper = document.createElement("div"),
                    keyLabel = document.createElement("span"),
                    valueText = document.createElement("span");

                keyLabel.appendChild(document.createTextNode(key));
                valueText.appendChild(document.createTextNode(value || "Unknown"));
                infoWrapper.appendChild(keyLabel);

                infoWrapper.appendChild(valueText);


                // if (multiline) {
                //     var lineLimit = 12;
                //     jngFramework.textTruncate.test({
                //         "textElement": infoWrapper,
                //         "limit": lineLimit,
                //         "autoHandleExpansion": false
                //     });
                //
                // }

                infoWrapper.classList.add("info-detail");

                return infoWrapper;
            },
            "buildCardElement": function () {
                var card = document.createElement("div");
                card.classList.add("flex", "col", "card");
                return card;
            },
            "buildImgSource": function (projectImg) {
                var sourceEl;
                if (projectImg.imgMedia === "default" || !projectImg.imgMedia) {
                    sourceEl = document.createElement("img");
                    sourceEl.setAttribute("src", projectImg.imgSrc);
                } else {
                    sourceEl = document.createElement("source");
                    sourceEl.setAttribute("srcset", projectImg.imgSrc);
                    sourceEl.setAttribute("media", projectImg.imgMedia);
                }

                sourceEl.classList.add("img-responsive");

                return sourceEl;
            },
            "buildCardImage": function (project) {
                var self = this,
                    imgContainer = document.createElement("div"),
                    pictureEl = document.createElement("picture");

                project.projectImage.forEach(function (image) {
                    pictureEl.appendChild(self.buildImgSource(image));
                });

                imgContainer.classList.add("flex", "img-container");
                imgContainer.appendChild(pictureEl);
                return imgContainer;
            },
            "buildCardDisclaimer": function () {
                var div = document.createElement("div");
                div.classList.add("card-disclaimer");
                return div;
            },
            "buildCardInfo": function (project) {
                var infoContainer = document.createElement("div"),
                    projectNameEl = document.createElement("h3");

                projectNameEl.appendChild(document.createTextNode(project.projectName));
                infoContainer.classList.add("flex", "col", "center-v", "info-container");
                infoContainer.appendChild(projectNameEl);

                return infoContainer;
            },
            "buildProjectTile": function (project) {
                var self = this;
                var container = this.buildCardElement();
                container.appendChild(self.buildCardImage(project));
                container.appendChild(self.buildCardInfo(project));
                self.attachModalListener(container, project);
                container.appendChild(self.buildCardDisclaimer());
                return container;
            },
            "appendProjectTile": function (tile) {
                elements.featuredProjects.appendChild(tile);
            },
            "init": function () {
                var self = this;
                projects.forEach(function (project) {
                    self.appendProjectTile(self.buildProjectTile(project));
                });
            }
        };
    };

}());