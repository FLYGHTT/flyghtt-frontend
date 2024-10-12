"use client";
import React from "react";
import SidebarTools from "@/components/Tool-Workspace/Sidebar/SidebarTools";
import { useGetToolsQuery } from "@/hooks/reactQueryHooks";
import Loading from "@/app/(root)/loading";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const ToolDisplay = () => {
  const { data, isLoading, isError } = useGetToolsQuery();

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
        <SidebarTools
          type="public"
          data={data}
          isLoading={isLoading}
          isError={isError}
        />
      </TabsContent>
      <TabsContent value="private" className="w-full h-full">
        <SidebarTools
          type="private"
          data={data}
          isLoading={isLoading}
          isError={isError}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ToolDisplay;
