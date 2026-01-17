'use client';

import { useEffect } from "react";
import Head from "next/head";
import { Spinner } from "@/components/ui/spinner";

interface NetlifyIdentity {
  on: (event: string, callback: (user: unknown) => void) => void; // Update here
  // Add other properties and methods as needed
}

declare global {
  interface Window {
    netlifyIdentity: NetlifyIdentity;
  }
}

const CMSPage: React.FC = () => {
  useEffect(() => {
    // Redirect to the static Decap CMS admin page which will load `config.yml`
    if (typeof window !== "undefined") {
      window.location.href = "/admin/index.html";
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <title>Redirecting to Content Manager</title>
      </Head>
      <main
        className="min-h-screen flex items-center justify-center flex-col gap-4 p-4 bg-gradient-to-b from-white to-slate-50"
        aria-busy="true"
      >
        <div aria-hidden="true" className="flex items-center gap-4">
          <Spinner className="w-12 h-12 text-indigo-500" />
          <span className="text-slate-700 text-base font-medium">
            Redirecting to the CMS admin...
          </span>
        </div>

        <span className="sr-only">Redirecting to the CMS admin</span>
      </main>
    </>
  );
};

export default CMSPage;