export default function handler(req, res) {
  res.setPreviewData({ user: "Minger" });
  //   res.end("Preview mode enabled");
  res.redirect(req.query.redirect);
}
