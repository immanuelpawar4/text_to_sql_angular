export const environment = {
  production: true,
  model_api:'https://text2query.azurewebsites.net/api/text/text2sql?promt=${query}',
  upload_file:"https://testtosqlapi.azurewebsites.net/upload",
  get_response:"https://testtosqlapi.azurewebsites.net/sql_query_response?promt=${query}"
};
