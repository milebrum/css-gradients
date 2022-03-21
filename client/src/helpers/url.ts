const getQueryParam = (key: string) => {
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const value = searchParams.getAll(key);
    return { value, queryString: value ? `${key}=${value}` : '' };
  } catch {
    return null;
  }
};

export default getQueryParam;
