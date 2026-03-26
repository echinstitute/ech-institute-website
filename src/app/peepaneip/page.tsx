import { redirect } from "next/navigation";

/**
 * Short-path alias: /peepaneip → /podcast/peepaneip
 * Allows users to access PEEPanEIP directly without the /podcast/ prefix.
 */
export default function PeepanEIPShortcut() {
  redirect("/podcast/peepaneip");
}
