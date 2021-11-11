import { useEffect } from "react";
import { readFiles } from "../../utils/readFiles";

const DMs = () => {
    const filesList = readFiles('messages');

    useEffect(() => {

    }, [filesList]);

    return (
        <div className="dms-container">
            Total DMs = { filesList }
        </div>
    );
}
 
export default DMs;