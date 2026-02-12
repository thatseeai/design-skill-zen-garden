import { useState } from "react"
import { NavLink } from "react-router-dom"
import { toast } from "sonner"
import {
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  Info,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react"

import { useTheme } from "@/components/ThemeProvider"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { kpiData, tableData, activityData, departmentOptions } from "./data"
import type { StylePreset } from "./types"
import { pages } from "@/pages"

interface StandardShowcaseProps {
  styles: StylePreset
  pageName: string
}

export function StandardShowcase({ styles, pageName }: StandardShowcaseProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const handleToast = () => {
    toast.success("Action completed successfully!", {
      description: "Your changes have been saved.",
    })
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 md:relative md:translate-x-0 flex flex-col overflow-hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          styles.layout.sidebar
        )}
      >
        <div className="flex h-14 shrink-0 items-center justify-between px-4">
          <span className="text-lg font-bold">Zen Garden</span>
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto px-2 pb-3">
          {pages.map((page) => (
            <NavLink
              key={page.slug}
              to={`/${page.slug}`}
              className={({ isActive }) =>
                cn(
                  styles.layout.sidebarItem,
                  isActive && styles.layout.sidebarItemActive
                )
              }
              onClick={() => setSidebarOpen(false)}
            >
              {page.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar */}
        <header className={cn("flex h-14 items-center gap-4 px-4", styles.layout.topbar)}>
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold">{pageName}</h1>
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className={cn(styles.button.ghost, "h-9 w-9")}
              aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button className={styles.button.primary} size="sm">
              New Item
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className={cn("flex-1 overflow-auto", styles.layout.content)}>
          {/* KPI Cards */}
          <section className={styles.layout.section}>
            <h2 className={styles.layout.sectionTitle}>Dashboard Overview</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {kpiData.map((kpi) => (
                <Card key={kpi.id} className={styles.card.wrapper}>
                  <CardHeader className={cn("pb-2", styles.card.header)}>
                    <CardTitle className={cn("text-sm font-medium", styles.kpi.title)}>
                      {kpi.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className={styles.card.content}>
                    <div className={cn("text-2xl font-bold", styles.kpi.value)}>
                      {kpi.value}
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <Badge
                        className={
                          kpi.change > 0
                            ? styles.kpi.badge.positive
                            : styles.kpi.badge.negative
                        }
                      >
                        {kpi.change > 0 ? (
                          <TrendingUp className="mr-1 h-3 w-3" />
                        ) : (
                          <TrendingDown className="mr-1 h-3 w-3" />
                        )}
                        {Math.abs(kpi.change)}%
                      </Badge>
                      <span className="text-muted-foreground">{kpi.changeLabel}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Tabs */}
          <section className={styles.layout.section}>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className={styles.tabs.list}>
                <TabsTrigger value="overview" className={styles.tabs.trigger}>
                  Overview
                </TabsTrigger>
                <TabsTrigger value="activity" className={styles.tabs.trigger}>
                  Activity
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className={styles.tabs.content}>
                {/* Table */}
                <Card className={styles.card.wrapper}>
                  <CardHeader className={styles.card.header}>
                    <CardTitle className={styles.card.title}>Team Members</CardTitle>
                  </CardHeader>
                  <CardContent className={styles.card.content}>
                    <Table className={styles.table.wrapper}>
                      <TableHeader className={styles.table.header}>
                        <TableRow>
                          <TableHead className={styles.table.headerCell}>Name</TableHead>
                          <TableHead className={styles.table.headerCell}>Email</TableHead>
                          <TableHead className={styles.table.headerCell}>Status</TableHead>
                          <TableHead className={styles.table.headerCell}>Role</TableHead>
                          <TableHead className={styles.table.headerCell}>Department</TableHead>
                          <TableHead className={styles.table.headerCell}>Last Active</TableHead>
                          <TableHead className={cn(styles.table.headerCell, "w-10")}></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className={styles.table.body}>
                        {tableData.map((row) => (
                          <TableRow key={row.id} className={styles.table.row}>
                            <TableCell className={cn(styles.table.cell, "font-medium")}>
                              {row.name}
                            </TableCell>
                            <TableCell className={styles.table.cell}>{row.email}</TableCell>
                            <TableCell className={styles.table.cell}>
                              <Badge
                                className={
                                  row.status === "active"
                                    ? styles.table.statusBadge.active
                                    : row.status === "pending"
                                    ? styles.table.statusBadge.pending
                                    : styles.table.statusBadge.inactive
                                }
                              >
                                {row.status}
                              </Badge>
                            </TableCell>
                            <TableCell className={styles.table.cell}>{row.role}</TableCell>
                            <TableCell className={styles.table.cell}>{row.department}</TableCell>
                            <TableCell className={styles.table.cell}>{row.lastActive}</TableCell>
                            <TableCell className={styles.table.cell}>
                              <Button variant="ghost" size="icon" className={styles.button.ghost}>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className={styles.tabs.content}>
                <Card className={styles.card.wrapper}>
                  <CardHeader className={styles.card.header}>
                    <CardTitle className={styles.card.title}>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent className={styles.card.content}>
                    <div className="space-y-4">
                      {activityData.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                          <div>
                            <p className="font-medium">{item.user}</p>
                            <p className="text-sm text-muted-foreground">{item.action}</p>
                          </div>
                          <span className="text-sm text-muted-foreground">{item.timestamp}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Form */}
          <section className={styles.layout.section}>
            <Card className={styles.card.wrapper}>
              <CardHeader className={styles.card.header}>
                <CardTitle className={styles.card.title}>Add New Member</CardTitle>
              </CardHeader>
              <CardContent className={styles.card.content}>
                <form className={cn("space-y-4", styles.form.wrapper)}>
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Default Input */}
                    <div className="space-y-2">
                      <Label className={styles.form.label}>Full Name</Label>
                      <Input
                        placeholder="Enter full name"
                        className={styles.form.input.default}
                      />
                    </div>

                    {/* Error Input */}
                    <div className="space-y-2">
                      <Label className={styles.form.label}>Email Address</Label>
                      <Input
                        placeholder="Enter email"
                        className={styles.form.input.error}
                        defaultValue="invalid-email"
                        aria-invalid="true"
                      />
                      <p className={styles.form.errorMessage}>Please enter a valid email address</p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Select */}
                    <div className="space-y-2">
                      <Label className={styles.form.label}>Department</Label>
                      <Select>
                        <SelectTrigger className={styles.form.select.trigger}>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent className={styles.form.select.content}>
                          {departmentOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Disabled Input */}
                    <div className="space-y-2">
                      <Label className={styles.form.label}>Employee ID (Auto-generated)</Label>
                      <Input
                        placeholder="EMP-XXXXX"
                        disabled
                        className={styles.form.input.disabled}
                      />
                    </div>
                  </div>

                  {/* Textarea */}
                  <div className="space-y-2">
                    <Label className={styles.form.label}>Notes</Label>
                    <Textarea
                      placeholder="Add any additional notes..."
                      className={styles.form.textarea}
                    />
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Button Set */}
          <section className={styles.layout.section}>
            <Card className={styles.card.wrapper}>
              <CardHeader className={styles.card.header}>
                <CardTitle className={styles.card.title}>Actions</CardTitle>
              </CardHeader>
              <CardContent className={styles.card.content}>
                <div className="flex flex-wrap gap-3">
                  <Button className={styles.button.primary}>Primary Action</Button>
                  <Button variant="secondary" className={styles.button.secondary}>
                    Secondary Action
                  </Button>
                  <Button variant="ghost" className={styles.button.ghost}>
                    Ghost Action
                  </Button>

                  {/* Modal Trigger */}
                  <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className={styles.button.secondary}>
                        Open Modal
                      </Button>
                    </DialogTrigger>
                    <DialogContent className={styles.modal.content}>
                      <DialogHeader className={styles.modal.header}>
                        <DialogTitle className={styles.modal.title}>Confirm Action</DialogTitle>
                        <DialogDescription className={styles.modal.description}>
                          Are you sure you want to proceed with this action? This cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className={styles.modal.footer}>
                        <Button
                          variant="outline"
                          onClick={() => setModalOpen(false)}
                          className={styles.button.secondary}
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => {
                            setModalOpen(false)
                            handleToast()
                          }}
                          className={styles.button.primary}
                        >
                          Confirm
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  {/* Toast Trigger */}
                  <Button variant="outline" onClick={handleToast} className={styles.button.secondary}>
                    Show Toast
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Alert */}
          <section className={styles.layout.section}>
            <Alert className={styles.alert.wrapper}>
              <Info className="h-4 w-4" />
              <AlertTitle className={styles.alert.title}>Information</AlertTitle>
              <AlertDescription className={styles.alert.description}>
                This is a sample dashboard demonstrating the Skill Zen Garden concept.
                The same UI structure is styled differently based on each page's skill.md guidelines.
              </AlertDescription>
            </Alert>
          </section>
        </main>
      </div>
    </div>
  )
}
