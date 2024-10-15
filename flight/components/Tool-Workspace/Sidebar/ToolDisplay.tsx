import React from "react";
import SidebarTools from "@/components/Tool-Workspace/Sidebar/SidebarTools";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tool } from "@/types";
const ToolDisplay = ({ tools }: { tools: Tool[] }) => {
  const publicTools = tools.filter((tool) => tool.public);
  const privateTools = tools.filter((tool) => !tool.public);
  return (
    <Tabs
      defaultValue="public"
      className="w-full h-full flex items-center justify-center flex-col mt-2"
    >
      <TabsList className="w-full">
        <TabsTrigger value="public">Public</TabsTrigger>
        <TabsTrigger value="private">Private</TabsTrigger>
        {/* <TabsTrigger value="liked">Liked</TabsTrigger> */}
      </TabsList>
      <TabsContent value="public" className="w-full h-full">
        <SidebarTools type="public" tools={publicTools} />
      </TabsContent>
      <TabsContent value="private" className="w-full h-full">
        <SidebarTools type="private" tools={privateTools} />
      </TabsContent>
    </Tabs>
  );
};

export default ToolDisplay;
