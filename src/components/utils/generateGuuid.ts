const generateGuid = (): string => {
    const segment = () => Math.floor(1 + Math.random() * 65536)
        .toString(16)
        .substring(1);

    return `${segment()}${segment()}-`
        + `${segment()}${segment()}-`
        + `${segment()}${segment()}-`
        + `${segment()}${segment()}`;
};

export {
    generateGuid
}
