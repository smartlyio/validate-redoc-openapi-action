#!/bin/sh -l

 yarn run redoc-cli bundle /github/workspace/$1 --output /dev/null
