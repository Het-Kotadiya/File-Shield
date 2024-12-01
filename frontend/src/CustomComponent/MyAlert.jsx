import { ShieldAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function MyAlert() {
  return (
    <Alert variant="destructive">
      <div className="flex text-left gap-3">
        <div className="flex items-center">
          <ShieldAlert size={36} />
        </div>
        <div className="">
          <AlertTitle className="text-lg">Warning</AlertTitle>
          <AlertDescription>
            Use this tool at your own risk. We are not responsible for any
            damage, loss, or corruption of your files or data during encryption
            or decryption.
          </AlertDescription>
        </div>
      </div>
    </Alert>
  );
}
