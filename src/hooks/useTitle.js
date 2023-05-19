import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `CarZone - ${title}`;
    }, [title])
}
export default useTitle;