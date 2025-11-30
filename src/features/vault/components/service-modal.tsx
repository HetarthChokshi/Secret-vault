"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useAppDispatch } from "@/src/store"
import { useCreateServiceMutation, useUpdateServiceMutation } from "@/src/store/api/vaultApi"
import { closeModal } from "@/src/store/slices/uiSlice"
import type { Service } from "@/src/store/slices/servicesSlice"
import type { Category } from "@/src/store/slices/categoriesSlice"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader } from "lucide-react"

interface ServiceModalProps {
  open: boolean
  categories: Category[]
  editingService?: Service | null
  categoryIdFromContext?: string
}

export default function ServiceModal({ open, categories, editingService, categoryIdFromContext }: ServiceModalProps) {
  const dispatch = useAppDispatch()
  const [name, setName] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [createService, { isLoading: isCreating }] = useCreateServiceMutation()
  const [updateService, { isLoading: isUpdating }] = useUpdateServiceMutation()

  useEffect(() => {
    if (editingService) {
      setName(editingService.name)
      setCategoryId(editingService.category_id)
    } else {
      setName("")
      setCategoryId(categoryIdFromContext || categories[0]?.id || "")
    }
  }, [editingService, categories, open, categoryIdFromContext])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !categoryId) return

    try {
      if (editingService) {
        await updateService({
          ...editingService,
          name: name.trim(),
          category_id: categoryId,
        }).unwrap()
      } else {
        await createService({
          name: name.trim(),
          category_id: categoryId,
        }).unwrap()
      }
      dispatch(closeModal())
    } catch (error) {
      console.error("Error saving service:", error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && dispatch(closeModal())}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{editingService ? "Edit Service" : "Create Service"}</DialogTitle>
          <DialogDescription>
            {editingService ? "Update the service details" : "Create a new service"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="service-category">Category</Label>
            <Select value={categoryId} onValueChange={setCategoryId}>
              <SelectTrigger id="service-category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="service-name">Service Name</Label>
            <Input
              id="service-name"
              placeholder="e.g., GitHub, AWS, Gmail"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isCreating || isUpdating}
            />
          </div>
          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => dispatch(closeModal())}
              disabled={isCreating || isUpdating}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={!name.trim() || !categoryId || isCreating || isUpdating}>
              {(isCreating || isUpdating) && <Loader className="w-4 h-4 mr-2 animate-spin" />}
              {editingService ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
