import { useState} from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import React from "react";
import Image from "next/image";

export default function overlaidImage({children, url}: {children:React.ReactNode, url:string}) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
      {children}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex items-center justify-center p-4 backdrop-brightness-75 backdrop-blur-md">
          <DialogPanel className="bg-white ">
            <Image
              alt="Expanded"
              src={url}
              width={1200}
              height={1200}
              className="max-w-full h-auto"
            />
          </DialogPanel>
        </div>
      </Dialog>
    </div>
    );
}