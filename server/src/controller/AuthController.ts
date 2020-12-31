import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../entity/User";
import jwtGenerator from "../utils/jwtGenerator";
import { validationResult } from 'express-validator';
import { IUserRequest } from "../types/types";

export class AuthController {

  constructor(){}

  // public registerUser = async(req: Request, res: Response) => {

  //   try {
  //     const{ name, email, password } = req.body;

  //     console.log('Inside registerUser request body is', req.body);
  
  //     //Get the User repository
  //     const userRepository = getManager().getRepository(User);

  //     //Load a user by a given email
  //     const foundUser = await userRepository.findOne({ email: email })
  //     //If user is found return 401 to the client
  //     if (foundUser) {
  //       return res.status(401).json("User already exist!");
  //     }
  //     //If User is NOT found, salt the password of the user
  //     const salt = await bcrypt.genSalt(10);
  //     const bcryptPassword = await bcrypt.hash(password, salt);

  //     //Create a new User Entity
  //     const user = userRepository.create();
  //     user.name = name;
  //     user.email = email;
  //     user.password = bcryptPassword;
  //     user.jobs = [];
  //     //Save User in DB
  //     const savedUser = await userRepository.save(user);
  //     //Generate
  //     const jwtToken = jwtGenerator(savedUser.id);
  //     //Return a JWT
  //     res.json({ jwtToken });
  
  //   } catch (err) {
  //     console.log(err.message);
  //     res.status(500).send("Server Error");
  //   }
  
  // }
  public registerUser = async(req: IUserRequest, res: Response) => {
    try {
      const{ name, email, password } = req.body;
      const errors = validationResult(req);

      if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      //Get the User repository
      const userRepository = getManager().getRepository(User);
      
      //See if user exists
      const foundUser = await userRepository.findOne({ email: email })
      //If user is found return 401 to the client
      if (foundUser) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }
      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);

      //Create a new User Entity
      const user = userRepository.create();
      user.name = name;
      user.email = email;
      user.password = bcryptPassword;
      user.jobs = [];
      //Save User in DB
      const savedUser = await userRepository.save(user);

      //Generate
      const jwtToken = jwtGenerator(savedUser.generatedId);
      //Return jsonwebtoken
      res.json({ jwtToken });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }  
  }

  // public loginUser = async(req: Request, res: Response) => {
  //   try {
  
  //     const{ email, password } = req.body;
  
  //     //Get a User repository to perform operations with post
  //     const userRepository = getManager().getRepository(User);
  
  //     //Load a user by a given email
  //     const foundUser = await userRepository.findOne({ email: email })
  //     //If user is found return 401 to the client
  //     if (!foundUser) {
  //       return res.status(401).json("Invalid credentials");
  //     }
  
  
  //     //Compare the passwords
  //     const validPassword = await bcrypt.compare(password, foundUser.password);
  //     if(!validPassword) {
  //       return res.status(401).json("Invalid credentials")
  //     }
  
  //     //Generate
  //     const jwtToken = jwtGenerator(foundUser.id);
  //     //Return a JWT
  //     res.json({ jwtToken });
  //     // return res.json({ jwtToken });
      
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send("Server error");
  //   }
  // }
  public loginUser = async(req: IUserRequest, res: Response) => {
    try {  
      const{ email, password } = req.body;
  
      //Get a User repository to perform operations with post
      const userRepository = getManager().getRepository(User);  
      //Load a user by a given email
      const foundUser = await userRepository.findOne({ email: email })
      //If user is found return 401 to the client
      if (!foundUser) {
        return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
      }
      //Compare the passwords
      const validPassword = await bcrypt.compare(password, foundUser.password);
      if(!validPassword) {
        return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
      }
      //Generate
      const jwtToken = jwtGenerator(foundUser.generatedId);
      //Return a JWT
      res.json({ jwtToken });
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }

  public loadCurrentUser = async(req: IUserRequest, res: Response) => {
    try {
      //Get the User repository
      const userRepository = getManager().getRepository(User);
      console.log('Inside getCurrentUserProfile, request user id is: ', req.user.generatedId) ;     
      //Find the user in the DB
      const user = await userRepository.findOne(req.user.generatedId);
      console.log('Inside getCurrentUserProfile, the user is: ', user) ;
      delete user.password;
      console.log('Inside getCurrentUserProfile, the user is: ', user) ;
      if(!user) {
        return res.status(400).json({ msg: 'This User does not exist' })
      }
      console.log('Inside getCurrentUserProfile, user is: ', user);
      res.json(user);
      
    } catch (err) {
      console.error(err.message);
      res.status(403).json("User is not authorized");
    }
  }

}