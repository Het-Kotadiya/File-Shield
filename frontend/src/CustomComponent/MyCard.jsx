import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeClosed } from "lucide-react";

function MyCard() {
  const backendUrl = "https://file-shield.onrender.com";

  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState(null);
  const [key, setKey] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);

  // File Selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle key input
  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };

  // Encrypt the file
  const handleEncrypt = async () => {
    if (!file || !key) {
      setResponseMessage("Please provide both file and key.");
      return;
    }
    setIsEncrypting(true);
    setResponseMessage("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("key", key);

    try {
      const response = await axios.post(
        `${backendUrl}/api/files/encrypt`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        }
      );

      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute(
        "download",
        response.headers["content-disposition"]?.split("filename=")[1] ||
          "encrypted-file"
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);

      setResponseMessage("File encrypted successfully!");
    } catch (error) {
      console.error("Full encryption error:", error);
      setResponseMessage(
        error.response?.data?.message || "Error encrypting the file."
      );
    }
    setIsEncrypting(false);
  };

  // Decrypt the file
  const handleDecrypt = async () => {
    if (!file || !key) {
      setResponseMessage("Please provide both file and key.");
      return;
    }
    setIsDecrypting(true);
    setResponseMessage("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("key", key);

    try {
      const response = await axios.post(
        `${backendUrl}/api/files/decrypt`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        }
      );

      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute(
        "download",
        response.headers["content-disposition"]?.split("filename=")[1] ||
          "decrypted-file"
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);

      setResponseMessage("File decrypted successfully!");
    } catch (error) {
      console.error("Full decryption error:", error);
      setResponseMessage(
        error.response?.data?.message || "Error decrypting the file."
      );
    }
    setIsDecrypting(false);
  };

  return (
    <div className="mt-5 flex justify-center">
      <Card className="w-[400px] h-[280px] flex flex-col justify-center">
        <CardHeader className="flex items-start">
          <CardTitle className="">Upload File</CardTitle>
          <CardDescription>Upload file to encrypt or decrypt.</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-start">
          <form className="w-full text-left">
            <div className="w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="file">File</Label>
                <Input id="file" type="file" onChange={handleFileChange} />
              </div>
              <div className="flex flex-col space-y-1.5 mt-4">
                <Label htmlFor="key">Key</Label>
                <div className="relative">
                  <Input
                    id="key"
                    type={showPassword ? "text" : "password"}
                    placeholder="Provide a Key"
                    className="pr-10"
                    value={key}
                    onChange={handleKeyChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <Eye className="w-5 h-5 text-gray-600" />
                    ) : (
                      <EyeClosed className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            className="bg-green-500"
            onClick={handleEncrypt}
            disabled={isEncrypting}
          >
            {isEncrypting ? "Encrypting..." : "Encrypt"}
          </Button>
          <Button
            variant="outline"
            className="bg-red-600"
            onClick={handleDecrypt}
            disabled={isDecrypting}
          >
            {isDecrypting ? "Decrypting..." : "Decrypt"}
          </Button>
        </CardFooter>
        {responseMessage && (
          <p className="text-center w-full">{responseMessage}</p>
        )}
      </Card>
    </div>
  );
}

export default MyCard;
