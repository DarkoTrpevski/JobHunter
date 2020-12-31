import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity("jobs")
export class Job {

  @PrimaryGeneratedColumn()
  generatedId: number;

  //(Job ID can be NULL, when adding CUSTOM JOB)TEMPORARY LATER WILL USE UUID
  //(Job ID can be NULL, when adding CUSTOM JOB)TEMPORARY LATER WILL USE UUID
  //(Job ID can be NULL, when adding CUSTOM JOB)TEMPORARY LATER WILL USE UUID
  @Column({ type: "varchar", length: 255, nullable: true })
  id: string;
  //(Job ID can be NULL, when adding CUSTOM JOB)TEMPORARY LATER WILL USE UUID
  //(Job ID can be NULL, when adding CUSTOM JOB)TEMPORARY LATER WILL USE UUID
  //(Job ID can be NULL, when adding CUSTOM JOB)TEMPORARY LATER WILL USE UUID

  @Column({ type: "varchar", length: 255, nullable: true })
  origin: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  applicationStatus: string;
  //Add Job Note when Editing/Adding Custom Job
  @Column({ type: "text", nullable: true })
  note: string;

  //Job posted at
  @Column({ type: "varchar", length: 255, nullable: true })
  created_at: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "text", nullable: true })
  how_to_apply: string;

  @Column({ type: "varchar", length: 255 , nullable: true})
  company_url: string;

  @Column({ type: "text", nullable: true })
  company_logo: string;

  //Full-Time/Not
  @Column({ type: "varchar", length: 255, nullable: true })
  type: string;

  //Job Post URL
  @Column({ type: "varchar", length: 255, nullable: true })
  url: string;

  //Company Name
  @Column({ type: "varchar", length: 255 })
  company: string;

  @Column({ type: "varchar", length: 255 })
  location: string;

  @Column({ type: "varchar", length: 255 })
  title: string;

  @ManyToOne(() => User, user => user.jobs, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  user: User;
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