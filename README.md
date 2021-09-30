# Redwood

Repository to consolidate efforts on making a good Docker implementation for RedwoodJS

## Implementations

| Name            | API                 | Web                  | Description                                               | Maintainer     |
| --------------- | ------------------- | -------------------- | --------------------------------------------------------- | -------------- |
| jeliasson-test1 | `yarn rw serve api` | `nginx:alpine` image | A test implementation that builds api and web seperately. | Johan Eliasson |

## Development

### Dockerfiles

Add below `LABEL` to directly connect published Docker images to this repository.

```Dockerfile
### START General copy pasta for all implementations
LABEL org.opencontainers.image.source=https://github.com/jeliasson/redwoodjs-docker
### END of general copy pasta for all implementations
```

### CI-pipeline

Feel free to copy and paste `.github/workflows/jeliasson-test1.yml` and we try to make out a common baseline.
