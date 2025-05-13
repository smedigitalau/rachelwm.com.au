import { defineAction } from "astro:actions";
import { z } from "astro:schema";

import { db, SummitUsers } from "astro:db";

export const server = {
  storeUserDetails: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      email: z.string().email(),
    }),

    handler: async (input) => {
      const updatedUsers = await db
        .insert(SummitUsers)
        .values(input)
        .returning();
      // return updatedUsers;
      return input.name;
    },
  }),

  getGreeting: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async (input) => {
      return `Hello, ${input.name}!`;
    },
  }),
};
