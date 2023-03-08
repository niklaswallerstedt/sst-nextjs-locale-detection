import { SSTConfig } from "sst";
import { Site } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "sst-nextjs-locale-detection",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(Site);
  }
} satisfies SSTConfig;
