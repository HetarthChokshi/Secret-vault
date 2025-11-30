"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useAppDispatch } from "@/src/store"
import { useCreateAccountMutation, useUpdateAccountMutation } from "@/src/store/api/vaultApi"
import { closeModal } from "@/src/store/slices/uiSlice"
import type { Account } from "@/src/store/slices/accountsSlice"
import type { Service } from "@/src/store/slices/servicesSlice"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Plus, Loader } from "lucide-react"

interface KeyValuePair {
  key: string
  value: string
}

interface AccountModalProps {
  open: boolean
  services: Service[]
  editingAccount?: Account | null
  serviceIdFromContext?: string
}

export default function AccountModal({ open, services, editingAccount, serviceIdFromContext }: AccountModalProps) {
  const dispatch = useAppDispatch()
  const [name, setName] = useState("")
  const [serviceId, setServiceId] = useState("")
  const [keyValuePairs, setKeyValuePairs] = useState<KeyValuePair[]>([{ key: "", value: "" }])
  const [createAccount, { isLoading: isCreating }] = useCreateAccountMutation()
  const [updateAccount, { isLoading: isUpdating }] = useUpdateAccountMutation()

  useEffect(() => {
    if (editingAccount) {
      setName(editingAccount.name)
      setServiceId(editingAccount.service_id)
      const pairs = Object.entries(editingAccount.data).map(([key, value]) => ({
        key,
        value,
      }))
      setKeyValuePairs(pairs.length > 0 ? pairs : [{ key: "", value: "" }])
    } else {
      setName("")
      setServiceId(serviceIdFromContext || services[0]?.id || "")
      setKeyValuePairs([{ key: "", value: "" }])
    }
  }, [editingAccount, services, open, serviceIdFromContext])

  const handleKeyChange = (index: number, newKey: string) => {
    const updated = [...keyValuePairs]
    updated[index].key = newKey
    setKeyValuePairs(updated)
  }

  const handleValueChange = (index: number, newValue: string) => {
    const updated = [...keyValuePairs]
    updated[index].value = newValue
    setKeyValuePairs(updated)
  }

  const addKeyValuePair = () => {
    setKeyValuePairs([...keyValuePairs, { key: "", value: "" }])
  }

  const removeKeyValuePair = (index: number) => {
    if (keyValuePairs.length > 1) {
      setKeyValuePairs(keyValuePairs.filter((_, i) => i !== index))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !serviceId) return

    const data: Record<string, string> = {}
    keyValuePairs.forEach(({ key, value }) => {
      if (key.trim()) {
        data[key.trim()] = value
      }
    })

    try {
      if (editingAccount) {
        await updateAccount({
          ...editingAccount,
          name: name.trim(),
          service_id: serviceId,
          data,
        }).unwrap()
      } else {
        await createAccount({
          name: name.trim(),
          service_id: serviceId,
          data,
        }).unwrap()
      }
      dispatch(closeModal())
    } catch (error) {
      console.error("Error saving account:", error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && dispatch(closeModal())}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{editingAccount ? "Edit Account" : "Create Account"}</DialogTitle>
          <DialogDescription>
            {editingAccount ? "Update account details and secrets" : "Create a new account"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="account-service">Service</Label>
            <Select value={serviceId} onValueChange={setServiceId}>
              <SelectTrigger id="account-service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((svc) => (
                  <SelectItem key={svc.id} value={svc.id}>
                    {svc.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="account-name">Account Name</Label>
            <Input
              id="account-name"
              placeholder="e.g., Main Account, Production"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isCreating || isUpdating}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Secrets (Key-Value Pairs)</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addKeyValuePair}
                disabled={isCreating || isUpdating}
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Field
              </Button>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto">
              {keyValuePairs.map((pair, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder="Key (e.g., password, username)"
                    value={pair.key}
                    onChange={(e) => handleKeyChange(index, e.target.value)}
                    disabled={isCreating || isUpdating}
                    className="flex-1"
                  />
                  <Input
                    placeholder="Value"
                    value={pair.value}
                    onChange={(e) => handleValueChange(index, e.target.value)}
                    disabled={isCreating || isUpdating}
                    className="flex-1"
                    type="password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeKeyValuePair(index)}
                    disabled={keyValuePairs.length === 1 || isCreating || isUpdating}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => dispatch(closeModal())}
              disabled={isCreating || isUpdating}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={!name.trim() || !serviceId || isCreating || isUpdating}>
              {(isCreating || isUpdating) && <Loader className="w-4 h-4 mr-2 animate-spin" />}
              {editingAccount ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
