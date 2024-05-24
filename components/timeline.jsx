export const Timeline = (props) => {

    const {children} = props;

    return (
        <div
            className={`flex flex-col md:grid grid-cols-9 mx-auto lg:p-2 text-blue-50`}
        >
            {children}
        </div>
    );
}

export const TimelineItem = (props) => {

    let {children, position} = props;

    if (position === "left" || position === undefined) {
        position = "flex-row"
    } else if (position === "right") {
        position = "flex-row-reverse"
    }

    return (
        <div className={`flex flex-row ${position} md:contents`}>
            {children}
        </div>
    );
}

export const TimelineBody = (props) => {

    let {children, position} = props;

    if (position === "left" || position === undefined) {
        position = "lg:items-end  lg:col-start-1 lg:col-end-5"
    } else if (position === "right") {
        position = "lg:items-start  lg:col-start-6 lg:col-end-10"
    }

    return (
        <div
            className={`bg-transparent flex flex-col items-start col-start-1 col-end-5 ${position} p-4 rounded-xl my-4 ml-auto`}
        >
            {children}
        </div>
    );
}


export const TimelineConnector = (props) => {

    const {size, position, children} = props;

    let height = "h-full";
    let align = "top-0";

    if (position === "start" || position === "end") {
        height = "h-1/2"
        if (position === "start") {
            align = "bottom-0"
        }
    }

    let primary = "w-[7rem] h-[7rem]"
    let white = "w-[5rem] h-[5rem]"
    let secondary = "w-[3rem] h-[3rem]"
    let line = "w-[7rem]"

    if (size === "large") {
        primary = "w-[10rem] h-[10rem]"
        white = "w-[8rem] h-[8rem]"
        secondary = "w-[6rem] h-[6rem]"
        line = "w-[10rem]"
    }

    return (
        <div className={`flex flex-col justify-center col-start-5 col-end-6 md:mx-auto relative`}>
            <div
                className={`flex justify-center items-center ${primary} rounded-full bg-primary`}
            >
                <div
                    className={`flex justify-center items-center ${white} rounded-full bg-white`}
                >
                    {
                        children
                            ? children
                            : <div className={`${secondary} rounded-full bg-secondary`}/>
                    }
                </div>
            </div>
            <div className={`absolute -z-10 ${align} ${height} ${line} flex items-center justify-center`}>
                <div className="h-full w-1 bg-secondary pointer-events-none"/>
            </div>
        </div>
    );
}