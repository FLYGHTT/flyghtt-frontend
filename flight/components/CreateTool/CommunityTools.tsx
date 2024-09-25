import React from "react";
import { FaChevronDown } from "react-icons/fa";
import SidebarTools from "./SidebarTools";
import { useGetToolsQuery } from "@/hooks/reactQueryHooks";
import Loading from "@/app/(root)/loading";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const CommunityTools = () => {
  const { data, isLoading } = useGetToolsQuery();
  if (isLoading) return <Loading />;
  if (!data) return null;
  const privateTools = data?.filter((tool) => tool.public === false);
  return (
    <>
      <p className="text-xs text-gray-700 mt-3 mx-auto text-center">
        Community
      </p>
      <Tabs
        defaultValue="top"
        className="w-full flex items-center justify-center flex-col mt-2"
      >
        <TabsList className="w-full">
          <TabsTrigger value="top">Top</TabsTrigger>
          <TabsTrigger value="latest">Latest</TabsTrigger>
        </TabsList>
        <TabsContent value="top" className="w-full">
          <SidebarTools type="Top" data={privateTools} />
        </TabsContent>
        <TabsContent value="latest" className="w-full">
          <SidebarTools type="Latest" data={privateTools} />
        </TabsContent>
      </Tabs>
      <p className="text-xs text-gray-500 mx-auto text-center cursor-pointer mt-2">
        View more <FaChevronDown className="inline" />
      </p>
    </>
  );
};

export default CommunityTools;
