export const formatPagination = (page: number = 1, limit: number = 20) => {
  page = Number(page);
  limit = Number(limit);

  return {
    offset: (page - 1) * limit,
    limit,
  };
};
