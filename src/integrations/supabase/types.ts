export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      api_keys: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          key_name: string
          key_value: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          key_name: string
          key_value: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          key_name?: string
          key_value?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      watch_arbitrage: {
        Row: {
          best_buy: string
          best_sell: string
          calculated_at: string
          id: string
          profit: number
          roi: number
          watch_id: string
        }
        Insert: {
          best_buy: string
          best_sell: string
          calculated_at?: string
          id?: string
          profit: number
          roi: number
          watch_id: string
        }
        Update: {
          best_buy?: string
          best_sell?: string
          calculated_at?: string
          id?: string
          profit?: number
          roi?: number
          watch_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "watch_arbitrage_watch_id_fkey"
            columns: ["watch_id"]
            isOneToOne: true
            referencedRelation: "watches"
            referencedColumns: ["id"]
          },
        ]
      }
      watch_historical_prices: {
        Row: {
          currency: string
          date: string
          id: string
          price: number
          region: string
          watch_id: string
        }
        Insert: {
          currency?: string
          date: string
          id?: string
          price: number
          region: string
          watch_id: string
        }
        Update: {
          currency?: string
          date?: string
          id?: string
          price?: number
          region?: string
          watch_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "watch_historical_prices_watch_id_fkey"
            columns: ["watch_id"]
            isOneToOne: false
            referencedRelation: "watches"
            referencedColumns: ["id"]
          },
        ]
      }
      watch_market_depth: {
        Row: {
          average_time_to_sell: number
          buy_orders: number
          id: string
          last_updated: string
          liquidity_score: number
          market: string
          sell_orders: number
          watch_id: string
        }
        Insert: {
          average_time_to_sell: number
          buy_orders: number
          id?: string
          last_updated?: string
          liquidity_score: number
          market: string
          sell_orders: number
          watch_id: string
        }
        Update: {
          average_time_to_sell?: number
          buy_orders?: number
          id?: string
          last_updated?: string
          liquidity_score?: number
          market?: string
          sell_orders?: number
          watch_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "watch_market_depth_watch_id_fkey"
            columns: ["watch_id"]
            isOneToOne: false
            referencedRelation: "watches"
            referencedColumns: ["id"]
          },
        ]
      }
      watch_prices: {
        Row: {
          currency: string
          id: string
          last_updated: string
          price: number
          region: string
          watch_id: string
        }
        Insert: {
          currency?: string
          id?: string
          last_updated?: string
          price: number
          region: string
          watch_id: string
        }
        Update: {
          currency?: string
          id?: string
          last_updated?: string
          price?: number
          region?: string
          watch_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "watch_prices_watch_id_fkey"
            columns: ["watch_id"]
            isOneToOne: false
            referencedRelation: "watches"
            referencedColumns: ["id"]
          },
        ]
      }
      watches: {
        Row: {
          brand: string
          created_at: string
          id: string
          image: string | null
          model: string
          reference: string
          updated_at: string
        }
        Insert: {
          brand: string
          created_at?: string
          id?: string
          image?: string | null
          model: string
          reference: string
          updated_at?: string
        }
        Update: {
          brand?: string
          created_at?: string
          id?: string
          image?: string | null
          model?: string
          reference?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_api_key: {
        Args: {
          p_key_name: string
        }
        Returns: string
      }
      get_watch_with_data: {
        Args: {
          watch_id: string
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
