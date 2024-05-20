import {
    IconCheck,
    IconCrane,
    IconHourglassEmpty,
} from "@tabler/icons-react";
import { FC } from "react";

interface TimelineStatusProps {
    status?: "completed" | "in-progress" | "upcoming";
}

const TimelineStatus: FC<TimelineStatusProps> = ({ status }) => {
    switch (status) {
        case "completed":
            return (
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-emerald-900">
                    <IconCheck className="text-blue-800 dark:text-emerald-300"
                               aria-hidden="true"
                               size={ 18 }
                    />
                </span>
            );
        case "in-progress":
            return (
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3
                    ring-8 ring-white dark:ring-gray-900 dark:bg-emerald-900"
                >
                    <span className="absolute w-6 h-6 rounded-full border-2 border-dashed border-emerald-200/75 animate-slow-spin"
                    />
                    <IconCrane className="text-blue-800 dark:text-emerald-200"
                               aria-hidden="true"
                               size={ 14 }
                    />
                </span>
            );
        default:
        case "upcoming":
            return (
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3
                ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-950"
                >
                    <IconHourglassEmpty className="text-blue-800 dark:text-cyan-200"
                                        aria-hidden="true"
                                        size={ 18 }
                    />
                </span>
            );
    }
};

export default TimelineStatus;
export { TimelineStatus };