import { redirect } from "next/navigation";

/**
 * Short-path alias: /wiep → /podcast/wiep
 * Allows users to access Women in Ethereum Protocol directly without the /podcast/ prefix.
 */
export default function WiepShortcut() {
  redirect("/podcast/wiep");
}
