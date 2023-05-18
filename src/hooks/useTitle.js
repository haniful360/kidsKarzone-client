import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `kidsCarZone - ${title}`;
    }, [title])
}
export default useTitle;