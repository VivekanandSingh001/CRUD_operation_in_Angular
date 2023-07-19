import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit{
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log('Error fetching product data:', error);
      }
    );
  }
}
