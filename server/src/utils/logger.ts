import logger from "pino"
import dayjs from "dayjs"

const log = logger({
    // level:"none",
    prettifier:true,
    base:{
        pid:false,
    },
    timestamp: ()=> `"time :" ${dayjs().format()} `
})


export default log ;