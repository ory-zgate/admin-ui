import { PublicApi, Configuration } from "@ory/kratos-client";

const publicApi = new PublicApi(new Configuration({
  basePath: 'http://127.0.0.1:4433',
  baseOptions: { withCredentials: true }
}));

export const checkSessionValid = () => {
  return publicApi.whoami();
}