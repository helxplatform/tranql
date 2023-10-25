# Tranql Vulnerabilities

## tranql/Requirements.txt file

### Pip packages

- flask-cors: High 3.0.7 => fix 3.0.9
- jinja2: High 2.10 => fix 2.10.1
- pyyaml: 3 CRITICAL 5.1 => Test newest version at 6.0

### Git repositories

- git+<https://github.com/helxplatform/Plater.git@v2.0.1>
- git+<https://github.com/TranslatorSRI/reasoner-pydantic@v1.0.0#egg=reasoner-pydantic>
- git+<https://github.com/TranslatorSRI/reasoner-converter@1.2.4#egg=reasoner-converter>

## tranql/src/tranql/web/package.json file

Completely broken... cannot build locally.
Tons of conflicting dependencies... checking with Renci if UI is even used.