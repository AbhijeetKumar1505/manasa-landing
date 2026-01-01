-- Fix RLS policy to allow inserts from the anon role
-- The previous policies used 'public' but Supabase uses 'anon' for anonymous API requests

-- Step 1: Drop the existing policy
DROP POLICY IF EXISTS "Allow public insert on waitlist" ON waitlist;

-- Step 2: Create the new policy with anon role
-- This allows anyone using the anon key to insert records
CREATE POLICY "Allow anon insert on waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Optional: Also allow authenticated users to insert if needed
CREATE POLICY "Allow authenticated insert on waitlist"
  ON waitlist
  FOR INSERT
  TO authenticated
  WITH CHECK (true);
