# domain-router
Route specific domains and paths to different Node.js applications on a single server.

## Installation
```npm install -g domain-router```

## Usage
```domain-router```

## Configuration
- ```proxyPort```: specify the port to run the proxy on (default:```80```)
- ```defaultAppPort```: port to route to if trying to access a host or pathname that has not been configured (default:```8081```)
- ```domains```: list of domains and ports to route them to
- ```paths```: list of paths and ports to route them to

### Default ```config.json```
```json
{
  "proxyPort": "80",
  "defaultAppPort": "8081",
  "domains": {
    "domainone.com": "8081",
    "domaintwo.org": "8082"
  },
  "paths": {
    "/foo": "8083",
    "/bar": "8084"
  }
}
```

## Notes
- Needs to be run with superuser privileges if using the default ```proxyPort```
- Attempting to access a configured application that is not currently running will result in an error