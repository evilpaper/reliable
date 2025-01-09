import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction } from "react";

export function YourInformation({
  email,
  setEmail,
}: {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Din information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <Label htmlFor="email">E-post</Label>
        <Input
          id="email"
          type="email"
          placeholder="Din e-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </CardContent>
    </Card>
  );
}
