"use client"
import { useAppDispatch, useAppSelector } from "@/src/store"
import { toggleService, openModal } from "@/src/store/slices/uiSlice"
import { useDeleteServiceMutation, useDeleteAccountMutation } from "@/src/store/api/vaultApi"
import type { Service } from "@/src/store/slices/servicesSlice"
import type { Account } from "@/src/store/slices/accountsSlice"
import { ChevronRight, Zap, MoreVertical, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

interface ServiceTreeProps {
  service: Service
  accounts: Account[]
  onSelectAccount: (accountId: string) => void
}

export default function ServiceTree({ service, accounts, onSelectAccount }: ServiceTreeProps) {
  const dispatch = useAppDispatch()
  const expandedServices = useAppSelector((state) => state.ui.expandedServices)
  const expanded = expandedServices.includes(service.id)
  const [deleteService] = useDeleteServiceMutation()
  const [deleteAccount] = useDeleteAccountMutation()

  const handleDelete = async () => {
    if (confirm(`Delete service "${service.name}" and all its accounts?`)) {
      try {
        await deleteService(service.id).unwrap()
      } catch (error) {
        console.error("Error deleting service:", error)
      }
    }
  }

  const handleDeleteAccount = async (accountId: string, accountName: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (confirm(`Delete account "${accountName}"?`)) {
      try {
        await deleteAccount(accountId).unwrap()
      } catch (error) {
        console.error("Error deleting account:", error)
      }
    }
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1 group border-l-2 border-purple-500 pl-1">
        <button
          onClick={() => dispatch(toggleService(service.id))}
          className={cn(
            "flex-1 flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/50 transition-colors",
            "text-sm font-medium text-foreground",
          )}
        >
          <ChevronRight className={cn("w-4 h-4 transition-transform", expanded && "rotate-90")} />
          <Zap className="w-4 h-4 text-purple-400" />
          <span className="truncate">{service.name}</span>
          <span className="ml-auto text-xs text-muted-foreground">{accounts.length}</span>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => dispatch(openModal({ type: "service", editingId: service.id }))}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => dispatch(openModal({ type: "account", contextId: service.id }))}>
              Add Account
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete} className="text-destructive">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {expanded && (
        <div className="ml-4 space-y-1">
          {accounts.length === 0 ? (
            <div className="px-3 py-2 text-xs text-muted-foreground text-center">
              No accounts yet
            </div>
          ) : (
            accounts.map((account) => (
              <div key={account.id} className="flex items-center gap-1 group/account">
                <button
                  onClick={() => onSelectAccount(account.id)}
                  className={cn(
                    "flex-1 flex items-center gap-2 px-3 py-2 rounded-md text-sm",
                    "text-foreground transition-colors hover:bg-accent/50",
                  "text-left truncate",
                )}
              >
                <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-teal-400" />
                <span className="truncate">{account.name}</span>
              </button>                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 opacity-0 group-hover/account:opacity-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreVertical className="w-3 h-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => dispatch(openModal({ type: "account", editingId: account.id }))}>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={(e) => handleDeleteAccount(account.id, account.name, e)}
                      className="text-destructive"
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => dispatch(openModal({ type: "account", contextId: service.id }))}
            className="w-full justify-start text-xs text-muted-foreground hover:text-foreground"
          >
            <Plus className="w-3 h-3 mr-1" />
            Add Account
          </Button>
        </div>
      )}
    </div>
  )
}
