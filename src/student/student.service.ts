import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const student = this.studentRepository.create({
      id: uuid(),
      ...createStudentInput,
    });

    return await this.studentRepository.save(student);
  }
}
