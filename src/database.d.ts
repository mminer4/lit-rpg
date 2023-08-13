export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      adventures: {
        Row: {
          contents: Json | null
          created_at: string
          description: string | null
          id: number
          name: string | null
          updated_at: string | null
        }
        Insert: {
          contents?: Json | null
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          contents?: Json | null
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
