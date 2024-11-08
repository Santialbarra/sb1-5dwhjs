"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Search } from "lucide-react"
import { MemberList } from "@/components/members/member-list"
import { AddMemberDialog } from "@/components/members/add-member-dialog"

export default function MembersPage() {
  const [showAddDialog, setShowAddDialog] = useState(false)

  return (
    <div className="container py-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-2xl font-bold">Member Management</CardTitle>
          <Button onClick={() => setShowAddDialog(true)}>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Member
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="Search members..."
                  className="w-full rounded-md border border-input pl-8 pr-4 py-2 text-sm"
                />
              </div>
            </div>
            <MemberList />
          </div>
        </CardContent>
      </Card>
      <AddMemberDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
    </div>
  )
}