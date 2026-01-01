-- Simple fix: Drop and recreate the policy
-- Run this in Supabase SQL Editor

-- Step 1: Drop the existing policy
DROP POLICY IF EXISTS "Allow public insert on waitlist" ON waitlist;

-- Step 2: Create the new policy with public role
CREATE POLICY "Allow public insert on waitlist"
  ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

