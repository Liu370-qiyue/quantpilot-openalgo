import { Outlet } from 'react-router-dom'

import QuantPilotSidebar from './QuantPilotSidebar'

export default function QuantPilotLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <QuantPilotSidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}