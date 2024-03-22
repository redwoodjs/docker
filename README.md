# Redwood on Docker

> :warning: This repository has been deprecated and archived in favor of the [official support in RedwoodJS](https://redwoodjs.com/docs/docker). Thanks to everyone that contributed to this repository, and to everyone that worked on bringing offical support.

This is a collaboration repository to consolidate efforts on making a sweet Docker implementations for RedwoodJS. Discussion on [Dockerize RedwoodJS](https://community.redwoodjs.com/t/dockerize-redwoodjs/2291) and [Define official Docker images](https://github.com/redwoodjs/docker/issues/16). This repository is currently up to date with Redwood version `3.8.0`.

## Implementations

| Name                                        | Description | Workflow                                                                                                                                                                             |
| ------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [jeliasson-nginx](#jeliasson-nginx)         | A production tested implementation that builds api and web seperately.            | [![jeliasson-nginx](https://github.com/redwoodjs/docker/actions/workflows/jeliasson-nginx.yml/badge.svg)](https://github.com/redwoodjs/docker/actions/workflows/jeliasson-nginx.yml) |
| [standal-ce-nginx](#standal-ce-nginx)       | An implementation built for a deployment to [IBM's Code Engine](https://cloud.ibm.com/docs/codeengine?topic=codeengine-getting-started), with its [best practices](https://cloud.ibm.com/docs/codeengine?topic=codeengine-dockerfile) built in.             |  [![standal-ce-nginx](https://github.com/redwoodjs/docker/actions/workflows/standal-ce-nginx.yml/badge.svg)](https://github.com/redwoodjs/docker/actions/workflows/standal-ce-nginx.yml)                                                                                                                                                                                    |
| [standal-cli-both](#standal-cli-both)       | Builds and serves both sides from a single image, using [Redwood's CLI](https://redwoodjs.com/docs/cli-commands.html#serve).            | [![standal-cli-both](https://github.com/redwoodjs/docker/actions/workflows/standal-cli-both.yml/badge.svg)](https://github.com/redwoodjs/docker/actions/workflows/standal-cli-both.yml)                                                                                                                                                                                     |
| [pi0neerpat-packages](#pi0neerpat-packages) | Similar to `jeliasson-nginx`, but supports 📦 local packages            |  [![pi0neerpat-packages](https://github.com/redwoodjs/docker/actions/workflows/pi0neerpat-packages.yml/badge.svg)](https://github.com/redwoodjs/docker/actions/workflows/pi0neerpat-packages.yml)                                                                                                                                                                                    |

### `jeliasson-nginx`

**Meta**
| | |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name | `jeliasson-nginx` |
| Description | A production tested implementation that builds api and web seperately. |
| Workflow | [![jeliasson-nginx](https://github.com/redwoodjs/docker/actions/workflows/jeliasson-nginx.yml/badge.svg)](https://github.com/redwoodjs/docker/actions/workflows/jeliasson-nginx.yml) |
| Maintainer | [Johan Eliasson](https://github.com/jeliasson) |

### `standal-ce-nginx`

**Meta**
| | |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name | `standal-ce-nginx` |
| Description | An implementation built for a deployment to [IBM's Code Engine](https://cloud.ibm.com/docs/codeengine?topic=codeengine-getting-started), with its [best practices](https://cloud.ibm.com/docs/codeengine?topic=codeengine-dockerfile) built in. |
| Workflow | [![standal-ce-nginx](https://github.com/redwoodjs/docker/actions/workflows/standal-ce-nginx.yml/badge.svg)](https://github.com/redwoodjs/docker/actions/workflows/standal-ce-nginx.yml) |
| Maintainer | [Ryan Lockard](https://github.com/realStandal) |

### `standal-cli-both`

**Meta**
| | |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name | `standal-cli-both` |
| Description | Builds and serves both sides from a single image, using [Redwood's CLI](https://redwoodjs.com/docs/cli-commands.html#serve). |
| Workflow | [![standal-cli-both](https://github.com/redwoodjs/docker/actions/workflows/standal-cli-both.yml/badge.svg)](https://github.com/redwoodjs/docker/actions/workflows/standal-cli-both.yml) |
| Maintainer | [Ryan Lockard](https://github.com/realStandal) |

### pi0neerpat-packages

NOTE: not everything can be run here. Instead see: https://github.com/pi0neerpat/redwood-devops-example

**Meta**
| | |
| ----------- | ----------------------------------------------------------- |
| Name | `pi0neerpat-packages` |
| Description | Similar to `jeliasson-nginx`, but supports 📦 local packages |
| Workflow | [![pi0neerpat-packages](https://github.com/redwoodjs/docker/actions/workflows/pi0neerpat-packages.yml/badge.svg)](https://github.com/redwoodjs/docker/actions/workflows/pi0neerpat-packages.yml) |
| Maintainer | [Patrick](https://github.com/pi0neerpt) |

## Contribution

Essentialy we create various test implementations under the [docker](docker) directory and create [workflows](.github/workflows) to build these. Once we find a suitable approach forward, we'll discuss where the final Dockerfiles ultimately end up after a `yarn rw setup docker` (or what we end up with) setup. 🚀

### Dockerfiles

Add below `LABEL` to bottom each Dockerfile to connect published Docker image to this repository.

```Dockerfile
### Connect image to repository
LABEL org.opencontainers.image.source=https://github.com/redwoodjs/docker
```

#### Images

Published Docker images to GitHub Container Registry should preferably be named;

- `docker-<prefix>-api-dev` for api build with development as runtime env.
- `docker-<prefix>-web-dev` for web build with development as runtime env.
- `docker-<prefix>-both-dev` for api and web build with development as runtime env.
- `docker-<prefix>-api-prod` for api build with production as runtime env.
- `docker-<prefix>-web-prod` for web build with production as runtime env.
- `docker-<prefix>-both-prod` for api and web build with production as runtime env.

e.g.

- `docker-jeliasson-nginx-web-dev`

### Benchmarks

To keep track of the implementations effectiveness, we maintain a running average on below metrics.

- **Build Size**: On successful builds we display the image size in the analyse stage. In this stage we also run a [dive](https://github.com/wagoodman/dive#ci-integration) analysis.
- **Build time**: Average time for 'Docker build' completion in respective workflow.

### CI

Feel free to copy and paste `.github/workflows/template.yml` and we try to make out a common baseline. It should build and publish the image(s) to GitHub Container Registry (see template).
