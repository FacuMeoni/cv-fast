import { Icons } from "../components/icons";

export const formatProfileUrl = (url) => {
    if(!url.startsWith("http"))return url;
    
    const newUrl = new URL(url)

    return `${newUrl.hostname.replace("www.", "")}${newUrl.pathname}`;
}

export const showRedirectionButton = (url) => {
    try {
        new URL(url)

        return <Icons.Redirect width={18} height={18}/>
    } catch { return null }
}


