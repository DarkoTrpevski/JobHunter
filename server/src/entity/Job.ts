import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity("jobs")
export class Job {

  @PrimaryGeneratedColumn()
  generatedId: number;

  @Column({type: "varchar" , length: 255})
  jobOrigin: string;
  
  @ManyToOne(() => User, user => user.jobs, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  user: User;
  
  @Column({type: "varchar" , length: 255})
  id: string;

  //Full-Time/Not
  @Column({type: "varchar" , length: 255})
  type: string;
  
  //Job Post URL
  @Column({type: "varchar" , length: 255})
  url: string;
  
  //Job posted at
  @Column({type: "varchar" , length: 255})
  created_at: string;
  
  //Company Name
  @Column({type: "varchar" , length: 255})
  company: string;
  
  @Column({type: "varchar" , length: 255})
  company_url: string;
  
  @Column({type: "varchar" , length: 255})
  location: string;
  
  @Column({type: "varchar" , length: 255})
  title: string;

  @Column({type: "text"})
  description: string;
  
  @Column({type: "text"})
  how_to_apply: string;
  
  @Column({type: "text"})
  company_logo: string;
}

// @PrimaryGeneratedColumn()
// id: number;

// @Column({type: "varchar" , length: 255})
// title: string;

// @Column({type: "varchar" , length: 255})
// location: string;

// @Column({type: "varchar" , length: 255})
// companyName: string;

// @Column({type: "varchar" , length: 255})
// postedAt: string;

// @Column({type: "varchar" , length: 255})
// jobOrigin: string;

// // @Column()
// // @CreateDateColumn()
// // created_at: Date;

// @Column({type: "text"})
// description: string;

// @ManyToOne(() => User, user => user.jobs, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
// user: User;