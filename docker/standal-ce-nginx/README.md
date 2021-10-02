# standal-ce-nginx

Dockerfile built alongside a deployment to [IBM's Code Engine](https://cloud.ibm.com/docs/codeengine?topic=codeengine-getting-started) (managed Kubernetes and Knative), with its [best practices](https://cloud.ibm.com/docs/codeengine?topic=codeengine-dockerfile) built in:

* Each side is seperated into its own Dockerfile.
* Each side uses [multiple build stages](https://docs.docker.com/develop/develop-images/multistage-build/), reducing final image size and allowing shared cache.
* Yarn is removed from the API-side's entrypoint, starting the server by executing `rw-api-server` directly.
  * Can the dependency on `@redwoodjs/api-server` by removed with easy access to `rw-api-server`?
* Both sides are served as a non-root user.
  * Credit to [Sophia Brandt](https://www.sophiabrandt.com/) for their [article](https://www.rockyourcode.com/run-docker-nginx-as-non-root-user/) running Nginx containers as non-root users.
