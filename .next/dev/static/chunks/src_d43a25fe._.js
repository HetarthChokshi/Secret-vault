(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/store/slices/categoriesSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCategory",
    ()=>addCategory,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteCategory",
    ()=>deleteCategory,
    "setCategoriesError",
    ()=>setCategoriesError,
    "setCategoriesLoading",
    ()=>setCategoriesLoading,
    "setCategoriesSuccess",
    ()=>setCategoriesSuccess,
    "updateCategory",
    ()=>updateCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    items: [],
    loading: false,
    error: null
};
const categoriesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "categories",
    initialState,
    reducers: {
        setCategoriesLoading: (state)=>{
            state.loading = true;
            state.error = null;
        },
        setCategoriesSuccess: (state, action)=>{
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        setCategoriesError: (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        addCategory: (state, action)=>{
            state.items.push(action.payload);
        },
        updateCategory: (state, action)=>{
            const index = state.items.findIndex((cat)=>cat.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteCategory: (state, action)=>{
            state.items = state.items.filter((cat)=>cat.id !== action.payload);
        }
    }
});
const { setCategoriesLoading, setCategoriesSuccess, setCategoriesError, addCategory, updateCategory, deleteCategory } = categoriesSlice.actions;
const __TURBOPACK__default__export__ = categoriesSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/slices/servicesSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addService",
    ()=>addService,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteService",
    ()=>deleteService,
    "setServicesError",
    ()=>setServicesError,
    "setServicesLoading",
    ()=>setServicesLoading,
    "setServicesSuccess",
    ()=>setServicesSuccess,
    "updateService",
    ()=>updateService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    items: [],
    loading: false,
    error: null
};
const servicesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "services",
    initialState,
    reducers: {
        setServicesLoading: (state)=>{
            state.loading = true;
            state.error = null;
        },
        setServicesSuccess: (state, action)=>{
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        setServicesError: (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        addService: (state, action)=>{
            state.items.push(action.payload);
        },
        updateService: (state, action)=>{
            const index = state.items.findIndex((svc)=>svc.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteService: (state, action)=>{
            state.items = state.items.filter((svc)=>svc.id !== action.payload);
        }
    }
});
const { setServicesLoading, setServicesSuccess, setServicesError, addService, updateService, deleteService } = servicesSlice.actions;
const __TURBOPACK__default__export__ = servicesSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/slices/accountsSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addAccount",
    ()=>addAccount,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteAccount",
    ()=>deleteAccount,
    "selectAccount",
    ()=>selectAccount,
    "setAccountsError",
    ()=>setAccountsError,
    "setAccountsLoading",
    ()=>setAccountsLoading,
    "setAccountsSuccess",
    ()=>setAccountsSuccess,
    "updateAccount",
    ()=>updateAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    items: [],
    selectedAccountId: null,
    loading: false,
    error: null
};
const accountsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "accounts",
    initialState,
    reducers: {
        setAccountsLoading: (state)=>{
            state.loading = true;
            state.error = null;
        },
        setAccountsSuccess: (state, action)=>{
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        setAccountsError: (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        addAccount: (state, action)=>{
            state.items.push(action.payload);
        },
        updateAccount: (state, action)=>{
            const index = state.items.findIndex((acc)=>acc.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteAccount: (state, action)=>{
            state.items = state.items.filter((acc)=>acc.id !== action.payload);
        },
        selectAccount: (state, action)=>{
            state.selectedAccountId = action.payload;
        }
    }
});
const { setAccountsLoading, setAccountsSuccess, setAccountsError, addAccount, updateAccount, deleteAccount, selectAccount } = accountsSlice.actions;
const __TURBOPACK__default__export__ = accountsSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/slices/uiSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeModal",
    ()=>closeModal,
    "default",
    ()=>__TURBOPACK__default__export__,
    "openModal",
    ()=>openModal,
    "toggleCategory",
    ()=>toggleCategory,
    "toggleService",
    ()=>toggleService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    modalOpen: false,
    modalType: null,
    editingId: null,
    contextId: null,
    expandedCategories: [],
    expandedServices: []
};
const uiSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "ui",
    initialState,
    reducers: {
        openModal: (state, action)=>{
            state.modalOpen = true;
            state.modalType = action.payload.type;
            state.editingId = action.payload.editingId || null;
            state.contextId = action.payload.contextId || null;
        },
        closeModal: (state)=>{
            state.modalOpen = false;
            state.modalType = null;
            state.editingId = null;
            state.contextId = null;
        },
        toggleCategory: (state, action)=>{
            const index = state.expandedCategories.indexOf(action.payload);
            if (index > -1) {
                state.expandedCategories.splice(index, 1);
            } else {
                state.expandedCategories.push(action.payload);
            }
        },
        toggleService: (state, action)=>{
            const index = state.expandedServices.indexOf(action.payload);
            if (index > -1) {
                state.expandedServices.splice(index, 1);
            } else {
                state.expandedServices.push(action.payload);
            }
        }
    }
});
const { openModal, closeModal, toggleCategory, toggleService } = uiSlice.actions;
const __TURBOPACK__default__export__ = uiSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/api/vaultApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useCreateAccountMutation",
    ()=>useCreateAccountMutation,
    "useCreateCategoryMutation",
    ()=>useCreateCategoryMutation,
    "useCreateServiceMutation",
    ()=>useCreateServiceMutation,
    "useDeleteAccountMutation",
    ()=>useDeleteAccountMutation,
    "useDeleteCategoryMutation",
    ()=>useDeleteCategoryMutation,
    "useDeleteServiceMutation",
    ()=>useDeleteServiceMutation,
    "useGetAccountsQuery",
    ()=>useGetAccountsQuery,
    "useGetCategoriesQuery",
    ()=>useGetCategoriesQuery,
    "useGetServicesQuery",
    ()=>useGetServicesQuery,
    "useUpdateAccountMutation",
    ()=>useUpdateAccountMutation,
    "useUpdateCategoryMutation",
    ()=>useUpdateCategoryMutation,
    "useUpdateServiceMutation",
    ()=>useUpdateServiceMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://fotfghshrgksgdjxluhr.supabase.co") || "", ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvdGZnaHNocmdrc2dkanhsdWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1MTczMTIsImV4cCI6MjA4MDA5MzMxMn0.JijHYlyVBEKEu_zmOgoaQmfi7fQAn1G4KytN0pbTvO0") || "");
const vaultApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "vaultApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fakeBaseQuery"])(),
    tagTypes: [
        "Categories",
        "Services",
        "Accounts"
    ],
    endpoints: (builder)=>({
            // Categories
            getCategories: builder.query({
                async queryFn () {
                    try {
                        const { data, error } = await supabase.from("categories").select("*").order("name");
                        if (error) throw error;
                        return {
                            data: data || []
                        };
                    } catch (error) {
                        return {
                            error: error.message
                        };
                    }
                },
                providesTags: [
                    "Categories"
                ]
            }),
            createCategory: builder.mutation({
                async queryFn (newCategory) {
                    try {
                        const { data, error } = await supabase.from("categories").insert([
                            newCategory
                        ]).select().single();
                        if (error) throw error;
                        return {
                            data: data || {}
                        };
                    } catch (error) {
                        return {
                            error: error.message
                        };
                    }
                },
                invalidatesTags: [
                    "Categories"
                ]
            }),
            updateCategory: builder.mutation({
                async queryFn (category) {
                    try {
                        const { data, error } = await supabase.from("categories").update(category).eq("id", category.id).select().single();
                        if (error) throw error;
                        return {
                            data: data || {}
                        };
                    } catch (error) {
                        return {
                            error: error.message
                        };
                    }
                },
                invalidatesTags: [
                    "Categories"
                ]
            }),
            deleteCategory: builder.mutation({
                async queryFn (id) {
                    try {
                        const { error } = await supabase.from("categories").delete().eq("id", id);
                        if (error) throw error;
                        return {
                            data: undefined
                        };
                    } catch (error) {
                        return {
                            error: error.message
                        };
                    }
                },
                invalidatesTags: [
                    "Categories"
                ]
            }),
            // Services
            getServices: builder.query({
                async queryFn () {
                    try {
                        const { data, error } = await supabase.from("services").select("*").order("name");
                        if (error) throw error;
                        return {
                            data: data || []
                        };
                    } catch (error) {
                        return {
                            error: error.message
                        };
                    }
                },
                providesTags: [
                    "Services"
                ]
            }),
            createService: builder.mutation({
                async queryFn (newService) {
                    try {
                        const { data, error } = await supabase.from("services").insert([
                            newService
                        ]).select().single();
                        if (error) throw error;
                        return {
                            data: data || {}
                        };
                    } catch (error) {
                        return {
                            error: error.message
                        };
                    }
                },
                invalidatesTags: [
                    "Services"
                ]
            }),
            updateService: builder.mutation({
                async queryFn (service) {
                    try {
                        const { data, error } = await supabase.from("services").update(service).eq("id", service.id).select().single();
                        if (error) throw error;
                        return {
                            data: data || {}
                        };
                    } catch (error) {
                        return {
                            error: error.message
                        };
                    }
                },
                invalidatesTags: [
                    "Services"
                ]
            }),
            deleteService: builder.mutation({
                async queryFn (id) {
                    try {
                        const { error } = await supabase.from("services").delete().eq("id", id);
                        if (error) throw error;
                        return {
                            data: undefined
                        };
                    } catch (error) {
                        return {
                            error: error.message
                        };
                    }
                },
                invalidatesTags: [
                    "Services"
                ]
            }),
            // Accounts
            getAccounts: builder.query({
                async queryFn () {
                    try {
                        const { data, error } = await supabase.from("accounts").select("*").order("name");
                        if (error) throw error;
                        return {
                            data: data || []
                        };
                    } catch (error) {
                        return {
                            error: error.message
                        };
                    }
                },
                providesTags: [
                    "Accounts"
                ]
            }),
            createAccount: builder.mutation({
                async queryFn (newAccount) {
                    try {
                        const { data, error } = await supabase.from("accounts").insert([
                            newAccount
                        ]).select().single();
                        if (error) throw error;
                        return {
                            data: data || {}
                        };
                    } catch (error) {
                        return {
                            error: error.message
                        };
                    }
                },
                invalidatesTags: [
                    "Accounts"
                ]
            }),
            updateAccount: builder.mutation({
                async queryFn (account) {
                    try {
                        const { data, error } = await supabase.from("accounts").update(account).eq("id", account.id).select().single();
                        if (error) throw error;
                        return {
                            data: data || {}
                        };
                    } catch (error) {
                        return {
                            error: error.message
                        };
                    }
                },
                invalidatesTags: [
                    "Accounts"
                ]
            }),
            deleteAccount: builder.mutation({
                async queryFn (id) {
                    try {
                        const { error } = await supabase.from("accounts").delete().eq("id", id);
                        if (error) throw error;
                        return {
                            data: undefined
                        };
                    } catch (error) {
                        return {
                            error: error.message
                        };
                    }
                },
                invalidatesTags: [
                    "Accounts"
                ]
            })
        })
});
const { useGetCategoriesQuery, useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation, useGetServicesQuery, useCreateServiceMutation, useUpdateServiceMutation, useDeleteServiceMutation, useGetAccountsQuery, useCreateAccountMutation, useUpdateAccountMutation, useDeleteAccountMutation } = vaultApi;
const __TURBOPACK__default__export__ = vaultApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store,
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$categoriesSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/categoriesSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$servicesSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/servicesSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$accountsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/accountsSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$uiSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/uiSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$vaultApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/vaultApi.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        categories: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$categoriesSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        services: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$servicesSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        accounts: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$accountsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        ui: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$uiSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$vaultApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$vaultApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$vaultApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].middleware)
});
const useAppDispatch = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
};
_s(useAppDispatch, "jI3HA1r1Cumjdbu14H7G+TUj798=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d43a25fe._.js.map