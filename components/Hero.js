import React from "react";
import {RoughNotation, RoughNotationGroup} from "react-rough-notation";
import {RainbowHighlight} from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
    const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
    return (
        <div>
            <div className="flex flex-row justify-center items-start overflow-hidden">
                {/* Text container */}

                <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
                    <RoughNotationGroup show={true}>
                        <RainbowHighlight color={colors[0]}>
                            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 ">
                                Engineer 🛠
                            </h1>
                        </RainbowHighlight>
                        <RainbowHighlight color={colors[3]}>
                            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                                Developer👨🏼‍💻
                            </h1>
                        </RainbowHighlight>
                        <RainbowHighlight color={colors[2]}>
                            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                                Skater 🛹
                            </h1>
                        </RainbowHighlight>
                    </RoughNotationGroup>

                </div>
                {/* Image container */}
                <div className="hidden lg:block relative w-full md:w-1/2 -mr-30 mt-10">
                    <div className="w-3/4 ">
                        <img src={userData.avatarUrl} alt="avatar" className=""/>
                        <a
                            href={userData.resumeUrl}
                            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-up-right-square"
                                stroke="4"
                                strokeWidth="4"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                                />
                            </svg>
                            <p>View My Resume</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
