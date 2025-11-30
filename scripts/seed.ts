import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function seed() {
  try {
    // Clear existing data
    await supabase.from("accounts").delete().neq("id", "00000000-0000-0000-0000-000000000000")
    await supabase.from("services").delete().neq("id", "00000000-0000-0000-0000-000000000000")
    await supabase.from("categories").delete().neq("id", "00000000-0000-0000-0000-000000000000")

    // Create categories
    const { data: categoriesData } = await supabase
      .from("categories")
      .insert([{ name: "Work" }, { name: "Personal" }, { name: "Finance" }])
      .select()

    if (!categoriesData) throw new Error("Failed to create categories")

    // Create services
    const { data: servicesData } = await supabase
      .from("services")
      .insert([
        { category_id: categoriesData[0].id, name: "GitHub" },
        { category_id: categoriesData[0].id, name: "AWS" },
        { category_id: categoriesData[1].id, name: "Gmail" },
        { category_id: categoriesData[2].id, name: "Bank" },
      ])
      .select()

    if (!servicesData) throw new Error("Failed to create services")

    // Create accounts with sample secrets
    await supabase.from("accounts").insert([
      {
        service_id: servicesData[0].id,
        name: "Main Account",
        data: { username: "john_doe", token: "ghp_xxxxxxxxxxxx" },
      },
      {
        service_id: servicesData[1].id,
        name: "Production",
        data: { accessKey: "AKIA...", secretKey: "wJalrXUtnFEMI/..." },
      },
      {
        service_id: servicesData[2].id,
        name: "Personal",
        data: { email: "john@example.com", password: "secure_password_123" },
      },
      {
        service_id: servicesData[3].id,
        name: "Checking",
        data: { accountNumber: "1234567890", pin: "1234" },
      },
    ])

    console.log("Database seeded successfully!")
  } catch (error) {
    console.error("Error seeding database:", error)
    process.exit(1)
  }
}

seed()
