"use client"
import type { Account } from "@/src/store/slices/accountsSlice"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MaskedSecretField from "./masked-secret-field"
import { useClipboard } from "../hooks/useClipboard"
import { Trash2, Edit2 } from "lucide-react"
import { useAppDispatch } from "@/src/store"
import { useDeleteAccountMutation } from "@/src/store/api/vaultApi"
import { openModal } from "@/src/store/slices/uiSlice"

interface AccountDetailsProps {
  account: Account
}

export default function AccountDetails({ account }: AccountDetailsProps) {
  const dispatch = useAppDispatch()
  const [deleteAccount, { isLoading: isDeleting }] = useDeleteAccountMutation()
  const { copiedId, copy } = useClipboard()

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this account?")) {
      try {
        await deleteAccount(account.id).unwrap()
      } catch (error) {
        console.error("Error deleting account:", error)
      }
    }
  }

  const handleEdit = () => {
    dispatch(openModal({ type: "account", editingId: account.id }))
  }

  return (
    <div className="flex flex-col h-full bg-black">
      <div className="p-6 border-b border-border/50 backdrop-blur-sm bg-gradient-to-r from-teal-500/20 via-purple-500/20 to-cyan-500/20 border-glow-teal">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(45,212,191,0.5)]">
              {account.name}
            </h2>
            <p className="text-sm text-muted-foreground mt-2">Account credentials and secrets</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleEdit} className="h-8 bg-transparent border-purple-500 hover:border-purple-400">
              <Edit2 className="w-3.5 h-3.5 mr-1.5" />
              Edit
            </Button>
            <Button variant="destructive" size="sm" onClick={handleDelete} disabled={isDeleting} className="h-8">
              <Trash2 className="w-3.5 h-3.5 mr-1.5" />
              Delete
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-4 max-w-2xl">
          {Object.entries(account.data).length > 0 ? (
            Object.entries(account.data).map(([key, value]) => (
              <Card key={key} className="backdrop-blur bg-card/40 border-l-4 border-l-teal-500 border-r-0 border-t-0 border-b-0 border-border/50 hover:bg-card/60 hover:border-l-teal-400 transition-all">
                <CardContent className="p-4">
                  <MaskedSecretField label={key} value={String(value)} onCopy={(val) => copy(val, key)} />
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="backdrop-blur bg-card/40 border-border/50">
              <CardContent className="p-8 text-center text-muted-foreground">
                <p className="text-sm">No secrets stored for this account</p>
                <Button variant="outline" size="sm" onClick={handleEdit} className="mt-4 bg-transparent border-purple-500 hover:border-purple-400">
                  <Edit2 className="w-3.5 h-3.5 mr-1.5" />
                  Add Secrets
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
