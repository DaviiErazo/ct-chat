import path from "path";

import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { GraphQLSchema } from "graphql";

export const loadSchema = (pathSchema: string): GraphQLSchema => {
  const schema = loadSchemaSync(path.join(__dirname, pathSchema), {
    loaders: [new GraphQLFileLoader()],
  });

  return schema;
};
