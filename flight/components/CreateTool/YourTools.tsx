import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SidebarTools from "./SidebarTools";
import { useGetToolsQuery } from "@/hooks/reactQueryHooks";
import Loading from "@/app/(root)/loading";

const YourTools = () => {
  const { data, isLoading } = useGetToolsQuery();
  if (isLoading) return <Loading />;
  if (!data) return null;
  const privateTools = data?.filter((tool) => tool.public === false);
  const publicTools = data?.filter((tool) => tool.public === true);
  return (
    <>
      <p className="text-xs mt-5 text-gray-700 mx-auto text-center">
        Your tools
      </p>
      <Accordion type="multiple">
        <AccordionItem value="private">
          <AccordionTrigger>Private</AccordionTrigger>
          <AccordionContent>
            <SidebarTools type="Private" data={privateTools} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="public" className="mt-1">
          <AccordionTrigger>Public</AccordionTrigger>
          <AccordionContent>
            <SidebarTools type="Public" data={publicTools} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="liked" className="mt-1">
          <AccordionTrigger>Liked</AccordionTrigger>
          <AccordionContent>
            <SidebarTools type="Liked" data={publicTools} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default YourTools;
