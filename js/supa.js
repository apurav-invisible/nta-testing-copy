import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://gfbodzxajifjcfmjnbij.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmYm9kenhhamlmamNmbWpuYmlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3NzE5MzcsImV4cCI6MjA5MDM0NzkzN30.c4MfML59MZ9gLwXHATBtfomlm71mEcYBsGGEzdAE-Mo'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)