import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"
import { createBrowserClient } from "@supabase/ssr"
import type { Category } from "../slices/categoriesSlice"
import type { Service } from "../slices/servicesSlice"
import type { Account } from "../slices/accountsSlice"

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
)

const vaultApi = createApi({
  reducerPath: "vaultApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Categories", "Services", "Accounts"],
  endpoints: (builder) => ({
    // Categories
    getCategories: builder.query<Category[], void>({
      async queryFn() {
        try {
          const { data, error } = await supabase.from("categories").select("*").order("name")
          if (error) throw error
          return { data: data || [] }
        } catch (error) {
          return { error: (error as Error).message }
        }
      },
      providesTags: ["Categories"],
    }),
    createCategory: builder.mutation<Category, Omit<Category, "id">>({
      async queryFn(newCategory) {
        try {
          const { data, error } = await supabase.from("categories").insert([newCategory]).select().single()
          if (error) throw error
          return { data: data || ({} as Category) }
        } catch (error) {
          return { error: (error as Error).message }
        }
      },
      invalidatesTags: ["Categories"],
    }),
    updateCategory: builder.mutation<Category, Category>({
      async queryFn(category) {
        try {
          const { data, error } = await supabase
            .from("categories")
            .update(category)
            .eq("id", category.id)
            .select()
            .single()
          if (error) throw error
          return { data: data || ({} as Category) }
        } catch (error) {
          return { error: (error as Error).message }
        }
      },
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: builder.mutation<void, string>({
      async queryFn(id) {
        try {
          const { error } = await supabase.from("categories").delete().eq("id", id)
          if (error) throw error
          return { data: undefined }
        } catch (error) {
          return { error: (error as Error).message }
        }
      },
      invalidatesTags: ["Categories"],
    }),

    // Services
    getServices: builder.query<Service[], void>({
      async queryFn() {
        try {
          const { data, error } = await supabase.from("services").select("*").order("name")
          if (error) throw error
          return { data: data || [] }
        } catch (error) {
          return { error: (error as Error).message }
        }
      },
      providesTags: ["Services"],
    }),
    createService: builder.mutation<Service, Omit<Service, "id">>({
      async queryFn(newService) {
        try {
          const { data, error } = await supabase.from("services").insert([newService]).select().single()
          if (error) throw error
          return { data: data || ({} as Service) }
        } catch (error) {
          return { error: (error as Error).message }
        }
      },
      invalidatesTags: ["Services"],
    }),
    updateService: builder.mutation<Service, Service>({
      async queryFn(service) {
        try {
          const { data, error } = await supabase.from("services").update(service).eq("id", service.id).select().single()
          if (error) throw error
          return { data: data || ({} as Service) }
        } catch (error) {
          return { error: (error as Error).message }
        }
      },
      invalidatesTags: ["Services"],
    }),
    deleteService: builder.mutation<void, string>({
      async queryFn(id) {
        try {
          const { error } = await supabase.from("services").delete().eq("id", id)
          if (error) throw error
          return { data: undefined }
        } catch (error) {
          return { error: (error as Error).message }
        }
      },
      invalidatesTags: ["Services"],
    }),

    // Accounts
    getAccounts: builder.query<Account[], void>({
      async queryFn() {
        try {
          const { data, error } = await supabase.from("accounts").select("*").order("name")
          if (error) throw error
          return { data: data || [] }
        } catch (error) {
          return { error: (error as Error).message }
        }
      },
      providesTags: ["Accounts"],
    }),
    createAccount: builder.mutation<Account, Omit<Account, "id">>({
      async queryFn(newAccount) {
        try {
          const { data, error } = await supabase.from("accounts").insert([newAccount]).select().single()
          if (error) throw error
          return { data: data || ({} as Account) }
        } catch (error) {
          return { error: (error as Error).message }
        }
      },
      invalidatesTags: ["Accounts"],
    }),
    updateAccount: builder.mutation<Account, Account>({
      async queryFn(account) {
        try {
          const { data, error } = await supabase.from("accounts").update(account).eq("id", account.id).select().single()
          if (error) throw error
          return { data: data || ({} as Account) }
        } catch (error) {
          return { error: (error as Error).message }
        }
      },
      invalidatesTags: ["Accounts"],
    }),
    deleteAccount: builder.mutation<void, string>({
      async queryFn(id) {
        try {
          const { error } = await supabase.from("accounts").delete().eq("id", id)
          if (error) throw error
          return { data: undefined }
        } catch (error) {
          return { error: (error as Error).message }
        }
      },
      invalidatesTags: ["Accounts"],
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetServicesQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useGetAccountsQuery,
  useCreateAccountMutation,
  useUpdateAccountMutation,
  useDeleteAccountMutation,
} = vaultApi

export default vaultApi
