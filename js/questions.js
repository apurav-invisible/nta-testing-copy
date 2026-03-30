import { supabase } from './supa.js'

export const getQuestions = async () => {
  const { data, error } = await supabase
    .from('questions')
    .select('*')
  
  if (error) {
    console.log("Error fetching questions:", error)
    return []
  }

  return data
}
