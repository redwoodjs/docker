#!/bin/bash -ve

# NOTE: Requires binaries. Install with:
# yarn global add @redwoodjs/api-server @redwoodjs/internal prisma

prisma migrate deploy --schema ./api/db/schema.prisma
rw-server api
