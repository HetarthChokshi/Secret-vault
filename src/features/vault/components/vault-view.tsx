"use client"

import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/src/store"
import { useGetCategoriesQuery, useGetServicesQuery, useGetAccountsQuery } from "@/src/store/api/vaultApi"
import { toggleCategory, openModal } from "@/src/store/slices/uiSlice"
import { selectAccount } from "@/src/store/slices/accountsSlice"
import CategoryTree from "./category-tree"
import AccountDetails from "./account-details"
import CRUDModalsContainer from "./crud-modals-container"
import { Button } from "@/components/ui/button"
import { Plus, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function VaultView() {
  const dispatch = useAppDispatch()
  const expandedCategories = useAppSelector((state) => state.ui.expandedCategories)
  const expandedServices = useAppSelector((state) => state.ui.expandedServices)
  const selectedAccountId = useAppSelector((state) => state.accounts.selectedAccountId)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const { data: categories = [], isLoading: categoriesLoading } = useGetCategoriesQuery()
  const { data: services = [], isLoading: servicesLoading } = useGetServicesQuery()
  const { data: accounts = [], isLoading: accountsLoading } = useGetAccountsQuery()

  const isLoading = categoriesLoading || servicesLoading || accountsLoading
  const selectedAccount = accounts.find((a) => a.id === selectedAccountId)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setSidebarOpen(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleSelectAccount = (accountId: string) => {
    dispatch(selectAccount(accountId))
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setSidebarOpen(false)} />
      )}

      <div
        className={cn(
          "fixed md:relative z-40 w-80 md:w-80 border-r border-border bg-black overflow-y-auto flex flex-col",
          "transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="p-4 border-b border-border/50 space-y-3 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-purple-600/10 border-glow-cyan">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              Secret Vault
            </h1>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden p-1 hover:bg-accent rounded-md">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground">Secure vault for sensitive data</p>
          <Button 
            onClick={() => dispatch(openModal({ type: "category" }))} 
            className="w-full justify-center bg-cyan-600 hover:bg-cyan-500 text-white" 
            size="sm"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Category
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full" />
            </div>
          ) : categories.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              <p className="text-sm">No categories yet</p>
            </div>
          ) : (
            <div className="p-2 space-y-1">
              {categories.map((category) => (
                <CategoryTree
                  key={category.id}
                  category={category}
                  services={services.filter((s) => s.category_id === category.id)}
                  accounts={accounts}
                  expanded={expandedCategories.includes(category.id)}
                  onToggle={() => dispatch(toggleCategory(category.id))}
                  onSelectAccount={handleSelectAccount}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header with menu button */}
        <div className="md:hidden flex items-center gap-2 p-4 border-b border-border bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 hover:bg-accent rounded-md">
            <Menu className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent flex-1 truncate">
            {selectedAccount?.name || "Select Account"}
          </h2>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto">
          {selectedAccount ? (
            <AccountDetails account={selectedAccount} />
          ) : (
            <div className="flex items-center justify-center h-full text-center text-muted-foreground p-4">
              <div>
                <p className="text-lg font-semibold">No account selected</p>
                <p className="text-sm mt-2">Select an account from the vault to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <CRUDModalsContainer />
    </div>
  )
}
