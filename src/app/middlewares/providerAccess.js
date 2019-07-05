import User from '../models/User';

export default async (req, res, next) => {
  const checkUserProvider = await User.findOne({
    where: { id: req.userId, provider: true },
  });

  if (!checkUserProvider) {
    return res
      .status(401)
      .json({ error: 'Access denied: User is not a provider' });
  }

  return next();
};
