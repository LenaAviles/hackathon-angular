import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Message } from "primeng/components/common/api";
import { DoctorService } from '../services/doctor.service';


interface Category {
  label: string;
  value: string;
}

interface Doctor {
  label: string;
  value: string;
  photo: string;
}

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  anonymously: boolean;
  description: string;
  categories: Category[] = [];
  selectedCategory: Category;
  selectedGender: string;
  msgs: Message[];    
  uploadedFiles: any[] = [];
  visibleSidebar: boolean;
  doctors: Doctor[];
  selectedDoctor: Doctor;

  constructor(private categoryService: CategoryService,
              private doctorService: DoctorService) { }

  ngOnInit() {
    this.anonymously = true;    
    this.selectedGender = "Female";
    this.getCategories();
    this.getDoctors();
    this.selectedDoctor = this.doctors[0];
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories.map(function(cat) {
        return {
          label: cat.name,
          value: cat.id+''
        };
      }));
  }

  getDoctors(): void {
    this.doctorService.getDoctors()
      .subscribe(doctors => this.doctors = doctors.map(function(doctor) {
        return {
          label: doctor.name,
          value: doctor.name,
          photo: doctor.photo
        };
      }));
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
}

onSubmit(e) {
  console.log(this);
}

}
