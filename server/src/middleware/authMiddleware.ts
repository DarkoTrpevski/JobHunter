import { NextFunction, Request, Response } from "express";
import jwt = require("jsonwebtoken");
import { IUserRequest } from "../types/types";
require("dotenv").config();

//Middleware used to check if the JWT that is send is valid
export const authMiddleware = async(req: IUserRequest, res: Response, next: NextFunction) => {
  try {
      //Grab the token from the request
      const jwtToken: string = req.header("token");
      console.log('Inside authMiddleware, jwtToken is: ', jwtToken);
      if(!jwtToken) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
      }
      //Concatinating with ""(process.env.jwtSecret + "") because of dotenv import problems
      const payload: any = jwt.verify(jwtToken, process.env.jwtSecret + "");
      //Setting the user id into the request
      req.user = payload.user;
      console.log('Inside authMiddleware, request user is: ', req.user.id);
      next();
  } catch (err) {
    console.log(err.message);
    return res.status(401).json({ msg: 'Token is not valid' });
  }
}