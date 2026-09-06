import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { useEffect } from "react";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AppShell } from "@/components/app-shell";
import { ErrorBoundary } from "@/components/error-boundary";
import { registerServiceWorker } from "@/lib/pwa/register-sw";
import { useAppStore } from "@/store/app-store";
import appCss from "../styles.css?url";

const APP_NAME = "Nexum";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: APP_NAME },
      { name: "theme-color", content: "#245A4A" },
      {
        name: "description",
        content: "Trilha progressiva de neurociência: do neurônio à compreensão do comportamento.",
      },
      { name: "apple-mobile-web-app-title", content: APP_NAME },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "application-name", content: APP_NAME },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/icon-512.png" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "apple-touch-icon", href: "/icon-180.png", sizes: "180x180" },
      { rel: "manifest", href: "/manifest.json", type: "application/manifest+json" },
      { rel: "manifest", href: "/manifest.webmanifest", type: "application/manifest+json" },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
    ],
  }),
  component: Root,
});

function Root() {
  return (
    <html lang="pt-BR" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <PersistBoot>
            <ErrorBoundary>
              <AppShell>
                <Outlet />
              </AppShell>
            </ErrorBoundary>
          </PersistBoot>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function PersistBoot({ children }: { children: React.ReactNode }) {
  const reduce = useAppStore((s) => s.settings.reduceMotion);
  useEffect(() => {
    registerServiceWorker();
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reduce);
  }, [reduce]);
  useEffect(() => {
    const sync = () => {
      const standalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.matchMedia("(display-mode: fullscreen)").matches ||
        ("standalone" in navigator && Boolean((navigator as { standalone?: boolean }).standalone));
      document.documentElement.classList.toggle("standalone", standalone);
    };
    sync();
    const mq = window.matchMedia("(display-mode: standalone)");
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return <>{children}</>;
}
