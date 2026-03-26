import { redirect } from "next/navigation";

/**
 * Short-path alias: /epd → /podcast/epd
 * Allows users to access Ecosystem Project Demo directly without the /podcast/ prefix.
 */
export default function EpdShortcut() {
  redirect("/podcast/epd");
}
