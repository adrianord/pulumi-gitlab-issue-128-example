# Pulumi GitLab Issue 128 Example

Code based on the sample code found in the documentation: https://www.pulumi.com/registry/packages/gitlab/

Illustrated the issue found here https://github.com/pulumi/pulumi-gitlab/issues/128

## How to use

`export GITLAB_TOKEN=<your personal access token>`

`pulumi up`


## Error that comes up

```
Diagnostics:
  gitlab:index:Project (my-project):
    error: gitlab:index/project:Project resource 'my-project' has a problem: Missing required argument: "mirror_overwrites_diverged_branches": all of `import_url,mirror_overwrites_diverged_branches` must be specified. Examine values at 'Project.MirrorOverwritesDivergedBranches'.
    error: gitlab:index/project:Project resource 'my-project' has a problem: Missing required argument: "mirror": all of `import_url,mirror` must be specified. Examine values at 'Project.Mirror'.
    error: gitlab:index/project:Project resource 'my-project' has a problem: Missing required argument: "only_mirror_protected_branches": all of `import_url,only_mirror_protected_branches` must be specified. Examine values at 'Project.OnlyMirrorProtectedBranches'.
    error: gitlab:index/project:Project resource 'my-project' has a problem: Missing required argument: "mirror_trigger_builds": all of `import_url,mirror_trigger_builds` must be specified. Examine values at 'Project.MirrorTriggerBuilds'.
```
