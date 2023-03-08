import { StackContext, NextjsSite } from "sst/constructs";

export function Site({ stack }: StackContext) {
  const site = new NextjsSite(stack, 'site', {
    path: 'packages/site',
  });
  stack.addOutputs({
    url: site.url ?? 'http://localhost:3000',
  });
}
