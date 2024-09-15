import clsx from "clsx";
import { Button } from "./ui";

const GetstartedButton = () => (
    <div className="rounded-medium p-[1px] bg-gradient-to-b from-primary to-primary/25 w-fit h-fit">
        <Button
            className={clsx(
                "font-medium bg-background text-primary",
                "shadow-[0px_0px_12px_0px_rgba(0,111,238,0.24),inset_0px_0px_25px_0px_rgba(0,111,238,0.24),inset_0px_4px_12px_0px_rgba(0,112,243,0.75)]"
            )}
        >
            Get Started
        </Button>
    </div>
)

export default GetstartedButton;