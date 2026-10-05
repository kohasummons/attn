import Link from "next/link";

export default function NotFound() {
  return <main className="mx-auto max-w-xl p-12"><h1>Page not found</h1><p>This page does not exist.</p><Link href="/">Back to home</Link></main>;
}
