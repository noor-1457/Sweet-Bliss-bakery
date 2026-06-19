import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { IonicSlides } from "@ionic/angular/standalone";
import { ImageCircleComponent } from '../image-circle/image-circle.component';
import { CommonModule } from '@angular/common'; // Add this import

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone: true, // Add this if using standalone
  imports: [
    CommonModule, // Add this
    ImageCircleComponent // Add this
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoryComponent implements OnInit {
  swiperModules = [IonicSlides];
  categories = input<Category[]>([]); // Fixed: changed from 'category' to 'categories'

  constructor() { }

  ngOnInit() {}
}