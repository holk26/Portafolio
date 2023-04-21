import "bootswatch/dist/zephyr/bootstrap.min.css";
//import "bootswatch/dist/lux/bootstrap.min.css";
import "../global.css";
import { Analytics } from "@vercel/analytics/react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
      <Analytics />
    </SessionContextProvider>
  );
}
