PYTHON       = /usr/bin/env python3
VERSION_FILE = ./src/tranql/_version.py
VERSION      = $(shell cut -d " " -f 3 ${VERSION_FILE})
DOCKER_REPO  = docker.io
DOCKER_OWNER = cschreep
DOCKER_APP	 = tranql
DOCKER_TAG   = ${VERSION}
DOCKER_IMAGE = ${DOCKER_OWNER}/${DOCKER_APP}:$(DOCKER_TAG)

.DEFAULT_GOAL = help

.PHONY: help clean install test build image publish

#help: List available tasks on this project
help:
	@grep -E '^#[a-zA-Z\.\-]+:.*$$' $(MAKEFILE_LIST) | tr -d '#' | awk 'BEGIN {FS = ": "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

#clean: Remove old build artifacts and installed packages
clean:
	rm -rf build
	rm -rf dist
	rm -rf src/tranql.egg-info
	${PYTHON} -m pip uninstall -y tranql
	${PYTHON} -m pip uninstall -y -r requirements.txt

#install.python: Install python application along with required development packages
install.python:
	${PYTHON} -m pip install -r requirements.txt
	${PYTHON} -m pip install .

#install.npm: Builds the NPM modules
install.npm:
	cd web; npm install

#install: Install application
install: install.python install.npm

#test.python: Run all python tests
test.python:
	# ${PYTHON} -m flake8 src
	${PYTHON} -m pytest --doctest-modules src
	${PYTHON} -m pytest tests

#test.npm: Run all NPM tests
test.npm:
	echo "test NPM"

#test: Run all tests
test: test.python test.npm

#build: Build Docker image
build:
	echo "Building docker image: ${DOCKER_IMAGE}"
	docker build -t ${DOCKER_IMAGE} -f Dockerfile .
	echo "Successfully built: ${DOCKER_IMAGE}"

#publish: Build and push docker image
publish: build
	docker tag ${DOCKER_IMAGE} ${DOCKER_REPO}/${DOCKER_IMAGE}
	docker push ${DOCKER_REPO}/${DOCKER_IMAGE}
