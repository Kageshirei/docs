import { Heading } from "@/components/Heading";
import TimelineStatus from "./status";
import {
    FC,
    ReactNode,
} from "react";

interface TimelineItemProps {
    status?: "completed" | "in-progress" | "upcoming";
    title: string;
    time?: string;
    children: ReactNode
}

const TimelineItem: FC<TimelineItemProps> = ({
    children,
    status,
    title,
    time,
}) => {
    return (
        <li className="mb-10 ms-6">
            <TimelineStatus status={ status }/>
            <Heading id={ "sample" }
                     level={ 2 }
            >
                { title }
            </Heading>
            {
                time && (
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        { time }
                    </time>
                )
            }
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {children}
            </p>
        </li>
    )
}

export default TimelineItem;
export { TimelineItem };