"use client";
import React from "react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardTop from "./CardTop";
import Image from "next/image";

const CardComponent = ({title, description, info, image, buttonText,handleRedirect, path}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center border rounded-md p-4">
      {/* CARD HEADER */}
      <CardTop title={title} info={info} description={description}/>
      {/* Card image icon */}
      <div className="w-full flex justify-center items-center my-5">
        <Image
          className="rounded-md object-cover p-4"
          // style={{ filter: "drop-shadow(1px -1px 20px #5417d7)" }}
          src={image}
          alt={title}
          width={500}
          height={220}
        />
      </div>
      {/* Card Footer */}
      <div className="w-full flex justify-end">
      <Button
                  variant="outline"
                  onClick={() => handleRedirect(path)}
                  id={`info-${buttonText}`}
                >
                  {buttonText}
                </Button>
      </div>
    </div>
  );
};

export default CardComponent;
