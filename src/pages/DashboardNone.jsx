import { useEffect } from "react";

export default function DashboardNone() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-fit">
    </div>
  );
}
