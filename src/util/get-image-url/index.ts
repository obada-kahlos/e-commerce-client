export const getImage = (rawURL: string | undefined) => {
    const RAW_URL1 = rawURL?.split("/d/");
    const RAW_URL2 = RAW_URL1 ? RAW_URL1[1]?.split("/view") : "";
    const IMAGE_ID = RAW_URL2 ? RAW_URL2[0] : "";
    return `https://drive.google.com/thumbnail?id=${IMAGE_ID}`;
};