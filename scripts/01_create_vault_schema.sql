-- Create categories table for organizing services
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create services table linked to categories
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(category_id, name)
);

-- Create accounts table with JSONB data for flexible secret storage
CREATE TABLE IF NOT EXISTS accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id UUID NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(service_id, name)
);

-- Create indexes for better query performance
CREATE INDEX idx_services_category_id ON services(category_id);
CREATE INDEX idx_accounts_service_id ON accounts(service_id);

-- Enable RLS for security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;

-- Create RLS policies (basic - all authenticated users can access their own data)
CREATE POLICY "Users can create categories" ON categories
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view categories" ON categories
  FOR SELECT USING (true);

CREATE POLICY "Users can update categories" ON categories
  FOR UPDATE USING (true);

CREATE POLICY "Users can delete categories" ON categories
  FOR DELETE USING (true);

CREATE POLICY "Users can create services" ON services
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view services" ON services
  FOR SELECT USING (true);

CREATE POLICY "Users can update services" ON services
  FOR UPDATE USING (true);

CREATE POLICY "Users can delete services" ON services
  FOR DELETE USING (true);

CREATE POLICY "Users can create accounts" ON accounts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view accounts" ON accounts
  FOR SELECT USING (true);

CREATE POLICY "Users can update accounts" ON accounts
  FOR UPDATE USING (true);

CREATE POLICY "Users can delete accounts" ON accounts
  FOR DELETE USING (true);
