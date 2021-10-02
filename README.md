# Redwood on Docker

Repository to consolidate efforts on making a sweet Docker implementation for RedwoodJS. Discussion on [Dockerize RedwoodJS](https://community.redwoodjs.com/t/dockerize-redwoodjs/2291).

## Implementations

| Name                                | API                 | Web                  |
| ----------------------------------- | ------------------- | -------------------- |
| [jeliasson-nginx](#jeliasson-nginx) | `yarn rw serve api` | `nginx:alpine` image |

### `jeliasson-nginx`

**Meta**
| | |
| ----------- | --------------------------------------------------------- |
| Name | `jeliasson-nginx` |
| Description | A test implementation that builds api and web seperately. |
| Workflow | [![jeliasson-nginx](https://github.com/jeliasson/redwoodjs-docker/actions/workflows/jeliasson-nginx.yml/badge.svg)](https://github.com/jeliasson/redwoodjs-docker/actions/workflows/jeliasson-nginx.yml) |
| Maintainer | [Johan Eliasson](https://github.com/jeliasson) |

**Packages**

| Name | Runtime             |
| ---- | ------------------- |
| api  | `yarn rw serve api` |
| web  | `nginx:alpine`      |

**Benchmark**

Benchmark on running averages

| Package | Build time | Image size |
| ------- | ---------- | ---------- |
| api     | `3m 12s`   | `1.69GB`   |
| web     | `1m 46s`   | `25.3MB`   |

**Suitable for**

| Scenario                    | Development | Production |
| --------------------------- | ----------- | ---------- |
| Basic installation          | ❌          | ❌         |
| Preferably w/ LB/proxy      | ❌          | ✅         |
| High Availability           | ❌          | ✅         |
| Separation of concern       | ❌          | ✅         |
| Handles db migration & seed | ❌          | ❌         |
| ...                         |             |            |

**Test**

```bash
# Api
docker run \
      -it \
      -p 8911:8911 \
      ghcr.io/jeliasson/jeliasson-nginx-api-dev:latest

# Web
docker run \
      -it \
      -p 8910:8910 \
      ghcr.io/jeliasson/jeliasson-nginx-web-dev:latest
```


### `standal-ce-nginx`

**Meta**
| | |
| ----------- | --------------------------------------------------------- |
| Name | `standal-ce-nginx` |
| Description | An implementation built for a deployment to [IBM's Code Engine](https://cloud.ibm.com/docs/codeengine?topic=codeengine-getting-started), with its [best practices](https://cloud.ibm.com/docs/codeengine?topic=codeengine-dockerfile) built in. |
| Workflow | [![standal-ce-nginx](https://github.com/jeliasson/redwoodjs-docker/actions/workflows/standal-ce-nginx.yml/badge.svg)](https://github.com/jeliasson/redwoodjs-docker/actions/workflows/standal-ce-nginx.yml) |
| Maintainer | [Ryan Lockard](https://github.com/realStandal) |

**Packages**

| Name | Runtime             |
| ---- | ------------------- |
| api  | `rw-api-server`     |
| web  | `nginx:1.21.3-alpine`      |

**Benchmark**

Benchmark on running averages

| Package | Build time | Image size |
| ------- | ---------- | ---------- |
| api     | `2m 57s`      | `tbd`      |
| web     | `2m 5s`      | `tbd`      |

**Suitable for**

| Scenario                    | Development | Production |
| --------------------------- | ----------- | ---------- |
| Basic installation          | ❌          | ❌         |
| Preferably w/ LB/proxy      | ❌          | ✅         |
| High Availability           | ❌          | ✅         |
| Separation of concern       | ❌          | ✅         |
| Handles db migration & seed | ❌          | ❌         |
| ...                         |             |            |

**Test**

```bash
# Api
docker run \
      -it \
      -p 8911:8911 \
      ghcr.io/jeliasson/standal-ce-nginx-api-dev:latest

# Web
docker run \
      -it \
      -p 8910:8910 \
      ghcr.io/jeliasson/standal-ce-nginx-web-dev:latest
```


## Development

Essentialy we create various test implementations under the [docker](docker) directory and create [workflows](.github/workflows) to build these. Once we find a suitable approach forward, we'll discuss where the final Dockerfiles ultimately end up after a `yarn rw setup docker` (or what we end up with) setup. 🚀

### Dockerfiles

Add below `LABEL` to bottom each Dockerfile to connect published Docker image to this repository.

```Dockerfile
### Connect image to repository
LABEL org.opencontainers.image.source=https://github.com/jeliasson/redwoodjs-docker
```

#### Images

Published Docker images to GitHub Container Registry should preferably be named;

- `<prefix>-api-dev` for api build with development as runtime env.
- `<prefix>-web-dev` for web build with development as runtime env.
- `<prefix>-both-dev` for api and web build with development as runtime env.
- `<prefix>-api-prod` for api build with production as runtime env.
- `<prefix>-web-prod` for web build with production as runtime env.
- `<prefix>-both-prod` for api and web build with production as runtime env.

e.g.

- `jeliasson-nginx-web-dev`

### CI

Feel free to copy and paste `.github/workflows/template.yml` and we try to make out a common baseline. It should build and publish the image(s) to GitHub Container Registry (see template).
