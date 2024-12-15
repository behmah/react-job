import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'});
    res.cookie('token', token, {
        httpOnly: true, 
        secure: process.env.MODE_ENV === 'production',
        sameSite: 'strict', // csrf
        maxAge: 7 * 1000 * 60 * 60 * 24 // 7 days
    });
    return token;
}