"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit2, Trash2 } from "lucide-react"

const mockMembers = [
  {
    id: 1,
    name: "John Doe",
    block: "A",
    lot: "123",
    meterNumber: "M001",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    block: "B",
    lot: "456",
    meterNumber: "M002",
    status: "Active",
  },
]

export function MemberList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Block</TableHead>
          <TableHead>Lot</TableHead>
          <TableHead>Meter Number</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockMembers.map((member) => (
          <TableRow key={member.id}>
            <TableCell className="font-medium">{member.name}</TableCell>
            <TableCell>{member.block}</TableCell>
            <TableCell>{member.lot}</TableCell>
            <TableCell>{member.meterNumber}</TableCell>
            <TableCell>{member.status}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon">
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}