# Redwood

Repository to consolidate efforts on making a good Docker implementation for RedwoodJS

## Implementations

| Name                                | API                 | Web                  |
| ----------------------------------- | ------------------- | -------------------- |
| [jeliasson-test1](#jeliasson-test1) | `yarn rw serve api` | `nginx:alpine` image |

### `jeliasson-test1`

**Meta**
| . | . |
| ----------- | --------------------------------------------------------- |
| Name | `jeliasson-test1` |
| Description | A test implementation that builds api and web seperately. Will be renamed to something more suiting when building correctly. |
| Workflow | [![jeliasson-test1](https://github.com/jeliasson/redwoodjs-docker/actions/workflows/jeliasson-test1.yml/badge.svg)](https://github.com/jeliasson/redwoodjs-docker/actions/workflows/jeliasson-test1.yml) |
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

### Dockerfiles

Add below `LABEL` to directly connect published Docker images to this repository.

```Dockerfile
### START General copy pasta for all implementations
LABEL org.opencontainers.image.source=https://github.com/jeliasson/redwoodjs-docker
### END of general copy pasta for all implementations
```

### CI

Feel free to copy and paste `.github/workflows/template.yml` and we try to make out a common baseline.
