import { redirect } from "next/navigation";

/**
 * Short-path alias: /fusaka-files → /podcast/fusaka-files
 * Allows users to access Fusaka Files directly without the /podcast/ prefix.
 */
export default function FusakaFilesShortcut() {
  redirect("/podcast/fusaka-files");
}
