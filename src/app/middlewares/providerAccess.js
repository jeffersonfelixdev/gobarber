import User from '../models/User';

export default async (req, res, next) => {
  const provider = await User.findByPk(req.userId);
  if (!provider.provider) {
    return res.status(401).json({ error: 'Access denied' });
  }

  return next();
};
