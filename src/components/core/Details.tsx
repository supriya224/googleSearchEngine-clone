"use client";
import "regenerator-runtime";
import React, { startTransition, useState } from "react";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { IoMicOutline, IoMicOffOutline } from "react-icons/io5";
import { VscDeviceCamera } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";




export const MainDetails = () => {

  const [search, setSearch] = useState<string>("");
  
  const router = useRouter();

  const onSearchSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    router.push(`https://www.google.com/search?q=${search}`);
  };
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };
  const stoptListening = () => {
    SpeechRecognition.stopListening();
    setSearch(transcript);
  }
    const google: string =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpaIOPvRexK_d2SwR_PBrphBbIO5vhEcWePeyBQT2V-hfGc8GdVYkNxAom4tr3ppEU34&usqp=CAU";

    return (
      <div className="items-center flex flex-col">
        <Image className="w-[500px]" src={google} alt="logo" width={100} height={10} />
        <form
          className="flex border mt-7 py-2 px-5 rounded-full w-2/5 items-center hover:shadow-md"
          onSubmit={(e) => onSearchSubmit(e)}
        >
          <IoIosSearch className=" text-xl text-slate-400" />
          <input
            type="text"
            className="w-full focus:outline-none ml-4"
            onChange={(e) => setSearch(e.target.value)}
            value={search || transcript}
          />
          {listening ? 
            <IoMicOffOutline
              className="text-3xl text-slate-400 mr-5"
              onClick={() => stoptListening()}
            />
           : 
            <IoMicOutline
              className="text-3xl text-slate-400 mr-5"
              onClick={() => startListening()}
            />
          }

          <VscDeviceCamera className="text-3xl text-slate-400 " />
        </form>
        <div className="flex justify-between mt-7">
          <button
            className="bg-slate-100 rounded-md mr-3 p-2"
            onClick={(e) => onSearchSubmit(e)}
          >
            Google search
          </button>
          <button
            className="bg-slate-100 rounded-md mr-3 p-2"
            onClick={(e) => router.push("https://www.google.com/doodles")}
          >
            I M Feeling Lucky
          </button>
        </div>
      </div>
    );
  };

