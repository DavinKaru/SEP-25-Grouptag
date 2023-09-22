import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tdxgtwfbyokolwkrdeov.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkeGd0d2ZieW9rb2x3a3JkZW92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyMTY0OTgsImV4cCI6MjAwNjc5MjQ5OH0._x0WRsOdElbrMWuyvscIj2B3opYVw0IX0bK_tNakvrA';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);