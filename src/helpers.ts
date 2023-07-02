import debug from "debug";

const logger = () : debug.Debugger => {
    const log = debug("badgy:bot");
    return log;
}

export default logger;