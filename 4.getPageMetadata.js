function getPageMetadata(totalItems, pageSize, currentPage) {
  // Total koyta page lagbe, seta ber kortesi
  const totalPages = Math.ceil(totalItems / pageSize);

  // Kono item na thakle start item 0 rakhbo
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;

  // Current page er last item er number ber kortesi
  const endItem =
    totalItems === 0 ? 0 : Math.min(currentPage * pageSize, totalItems);

  // Current page er age ba pore kono page ache kina check kortesi
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return {
    totalPages,
    startItem,
    endItem,
    hasPrev,
    hasNext,
  };
}
