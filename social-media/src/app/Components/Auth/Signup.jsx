// import { signup } from "@/app/Services/Auth"
import { signup } from "@/app/Services/Auth";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    profilePicture: "",
  });
  async function handleSubmit() {
    let formFields = new FormData();
    for (let key in formData) {
      formFields.append(key, formData[key]);
    }
    const res = await signup(formFields);
    console.log(res);
  }
  return (
    <div className="flex items-center justify-center h-dvh">
      <div
        className="bg-muted-foreground border-2 border-gray-500 
      rounded-md grid w-full max-w-sm items-center gap-3 my-auto  p-8"
      >
        <Label htmlFor="name">Name</Label>
        <Input
          className="border-2 border-gray-300"
          type="text"
          id="name"
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
        <Label htmlFor="email">Email</Label>
        <Input
          className="border-2 border-gray-300"
          type="email"
          id="email"
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          className="border-2 border-gray-300"
          type="password"
          id="password"
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
        />
        <Label htmlFor="phone">Phone</Label>
        <Input
          className="border-2 border-gray-300"
          type="text"
          id="phone"
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, phone: e.target.value };
            });
          }}
        />
        <Label htmlFor="picture">Picture</Label>
        <Input
          className="border-2 border-gray-300"
          id="picture"
          type="file"
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, profilePicture: e.target.files[0] };
            });
          }}
        />
        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          Sign Up!
        </Button>
      </div>
    </div>
  );
};
