// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    // Change this attribute's name to your `injectionPoint`.
    // `injectionPoint` is an InjectManifest option.
    // See https://serwist.pages.dev/docs/build/configuring
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  fallbacks: {
    entries: [
      {
        url: "/~offline",
        matcher({ request }) {
          return request.destination === "document";
        },
      },
    ],
  },
});


self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  // For "/legacy-post" with the method "POST", this simply makes a network request,
  // but if that fails due to a network problem, the request is added to the background
  // synchronization queue and will be retried later.
  if (event.request.method === "POST" && url.origin === location.origin && url.pathname === "/share-target") {
    // const backgroundSync = async () => {
    //   try {
    //     const response = await fetch(event.request.clone());
    //     return response;
    //   } catch (error) {
    //     await queue.pushRequest({ request: event.request });
    //     return Response.error();
    //   }
    // };
    // event.respondWith(backgroundSync());


    // return Response.redirect('/image', 303);

  }
});


serwist.addEventListeners();