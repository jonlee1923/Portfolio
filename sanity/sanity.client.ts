import {createClient, type ClientConfig} from "@sanity/client";

const config: ClientConfig = {
    projectId:"01s5y512",
    dataset: "production",
    apiVersion: "2023-12-31",
    useCdn: true,
};

const client = createClient(config);

export default client;