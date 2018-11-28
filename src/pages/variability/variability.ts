import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Chart } from "chart.js";

/**
 * Generated class for the VariabilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-variability',
  templateUrl: 'variability.html',
})

export class VariabilityPage {
  ctx: any;
  chart: Chart;
  data = "day";
  items: any = {
    day: [
      {
        name: "День",
        periud: ["00","01","02","03","04","05","06","07","08","09","10","11","12"],
        param: [2, 13, 12, 8, 5, 9, 11, 19, 2, 13, 12, 8, 5]
      }
    ],
    week: [
      {
        name: "Неделя",
        periud: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        param: [11, 1, 5, 18, 15, 10, 1]
      }
    ],
    month: [
      {
        name: "Месяц",
        periud: ["Ян","Фв","Мр","Ап","Ма","Ию","Ил","Ав","Сн","Ок","Нб","Дк"],
        param: [7, 15, 17, 18, 3, 2, 14, 17, 8, 15, 4, 11]
      }
    ],
    year: [
      {
        name: "Год",
        periud: ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"],
        param: [7, 16, 2, 18, 15, 10, 1, 7, 7, 16, 2, 18, 15]
      }
    ]
  };

  getItems() {
    console.log(this.items[this.data][0].name);    
    return this.items[this.data][0].name;
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    this.ctx = document.getElementById("myChartDiogram");
    this.chart = new Chart(this.ctx, {
      type: "line",
      data: {
        labels: this.items[this.data][0].periud,
        datasets: [
          {
            data: this.items[this.data][0].param,
            borderColor: "#488aff",
            fill: false,
            borderWidth: 3
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }
}
