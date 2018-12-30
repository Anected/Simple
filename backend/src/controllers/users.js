export default {

  async getUsers(req, res) {
    try {
      return res.status(200).json([{ name: 'Sasha' }]);
    } catch (err) {

      return res.status(500).json({ error: err.message });
    }
  }
}
