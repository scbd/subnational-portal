#!/bin/sh

export DOCKER_HOST=tcp://localhost:2375
rm -rf node_modules
docker build -t registry.infra.cbd.int:5000/subnational-portal .
docker push registry.infra.cbd.int:5000/subnational-portal
