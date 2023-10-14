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
      banned_users: {
        Row: {
          created_at: string
          group_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          group_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          group_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "banned_users_group_id_fkey"
            columns: ["group_id"]
            referencedRelation: "groups"
            referencedColumns: ["group_id"]
          }
        ]
      }
      comments: {
        Row: {
          comment_id: string
          comment_reply: boolean
          content: string
          created_at: string
          likes: number
          parent_comment_id: string | null
          post_id: string
          shares: number
          user_id: string
        }
        Insert: {
          comment_id?: string
          comment_reply?: boolean
          content: string
          created_at?: string
          likes?: number
          parent_comment_id?: string | null
          post_id: string
          shares?: number
          user_id: string
        }
        Update: {
          comment_id?: string
          comment_reply?: boolean
          content?: string
          created_at?: string
          likes?: number
          parent_comment_id?: string | null
          post_id?: string
          shares?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            referencedRelation: "comments"
            referencedColumns: ["comment_id"]
          },
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["post_id"]
          }
        ]
      }
      companies: {
        Row: {
          company_id: string
          created_at: string
          logo: string | null
          name: string
        }
        Insert: {
          company_id?: string
          created_at?: string
          logo?: string | null
          name: string
        }
        Update: {
          company_id?: string
          created_at?: string
          logo?: string | null
          name?: string
        }
        Relationships: []
      }
      connection_requests: {
        Row: {
          created_at: string
          reciever_id: string
          sender_id: string
        }
        Insert: {
          created_at?: string
          reciever_id: string
          sender_id: string
        }
        Update: {
          created_at?: string
          reciever_id?: string
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "connection_requests_reciever_id_fkey"
            columns: ["reciever_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "connection_requests_sender_id_fkey"
            columns: ["sender_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      connections: {
        Row: {
          connection_id: string
          created_at: string
          user_id: string
        }
        Insert: {
          connection_id: string
          created_at?: string
          user_id: string
        }
        Update: {
          connection_id?: string
          created_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "connections_connection_id_fkey"
            columns: ["connection_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      group_admins: {
        Row: {
          created_at: string
          group_id: string
          is_owner: boolean
          user_id: string
        }
        Insert: {
          created_at?: string
          group_id: string
          is_owner: boolean
          user_id: string
        }
        Update: {
          created_at?: string
          group_id?: string
          is_owner?: boolean
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_admins_group_id_fkey"
            columns: ["group_id"]
            referencedRelation: "groups"
            referencedColumns: ["group_id"]
          },
          {
            foreignKeyName: "group_admins_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      group_users: {
        Row: {
          created_at: string
          group_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          group_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          group_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_users_group_id_fkey"
            columns: ["group_id"]
            referencedRelation: "groups"
            referencedColumns: ["group_id"]
          },
          {
            foreignKeyName: "group_users_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      groups: {
        Row: {
          banner_url: string | null
          created_at: string
          description: string | null
          group_id: string
          likes: number
          logo_url: string | null
          name: string
          public: boolean
          shares: number
          short_description: string | null
          tags: Json | null
        }
        Insert: {
          banner_url?: string | null
          created_at?: string
          description?: string | null
          group_id?: string
          likes?: number
          logo_url?: string | null
          name: string
          public: boolean
          shares?: number
          short_description?: string | null
          tags?: Json | null
        }
        Update: {
          banner_url?: string | null
          created_at?: string
          description?: string | null
          group_id?: string
          likes?: number
          logo_url?: string | null
          name?: string
          public?: boolean
          shares?: number
          short_description?: string | null
          tags?: Json | null
        }
        Relationships: []
      }
      industries: {
        Row: {
          created_at: string
          industry_id: string
          name: string
        }
        Insert: {
          created_at?: string
          industry_id?: string
          name: string
        }
        Update: {
          created_at?: string
          industry_id?: string
          name?: string
        }
        Relationships: []
      }
      interests: {
        Row: {
          created_at: string
          interest_id: string
          name: string
        }
        Insert: {
          created_at?: string
          interest_id?: string
          name: string
        }
        Update: {
          created_at?: string
          interest_id?: string
          name?: string
        }
        Relationships: []
      }
      join_requests: {
        Row: {
          created_at: string
          group_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          group_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          group_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "join_requests_group_id_fkey"
            columns: ["group_id"]
            referencedRelation: "groups"
            referencedColumns: ["group_id"]
          }
        ]
      }
      posts: {
        Row: {
          content: string | null
          created_at: string
          group_id: string
          likes: number
          media_url: string | null
          post_id: string
          shares: number
          tags: Json | null
          title: string
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          group_id: string
          likes?: number
          media_url?: string | null
          post_id?: string
          shares?: number
          tags?: Json | null
          title: string
          user_id: string
        }
        Update: {
          content?: string | null
          created_at?: string
          group_id?: string
          likes?: number
          media_url?: string | null
          post_id?: string
          shares?: number
          tags?: Json | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_group_id_fkey"
            columns: ["group_id"]
            referencedRelation: "groups"
            referencedColumns: ["group_id"]
          },
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      universities: {
        Row: {
          city: string | null
          country: string | null
          created_at: string
          name: string
          university_id: string
        }
        Insert: {
          city?: string | null
          country?: string | null
          created_at?: string
          name: string
          university_id?: string
        }
        Update: {
          city?: string | null
          country?: string | null
          created_at?: string
          name?: string
          university_id?: string
        }
        Relationships: []
      }
      university_courses: {
        Row: {
          course_id: string
          created_at: string
          name: string
          university_id: string
        }
        Insert: {
          course_id?: string
          created_at?: string
          name: string
          university_id: string
        }
        Update: {
          course_id?: string
          created_at?: string
          name?: string
          university_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "university_courses_university_id_fkey"
            columns: ["university_id"]
            referencedRelation: "universities"
            referencedColumns: ["university_id"]
          }
        ]
      }
      user_courses: {
        Row: {
          course_id: string
          created_at: string
          end_date: string | null
          start_date: string
          university_id: string | null
          user_id: string
        }
        Insert: {
          course_id: string
          created_at?: string
          end_date?: string | null
          start_date: string
          university_id?: string | null
          user_id: string
        }
        Update: {
          course_id?: string
          created_at?: string
          end_date?: string | null
          start_date?: string
          university_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_courses_course_id_fkey"
            columns: ["course_id"]
            referencedRelation: "university_courses"
            referencedColumns: ["course_id"]
          },
          {
            foreignKeyName: "user_courses_university_id_fkey"
            columns: ["university_id"]
            referencedRelation: "universities"
            referencedColumns: ["university_id"]
          },
          {
            foreignKeyName: "user_courses_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      user_industries: {
        Row: {
          created_at: string
          industry_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          industry_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          industry_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_industries_industry_id_fkey"
            columns: ["industry_id"]
            referencedRelation: "industries"
            referencedColumns: ["industry_id"]
          }
        ]
      }
      user_interests: {
        Row: {
          created_at: string
          interest_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          interest_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          interest_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_interests_interest_id_fkey"
            columns: ["interest_id"]
            referencedRelation: "interests"
            referencedColumns: ["interest_id"]
          }
        ]
      }
      user_liked_comments: {
        Row: {
          comment_id: string
          created_at: string
          user_id: string
        }
        Insert: {
          comment_id: string
          created_at?: string
          user_id: string
        }
        Update: {
          comment_id?: string
          created_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_liked_comments_comment_id_fkey"
            columns: ["comment_id"]
            referencedRelation: "comments"
            referencedColumns: ["comment_id"]
          }
        ]
      }
      user_liked_posts: {
        Row: {
          comment_id: string
          created_at: string
          user_id: string
        }
        Insert: {
          comment_id: string
          created_at?: string
          user_id: string
        }
        Update: {
          comment_id?: string
          created_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_liked_posts_comment_id_fkey"
            columns: ["comment_id"]
            referencedRelation: "comments"
            referencedColumns: ["comment_id"]
          },
          {
            foreignKeyName: "user_liked_posts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      user_roles: {
        Row: {
          company_id: string
          created_at: string
          end_date: string | null
          name: string
          start_date: string
          user_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          end_date?: string | null
          name: string
          start_date: string
          user_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          end_date?: string | null
          name?: string
          start_date?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["company_id"]
          }
        ]
      }
      users: {
        Row: {
          bio: string | null
          created_at: string
          date_of_birth: string | null
          "experience ": Json | null
          first_name: string
          image_url: string | null
          last_name: string
          user_id: string
          video_url: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string
          date_of_birth?: string | null
          "experience "?: Json | null
          first_name: string
          image_url?: string | null
          last_name: string
          user_id?: string
          video_url?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string
          date_of_birth?: string | null
          "experience "?: Json | null
          first_name?: string
          image_url?: string | null
          last_name?: string
          user_id?: string
          video_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_groups_page: {
        Args: Record<PropertyKey, never>
        Returns: {
          group_id: string
          image_url: string
        }[]
      }
      get_mutuals: {
        Args: {
          search_user_id: string
        }
        Returns: {
          connection_id: string
          first_name: string
          last_name: string
          image_url: string
          course_name: string
          university_name: string
        }[]
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
