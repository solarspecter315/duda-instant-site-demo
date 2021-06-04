export default {
  "sites": {
    "POST": "createSite",
    "GET":  "getSites",
    "{siteName}": {
      "PATCH": "updateContent",
      "PUT": "updateContent",
      "DELETE": "deleteSite",
      "versions": {
          "POST": "publishSite"
      }
    }
  },
  "users": {
    "POST": "createUser",
    "{userId}": {
      "accessFor": {
        "{siteName}": {
          "POST": "grantUserAccess",
          "GET": "getSSOLink"
        }
      }
    }
  }
};