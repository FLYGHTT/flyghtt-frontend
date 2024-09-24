"use client";
import { redirect } from "next/navigation";
import { useGetToolsQuery } from "@/hooks/reactQueryHooks";
import { Tool } from "@/types";
import file from "@/assets/icons/file.svg";
import privatefile from "@/assets/icons/privatefile.svg";
import edit from "@/assets/icons/edit.svg";
import Image from "next/image";
const Page = ({ params: { slug } }: { params: { slug: string } }) => {
  const allowedSlugs = ["private", "public", "favourites"];
  const { data } = useGetToolsQuery();
  if (!allowedSlugs.includes(slug)) {
    return redirect("/dashboard/tools");
  }

  if (!data) return null;
  const publicTools = data?.filter((tool) => tool.public);
  const privateTools = data?.filter((tool) => !tool.public);

  let activeData: Tool[] = [];
  const isPublic = slug === "public";
  switch (slug) {
    case "private":
      activeData = privateTools;
      break;
    case "public":
      activeData = publicTools;
      break;
    // case "favourites":
    //   activeData = publicTools.filter((tool) => tool.favourite);
    //   break;
    default:
      break;
  }

  return (
    <div className="p-7">
      <h1 className="text-xl font-bold capitalize">{slug} Tools</h1>
      <div className=" grid grid-cols-2 gap-8 mt-7">
        {activeData.map((tool) => (
          <div
            key={tool.toolId}
            className={`rounded-md flex p-2 group hover:shadow-md  gap-3 items-center justify-between shadow-sm  cursor-pointer border-2 ${isPublic ? "border-teal-200 bg-green/10 hover:border-teal-400" : " bg-blue-100 border-[#4169E1]/40 hover:border-[#4169E1]" } `}
          >
            <div className="flex gap-3 items-center ">
              <Image
                src={slug === "public" ? file : privatefile}
                alt="file icon"
                className="w-10 h-10"
              />
              <div>
                {" "}
                <h1 className="font-bold ">{tool.name}</h1>
                <p className="text-sm text-gray-600">Created 5th Feb, 2024</p>
              </div>
            </div>
            <div className="mr-2 gap-7 group-hover:flex hidden items-center">
              <p className="text-sm text-gray-600 cursor-pointer hover:text-black ">
                View
              </p>
              <Image
                src={edit}
                alt="edit icon"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
