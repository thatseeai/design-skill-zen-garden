// 고정 더미 데이터 - 모든 페이지에서 동일하게 사용

export interface KPIData {
  id: string
  title: string
  value: string
  change: number
  changeLabel: string
}

export interface TableRowData {
  id: string
  name: string
  email: string
  status: "active" | "inactive" | "pending"
  role: string
  department: string
  lastActive: string
}

export interface ActivityItem {
  id: string
  user: string
  action: string
  timestamp: string
}

export const kpiData: KPIData[] = [
  {
    id: "kpi-1",
    title: "Total Users",
    value: "12,847",
    change: 12.5,
    changeLabel: "vs last month",
  },
  {
    id: "kpi-2",
    title: "Active Sessions",
    value: "3,421",
    change: -2.3,
    changeLabel: "vs last week",
  },
  {
    id: "kpi-3",
    title: "Revenue",
    value: "$89,432",
    change: 8.1,
    changeLabel: "vs last quarter",
  },
]

export const tableData: TableRowData[] = [
  {
    id: "row-1",
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "active",
    role: "Admin",
    department: "Engineering",
    lastActive: "2 hours ago",
  },
  {
    id: "row-2",
    name: "Bob Smith",
    email: "bob@example.com",
    status: "active",
    role: "Developer",
    department: "Engineering",
    lastActive: "5 mins ago",
  },
  {
    id: "row-3",
    name: "Carol White",
    email: "carol@example.com",
    status: "pending",
    role: "Designer",
    department: "Design",
    lastActive: "1 day ago",
  },
  {
    id: "row-4",
    name: "David Brown",
    email: "david@example.com",
    status: "inactive",
    role: "Manager",
    department: "Sales",
    lastActive: "3 days ago",
  },
  {
    id: "row-5",
    name: "Emma Davis",
    email: "emma@example.com",
    status: "active",
    role: "Developer",
    department: "Engineering",
    lastActive: "1 hour ago",
  },
  {
    id: "row-6",
    name: "Frank Miller",
    email: "frank@example.com",
    status: "active",
    role: "Analyst",
    department: "Finance",
    lastActive: "30 mins ago",
  },
  {
    id: "row-7",
    name: "Grace Lee",
    email: "grace@example.com",
    status: "pending",
    role: "Developer",
    department: "Engineering",
    lastActive: "2 days ago",
  },
  {
    id: "row-8",
    name: "Henry Wilson",
    email: "henry@example.com",
    status: "inactive",
    role: "Support",
    department: "Customer Service",
    lastActive: "1 week ago",
  },
  {
    id: "row-9",
    name: "Ivy Chen",
    email: "ivy@example.com",
    status: "active",
    role: "Designer",
    department: "Design",
    lastActive: "15 mins ago",
  },
  {
    id: "row-10",
    name: "Jack Taylor",
    email: "jack@example.com",
    status: "active",
    role: "Developer",
    department: "Engineering",
    lastActive: "Just now",
  },
]

export const activityData: ActivityItem[] = [
  {
    id: "act-1",
    user: "Alice Johnson",
    action: "Updated project settings",
    timestamp: "2 hours ago",
  },
  {
    id: "act-2",
    user: "Bob Smith",
    action: "Deployed new feature",
    timestamp: "3 hours ago",
  },
  {
    id: "act-3",
    user: "Carol White",
    action: "Submitted design review",
    timestamp: "5 hours ago",
  },
  {
    id: "act-4",
    user: "David Brown",
    action: "Approved budget request",
    timestamp: "1 day ago",
  },
  {
    id: "act-5",
    user: "Emma Davis",
    action: "Merged pull request #142",
    timestamp: "1 day ago",
  },
]

export const departmentOptions = [
  { value: "engineering", label: "Engineering" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "finance", label: "Finance" },
  { value: "customer-service", label: "Customer Service" },
]
