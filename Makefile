PYTHON       = /usr/bin/env python3
VERSION_FILE = ./src/tranql/_version.py
VERSION      = $(shell cut -d " " -f 3 ${VERSION_FILE})
DOCKER_REPO  = docker.io
DOCKER_OWNER = helxplatform
DOCKER_APP	 = tranql
DOCKER_TAG   = ${VERSION}
DOCKER_IMAGE = ${DOCKER_OWNER}/${DOCKER_APP}:$(DOCKER_TAG)
TEST_REDIS_DUMP_FILE = "https://stars.renci.org/var/kgx_data/v3.0/roger-mini.rdb"


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
	${PYTHON} -m pip install --upgrade pip
	${PYTHON} -m pip install -r requirements.txt
	${PYTHON} -m pip install .

#install.npm: Builds the NPM modules
install.npm:
	cd src/tranql/web; npm install; npm run build

install.npm_nobuild:
	cd src/tranql/web; npm install;

#install: Install application
install: install.python install.npm

#test.python: Run all python tests
test.python:
	#${PYTHON} -m pytest --doctest-modules src
	${PYTHON} -m pytest tests

#test.npm: Run all NPM tests
test.npm:
	cd src/tranql/web; npm test -- --watchAll=false

#test: Run all tests
test: test.python test.npm

test_puppeteer:
	cd src/tranql/web; node -e "await (require('puppeteer').launch({headless: true}))"

#build: Build Docker image
build:
	echo "Building docker image: ${DOCKER_IMAGE}"
	docker build -t ${DOCKER_IMAGE} -f Dockerfile .
	echo "Successfully built: ${DOCKER_IMAGE}"

#publish: Build and push docker image
publish:
	docker tag ${DOCKER_IMAGE} ${DOCKER_REPO}/${DOCKER_IMAGE}
	docker push ${DOCKER_REPO}/${DOCKER_IMAGE}

#download: Downloads example dataset for redis
download:
	mkdir -p redis_data/
	if [ ! -f "./redis_data/dump.rdb" ] ; then \
	wget ${TEST_REDIS_DUMP_FILE} -O redis_data/dump.rdb; \
	fi

#run.local: seeds redis with data, builds web page and runs tranql docker container
run.local: download
	docker-compose up -d
	cd src/tranql/web; npm start;