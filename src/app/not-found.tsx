// Next.js requires not-found.tsx at app root for 404 handling
// Component logic is organized in not-found/ folder for proper structure
import NotFoundContent from './not-found/NotFoundContent';

export default function NotFound() {
  return <NotFoundContent />;
}
