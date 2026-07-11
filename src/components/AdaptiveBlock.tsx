import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

// Eagerly bundles every MDX file under content/blocks at build time —
// so rendering a block never depends on a runtime file fetch.
const blockModules = import.meta.glob("/content/blocks/*.mdx", { eager: true });

function getBlockComponent(slug: string) {
  const match = Object.entries(blockModules).find(([path]) => path.endsWith(`${slug}.mdx`));
  return match ? (match[1] as any).default : null;
}

export default function AdaptiveBlock({
  slug,
  audience = "recruiter",
  fallback,
}: { slug: string; audience?: string; fallback: React.ReactNode }) {
  const [resolvedSlug, setResolvedSlug] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from("content_blocks")
      .select("block_slug")
      .eq("section", slug)
      .eq("status", "published")
      .contains("audience", [audience])
      .order("sort_order")
      .limit(1)
      .then(({ data, error }) => {
        if (error || !data?.length) return; // static fallback stays on screen
        setResolvedSlug(data[0].block_slug);
      });
  }, [slug, audience]);

  const Component = resolvedSlug ? getBlockComponent(resolvedSlug) : null;
  return Component ? <Component /> : <>{fallback}</>;
}