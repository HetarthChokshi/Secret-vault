"use client"
import { useAppSelector } from "@/src/store"
import { useGetCategoriesQuery, useGetServicesQuery, useGetAccountsQuery } from "@/src/store/api/vaultApi"
import CategoryModal from "./category-modal"
import ServiceModal from "./service-modal"
import AccountModal from "./account-modal"

export default function CRUDModalsContainer() {
  const { modalOpen, modalType, editingId, contextId } = useAppSelector((state) => state.ui)
  const { data: categories = [] } = useGetCategoriesQuery()
  const { data: services = [] } = useGetServicesQuery()
  const { data: accounts = [] } = useGetAccountsQuery()

  const editingCategory = editingId ? categories.find((c) => c.id === editingId) : null
  const editingService = editingId ? services.find((s) => s.id === editingId) : null
  const editingAccount = editingId ? accounts.find((a) => a.id === editingId) : null

  return (
    <>
      <CategoryModal open={modalOpen && modalType === "category"} editingCategory={editingCategory} />
      <ServiceModal
        open={modalOpen && modalType === "service"}
        categories={categories}
        editingService={editingService}
        categoryIdFromContext={contextId || undefined}
      />
      <AccountModal
        open={modalOpen && modalType === "account"}
        services={services}
        editingAccount={editingAccount}
        serviceIdFromContext={contextId || undefined}
      />
    </>
  )
}
