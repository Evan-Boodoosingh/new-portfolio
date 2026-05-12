export type Theme = "light" | "dark"

export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  tagColor: "pink" | "blue" | "green" | "purple" | "orange"
  videoUrl?: string
  liveUrl?: string
  githubUrl?: string
  thumbnail?: string
  category: "fullstack" | "frontend" | "backend"
}

export interface StackItem {
  name: string
}

export interface StackGroup {
  title: string
  items: StackItem[]
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
}

export interface Stat {
  value: string
  label: string
}

export interface ContactFormData {
  name: string
  email: string
  inquiryType: "fan" | "booking" | "press" | "mentorship" | "collaboration" | "label"
  message: string
}