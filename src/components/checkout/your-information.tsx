import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function YourInformation() {
  return (
    <Card>
      <CardContent className="pt-4 space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Your email" />
      </CardContent>
    </Card>
  );
}
