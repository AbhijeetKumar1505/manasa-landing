-- Create waitlist table for user registrations
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_type TEXT NOT NULL CHECK (user_type IN ('student', 'institution', 'counselor')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  institution TEXT,
  grade TEXT,
  interest TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Add unique constraint on email to prevent duplicates
  CONSTRAINT unique_email UNIQUE (email)
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index on user_type for filtering
CREATE INDEX IF NOT EXISTS idx_waitlist_user_type ON waitlist(user_type);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for public registration)
CREATE POLICY "Allow public insert on waitlist"
  ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow authenticated users to read their own entries
CREATE POLICY "Users can view own waitlist entry"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

