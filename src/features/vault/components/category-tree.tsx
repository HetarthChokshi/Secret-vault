"use client"
import { useAppDispatch } from "@/src/store"
import { openModal } from "@/src/store/slices/uiSlice"
import type { Category } from "@/src/store/slices/categoriesSlice"
import type { Service } from "@/src/store/slices/servicesSlice"
import type { Account } from "@/src/store/slices/accountsSlice"
import ServiceTree from "./service-tree"
import { ChevronRight, Folder, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useDeleteCategoryMutation } from "@/src/store/api/vaultApi"
import { cn } from "@/lib/utils"

interface CategoryTreeProps {
  category: Category
  services: Service[]
  accounts: Account[]
  expanded: boolean
  onToggle: () => void
  onSelectAccount: (accountId: string) => void
}

export default function CategoryTree({
  category,
  services,
  accounts,
  expanded,
  onToggle,
  onSelectAccount,
}: CategoryTreeProps) {
  const dispatch = useAppDispatch()
  const [deleteCategory] = useDeleteCategoryMutation()

  const handleDelete = async () => {
    if (confirm("Delete this category and all its services?")) {
      await deleteCategory(category.id)
    }
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center group hover:bg-accent/30 rounded-md transition-colors border-l-2 border-cyan-500 pl-1">
        <button
          onClick={onToggle}
          className="flex-1 flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground"
        >
          <ChevronRight className={cn("w-4 h-4 transition-transform flex-shrink-0", expanded && "rotate-90")} />
          <Folder className="w-4 h-4 flex-shrink-0 text-cyan-400" />
          <span className="truncate">{category.name}</span>
          <span className="ml-auto text-xs text-muted-foreground flex-shrink-0">{services.length}</span>
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100">
              <MoreVertical className="w-3.5 h-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => dispatch(openModal({ type: "category", editingId: category.id }))}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => dispatch(openModal({ type: "service" }))}>Add Service</DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete} className="text-destructive">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {expanded && (
        <div className="ml-4 space-y-1 border-l border-border pl-2">
          {services.map((service) => (
            <ServiceTree
              key={service.id}
              service={service}
              accounts={accounts.filter((a) => a.service_id === service.id)}
              onSelectAccount={onSelectAccount}
            />
          ))}
        </div>
      )}
    </div>
  )
}
