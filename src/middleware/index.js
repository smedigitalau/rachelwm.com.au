import { auth } from "@/auth";
import { defineMiddleware } from "astro:middleware";

// export const onRequest = defineMiddleware(async (context, next) => {
//   if (context.isPrerendered) return next();
//
//   // intercept data from a request
//   // optionally, modify the properties in `locals`
//   // context.locals.title = "New title";
//
//   const isAuthed = await auth.api.getSession({
//     headers: context.request.headers,
//   });
//
//   if (isAuthed) {
//     context.locals.user = isAuthed.user;
//     context.locals.session = isAuthed.session;
//   } else {
//     context.locals.user = null;
//     context.locals.session = null;
//   }
//
//   // return a Response or the result of calling `next()`
//   return next();
// });

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api
    .getSession({
      headers: context.request.headers,
    })
    .catch((e) => {
      return null;
    });
  if (context.url.pathname === "/toolkit" && !isAuthed) {
    return context.redirect("/");
  }
  return next();
});
