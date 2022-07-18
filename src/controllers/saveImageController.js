export async function saveImage(req, res) {
  console.log(`File received:`);
  console.log(req.file);
  return res.status(200).send("Upload realizado com sucesso!");
}