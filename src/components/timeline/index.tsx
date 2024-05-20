import { Heading } from "@/components/Heading";
import TimelineItem from "./item";
import {
    IconCheck,
    IconCircleDashedCheck,
    IconCrane,
    IconDots,
    IconHourglass,
    IconHourglassEmpty,
} from "@tabler/icons-react";
import {
    Children,
    FC,
    ReactNode,
} from "react";

interface TimelineProps {
    children: ReactNode
}

const Timeline: FC<TimelineProps> = ({children}) => {
    return (
        <ol className="relative border-s border-gray-200 list-none dark:border-gray-700">
            {
                Children.toArray(children)
            }
        </ol>
    );
};

export default Timeline;
export { Timeline };