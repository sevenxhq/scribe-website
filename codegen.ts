
import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from "@next/env";

// @ts-ignore
loadEnvConfig(process.cwd());

const GITHUB_TOKEN = process.env.GITHUB_TOKEN; 

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://api.github.com/graphql": {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}` ?? '',
          'User-Agent': 'CodeGen'
        },
      },
    },
  ],
  documents: "./src/graphql/**.graphql",
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
