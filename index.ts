import * as gitlab from "@pulumi/gitlab";

const project = new gitlab.Project("my-project", {
    description: "example project",
    visibilityLevel: "public",
});
