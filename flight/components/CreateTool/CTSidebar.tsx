import React from "react";
import search from "@/assets/icons/search.svg";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CreateToolSidebar = () => {
  return (
    <div className="col-span-2 p-4 border-r-gray-600 h-full border">
      <h3 className="text-center text-sm font-medium">Start from a template</h3>
      <div className="flex items-center gap-2 rounded-xl border border-lightGray mt-3  pl-2 w-full">
        <Image src={search} alt="search" width={20} height={20} />
        <input
          type="text"
          className=" px-3 p-2  rounded-r-xl text-sm text-black ring-0 w-full transition-all  ease-in  outline-none focus:ring-2 focus:ring-green"
          placeholder="Search..."
        />
      </div>
      {/* <Accordion type="multiple" >
        <AccordionItem value="item-1">
          <AccordionTrigger>Community</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
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
        <TabsContent value="top">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="latest">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default CreateToolSidebar;
