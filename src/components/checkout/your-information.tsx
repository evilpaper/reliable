import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function YourInformation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Din information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <Label htmlFor="email">E-post</Label>
        <Input id="email" type="email" placeholder="Din e-post" />
      </CardContent>
    </Card>
  );
}
