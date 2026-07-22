"use client";

import { useState } from "react";
import { Divider } from "@/components/ui/divider";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { CheckCircle } from "lucide-react";

export default function AwsVpcDiagram() {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
      <Card className="border-l-4 border-[#FF9900] dark:border-[#0078D4]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            AWS VPC Architecture Diagram
          </h3>
          <div className="flex items-center gap-2">
            <Switch checked={selected === "default"} onChange={() => setSelected(selected === "default" ? "" : "default")} className="w-12 h-6" />
            <span className="text-sm text-slate-600 dark:text-slate-300">
              {selected === "default" ? "Default" : "Custom"}
            </span>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex justify-between">
            <div className="w-1/2">
              <div className="bg-gradient-to-br from-[#FF9900] to-[#0078D4] p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#FF9900]" />
                  </div>
                  <p className="ml-2 text-sm text-slate-600 dark:text-slate-300">Public Subnet</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="bg-gradient-to-br from-[#FF9900] to-[#0078D4] p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#0078D4]" />
                  </div>
                  <p className="ml-2 text-sm text-slate-600 dark:text-slate-300">Private Subnet</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/3">
              <div className="bg-gradient-to-br from-[#FF9900] to-[#0078D4] p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#FF9900]" />
                  </div>
                  <p className="ml-2 text-sm text-slate-600 dark:text-slate-300">Internet Gateway</p>
                </div>
              </div>
            </div>
            <div className="w-2/3">
              <div className="bg-gradient-to-br from-[#FF9900] to-[#0078D4] p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#0078D4]" />
                  </div>
                  <p className="ml-2 text-sm text-slate-600 dark:text-slate-300">NAT Gateway</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}