import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Password() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Password</Label>
      <Input id="picture" type="password" />
    </div>
  )
}