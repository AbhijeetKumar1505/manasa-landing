# Supabase Database Setup

## Waitlist Table Migration

This directory contains SQL migrations for the Supabase database.

### Running the Migrations

To set up the waitlist table in your Supabase project, you need to run the migration files in order.

#### Option 1: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard at https://xcnvkqsdxtchnupyyvzf.supabase.co
2. Navigate to **SQL Editor**
3. Run each migration file in order:
   - First: Copy and run `migrations/001_create_waitlist_table.sql`
   - Then: Copy and run `migrations/003_fix_waitlist_anon_policy.sql` (IMPORTANT: This fixes the RLS policy issue)
4. Click **Run** to execute each migration

**Note:** The `003_fix_waitlist_anon_policy.sql` migration is critical. It fixes the Row Level Security policy to work with Supabase's `anon` role, which is required for public registration to work.

#### Option 2: Using Supabase CLI

If you have the Supabase CLI installed:

```bash
# Make sure you're logged in
supabase login

# Link your project
supabase link --project-ref oukuvnursxsroxzczgfj

# Apply all migrations
supabase db push
```

### What the Migration Creates

The migration creates a `waitlist` table with:

- **Columns:**
  - `id` (UUID, primary key)
  - `user_type` (TEXT) - 'student', 'institution', or 'counselor'
  - `name` (TEXT, required)
  - `email` (TEXT, required, unique)
  - `phone` (TEXT, required)
  - `institution` (TEXT, optional)
  - `grade` (TEXT, optional)
  - `interest` (TEXT, optional)
  - `created_at` (TIMESTAMP)
  - `updated_at` (TIMESTAMP)

- **Indexes:**
  - Index on `email` for faster lookups
  - Index on `user_type` for filtering
  - Index on `created_at` for sorting

- **Security:**
  - Row Level Security (RLS) enabled
  - Public insert policy (anyone can register)
  - Authenticated users can view their own entries

- **Features:**
  - Unique constraint on email (prevents duplicate registrations)
  - Automatic `updated_at` timestamp via trigger

### Testing

After running the migration, you can test the setup by:

1. Going to `/get-started` on your website
2. Filling out the registration form
3. Submitting it
4. Checking the `waitlist` table in your Supabase dashboard to see the new entry

