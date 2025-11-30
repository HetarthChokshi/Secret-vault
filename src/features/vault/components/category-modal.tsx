"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useAppDispatch } from "@/src/store"
import { useCreateCategoryMutation, useUpdateCategoryMutation } from "@/src/store/api/vaultApi"
import { closeModal } from "@/src/store/slices/uiSlice"
import type { Category } from "@/src/store/slices/categoriesSlice"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader } from "lucide-react"

interface CategoryModalProps {
  open: boolean
  editingCategory?: Category | null
}

export default function CategoryModal({ open, editingCategory }: CategoryModalProps) {
  const dispatch = useAppDispatch()
  const [name, setName] = useState("")
  const [createCategory, { isLoading: isCreating }] = useCreateCategoryMutation()
  const [updateCategory, { isLoading: isUpdating }] = useUpdateCategoryMutation()

  useEffect(() => {
    if (editingCategory) {
      setName(editingCategory.name)
    } else {
      setName("")
    }
  }, [editingCategory, open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    try {
      if (editingCategory) {
        await updateCategory({
          ...editingCategory,
          name: name.trim(),
        }).unwrap()
      } else {
        await createCategory({ name: name.trim() }).unwrap()
      }
      dispatch(closeModal())
    } catch (error) {
      console.error("Error saving category:", error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && dispatch(closeModal())}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{editingCategory ? "Edit Category" : "Create Category"}</DialogTitle>
          <DialogDescription>
            {editingCategory ? "Update the category name" : "Create a new vault category"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category-name">Category Name</Label>
            <Input
              id="category-name"
              placeholder="e.g., Work, Personal, Finance"
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
            <Button type="submit" disabled={!name.trim() || isCreating || isUpdating}>
              {(isCreating || isUpdating) && <Loader className="w-4 h-4 mr-2 animate-spin" />}
              {editingCategory ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
