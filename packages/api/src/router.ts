import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

const orgRouter = t.router({
  list: t.procedure.query(() => []),
  create: t.procedure
    .input(z.object({ name: z.string(), type: z.string() }))
    .mutation(({ input }) => input),
});

const proposalRouter = t.router({
  list: t.procedure.input(z.object({ orgId: z.string() })).query(() => []),
});

const toolRouter = t.router({
  list: t.procedure.query(() => []),
});

const marketplaceRouter = t.router({
  list: t.procedure.query(() => []),
});

const groupBuyRouter = t.router({
  list: t.procedure.query(() => []),
});

export const appRouter = t.router({
  orgs: orgRouter,
  proposals: proposalRouter,
  tools: toolRouter,
  marketplace: marketplaceRouter,
  groupBuys: groupBuyRouter,
});

export type AppRouter = typeof appRouter;
