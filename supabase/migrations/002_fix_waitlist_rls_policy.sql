-- Fix RLS policy to allow inserts from all roles (public)
-- Drop the existing policy if it exists
DROP POLICY IF EXISTS "Allow public insert on waitlist" ON waitlist;

-- Wait a moment for the drop to complete (PostgreSQL handles this automatically)
-- Create a new policy that allows inserts from anyone (public role)
CREATE POLICY "Allow public insert on waitlist"
  ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

