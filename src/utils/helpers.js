export const formatProfileUrl = (url) => {
    if(!url.startsWith("http"))return url;
    
    const newUrl = new URL(url)

    return `${newUrl.hostname.replace("www.", "")}${newUrl.pathname}`;
}

export const showRedirectionButton = (url) => {
    try {
        new URL(url)
        return true
    } catch { return false }
}


