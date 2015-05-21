#!/bin/sh

docker build -t registry.infra.cbd.int:5000/subnational-portal git@github.com:scbd/subnational.cbd.int.git
docker push registry.infra.cbd.int:5000/subnational-portal
