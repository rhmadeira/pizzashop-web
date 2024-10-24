import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div>
      <h1 className="text-red-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        laudantium nam alias ipsum veritatis excepturi vitae distinctio
        perspiciatis. Sint libero debitis ipsam magnam, earum quasi corporis
        accusantium nobis et consequatur.
      </h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
