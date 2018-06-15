export const createImage = () =>
  fetch("silly", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ color: "red" })
  });
