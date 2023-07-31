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
      bookmark: {
        Row: {
          created_at: string
          id: string
          tweetid: string
          userid: string
        }
        Insert: {
          created_at?: string
          id: string
          tweetid: string
          userid: string
        }
        Update: {
          created_at?: string
          id?: string
          tweetid?: string
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookmark_tweetid_fkey"
            columns: ["tweetid"]
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookmark_userid_fkey"
            columns: ["userid"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      hashtag: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      hashtag_tweet: {
        Row: {
          hashtag_id: string
          tweetid: string
        }
        Insert: {
          hashtag_id: string
          tweetid: string
        }
        Update: {
          hashtag_id?: string
          tweetid?: string
        }
        Relationships: [
          {
            foreignKeyName: "hashtag_tweet_hashtag_id_fkey"
            columns: ["hashtag_id"]
            referencedRelation: "hashtag"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hashtag_tweet_tweetid_fkey"
            columns: ["tweetid"]
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          }
        ]
      }
      likes: {
        Row: {
          created_at: string
          id: string
          tweetid: string
          userid: string
        }
        Insert: {
          created_at?: string
          id: string
          tweetid: string
          userid: string
        }
        Update: {
          created_at?: string
          id?: string
          tweetid?: string
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_tweetid_fkey"
            columns: ["tweetid"]
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_userid_fkey"
            columns: ["userid"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          full_name: string | null
          id: string
          updated_at: string
          username: string | null
        }
        Insert: {
          full_name?: string | null
          id: string
          updated_at?: string
          username?: string | null
        }
        Update: {
          full_name?: string | null
          id?: string
          updated_at?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      replies: {
        Row: {
          body: string
          id: string
          replyid: string
          tweetid: string
          userid: string
        }
        Insert: {
          body: string
          id: string
          replyid: string
          tweetid: string
          userid: string
        }
        Update: {
          body?: string
          id?: string
          replyid?: string
          tweetid?: string
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: "replies_replyid_fkey"
            columns: ["replyid"]
            referencedRelation: "replies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "replies_tweetid_fkey"
            columns: ["tweetid"]
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "replies_userid_fkey"
            columns: ["userid"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      tweets: {
        Row: {
          body: string
          created_at: string
          id: string
          profile_id: string
          updated_at: string
        }
        Insert: {
          body: string
          created_at?: string
          id: string
          profile_id: string
          updated_at?: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          profile_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tweets_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
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
