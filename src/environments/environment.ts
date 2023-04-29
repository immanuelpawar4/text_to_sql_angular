// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  model_api:'https://text2query.azurewebsites.net/api/text/text2sql?promt=${query}',
  upload_file:"https://testtosqlapi.azurewebsites.net/upload",
  get_response:"https://testtosqlapi.azurewebsites.net/sql_query_response?promt=${query}"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
