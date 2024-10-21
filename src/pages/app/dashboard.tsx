import { Helmet } from "react-helmet-async";

export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <h1 className="text-red-600">Dashboard</h1>
    </div>
  );
}
