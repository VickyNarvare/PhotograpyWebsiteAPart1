export const img = (id, w = 1400, h, sat) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}${sat !== undefined ? `&sat=${sat}` : ""}&q=80`;
