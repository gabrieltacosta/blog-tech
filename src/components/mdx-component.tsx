import { cn } from "@/lib/utils";
import type React from "react";

const components = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className="mb-4 font-bold text-4xl">{children}</h1>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="mb-4">{children}</p>
  ),
  a: ({ children, href }: { children?: React.ReactNode; href?: string }) => (
    <a href={href} className="text-blue-500">
      {children}
    </a>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="mb-4 list-disc pl-5">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="mb-4 list-decimal pl-5">{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="mb-2">{children}</li>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="mb-4 border-neutral-300 border-l-2 py-2 pl-4 italic">
      {children}
    </blockquote>
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    return <pre className={cn("bg-transparent p-0", className)} {...props} />;
  },

  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="mb-2 font-bold text-2xl">{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="mb-1 font-bold text-xl">{children}</h3>
  ),
  h4: ({ children }: { children?: React.ReactNode }) => (
    <h4 className="mb-1 font-bold text-lg">{children}</h4>
  ),
  h5: ({ children }: { children?: React.ReactNode }) => (
    <h5 className="mb-1 font-bold text-base">{children}</h5>
  ),
  h6: ({ children }: { children?: React.ReactNode }) => (
    <h6 className="mb-1 font-bold text-sm">{children}</h6>
  ),
};

export { components };
