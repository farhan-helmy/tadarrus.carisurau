"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";

export default function Onboarding() {
  const router = useRouter();

  const submitRole = () => {
    console.log("submit role");
    router.push("/dashboard");
  };

  return (
    <div className="pt-56 flex flex-col justify-center items-center gap-4">
      <div className="text-center">
        <h1 className="text-xl font-bold">Pilih role anda untuk tadarrus</h1>
      </div>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Ketua kumpulan</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Ahli kumpulan</Label>
        </div>
      </RadioGroup>
      <div>
        <Button onClick={() => submitRole()}>Teruskan</Button>
      </div>
    </div>
  );
}
