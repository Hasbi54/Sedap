import axios from 'axios'

const API_URL = "https://sdhdnznrjpqiktbchkty.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkaGRuem5yanBxaWt0YmNoa3R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NzI1NDMsImV4cCI6MjA2NTM0ODU0M30.W0I_IQ4B6AIfhP1Kw3FoGQuE03zpPL49h4xw788_4TE"

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation"  // Supabase header biar response ada data terbaru
}

export const notesAPI = {
  async fetchNotes() {
    const response = await axios.get(API_URL, { headers })
    return response.data
  },

  async createNote(data) {
    const response = await axios.post(API_URL, data, { headers })
    return response.data
  },

  async updateNote(id, data) {
    // PATCH request untuk update data dengan filter id
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers })
    return response.data
  },

  async deleteNote(id) {
    // DELETE request dengan filter id
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
  }
}
