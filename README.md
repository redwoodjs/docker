# Redwood

Repository to consolidate efforts on making a good Docker implementation for RedwoodJS

## Implementations

| Name                                | API                 | Web                  |
| ----------------------------------- | ------------------- | -------------------- |
| [jeliasson-nginx](#jeliasson-nginx) | `yarn rw serve api` | `nginx:alpine` image |

### `jeliasson-nginx`

**Meta**
| . | . |
| ----------- | --------------------------------------------------------- |
| Name | `jeliasson-nginx` |
| Description | A test implementation that builds api and web seperately. Will be renamed to something more suiting when building correctly. |
| Workflow | [![jeliasson-nginx](https://github.com/jeliasson/redwoodjs-docker/actions/workflows/jeliasson-nginx.yml/badge.svg)](https://github.com/jeliasson/redwoodjs-docker/actions/workflows/jeliasson-nginx.yml) |
| Maintainer | [Johan Eliasson](https://github.com/jeliasson) |

**Packages**

| Name |                     |
| ---- | ------------------- |
| api  | `yarn rw serve api` |
| web  | `nginx:alpine`      |

**Benchmark**

| Package | Build time |
| ------- | ---------- |
| api     | `N/A`      |
| web     | `N/A`      |

**Suitable for**

| Scenario    | High Availability | Separation of concern |
| ----------- | ----------------- | --------------------- |
| Production  | ✅                | ✅                    |
| Development | ❌                | ❌                    |

## Development

Essentialy we create various test implementations under the [docker](docker) directory and create [workflows](.github/workflows) to build these. Once we find a suitable approach forward, we'll discuss where the final Dockerfiles ultimately end up after a `yarn rw setup docker` setup. 🚀

### Dockerfiles

Add below `LABEL` to bottom each Dockerfile to connect published Docker image to this repository.

```Dockerfile
### START General copy pasta for all implementations
LABEL org.opencontainers.image.source=https://github.com/jeliasson/redwoodjs-docker
### END of general copy pasta for all implementations
```

#### Images

Published Docker images to GitHub Container Registry should preferably be named;

* `<prefix>-api-dev` for api build with development as runtime env.
* `<prefix>-web-dev` for web build with development as runtime env.
* `<prefix>-both-dev` for api and web build with development as runtime env.
* `<prefix>-api-prod` for api build with production as runtime env.
* `<prefix>-web-prod` for web build with production as runtime env.
* `<prefix>-both-prod` for api and web build with production as runtime env.

e.g.

* `jeliasson-nginx-web-dev`



### CI

Feel free to copy and paste `.github/workflows/template.yml` and we try to make out a common baseline. It should build and publish the image(s) to GitHub Container Registry (see template).
