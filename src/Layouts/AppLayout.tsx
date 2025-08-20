import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <h1>App Layout</h1>
      <Outlet />
    </div>
  )
}
