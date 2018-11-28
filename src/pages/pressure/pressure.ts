import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { Chart } from "chart.js";

/**
 * Generated class for the PressurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pressure',
  templateUrl: 'pressure.html',
})

export class PressurePage {
  ctx: any;
  chart: Chart;
  data = "day";
  items: any = {
    day: [
      {
        name: "День",
        period: ["00","01","02","03","04","05","06","07","08","09","10","11","12"],
        param: [2, 13, 12, 8, 5, 9, 11, 19, 2, 13, 12, 8, 5]
      }
    ],
    week: [
      {
        name: "Неделя",
        period: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        param: [11, 1, 5, 18, 15, 10, 1]
      }
    ],
    month: [
      {
        name: "Месяц",
        period: ["Ян","Фв","Мр","Ап","Ма","Ию","Ил","Ав","Сн","Ок","Нб","Дк"],
        param: [7, 15, 17, 18, 3, 2, 14, 17, 8, 15, 4, 11]
      }
    ],
    year: [
      {
        name: "Год",
        period: ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"],
        param: [7, 16, 2, 18, 15, 10, 1, 7, 7, 16, 2, 18, 15]
      }
    ]
  };

  getItems() {
    console.log(this.items[this.data][0].name);    
    return this.items[this.data][0].name;
  }

  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    this.ctx = document.getElementById("myChartDiagram");
    this.chart = new Chart(this.ctx, {
      type: "line",
      data: {
        labels: this.items[this.data][0].period,
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

  doPrompt() {
    let alert = this.alertCtrl.create({
      title: "Добавление",
      message: "Введите показатели вареабельности пульса",
      inputs: [
        {
          name: "date",
          placeholder: "Дата"
        },
        {
          name: "time",
          placeholder: "Время"
        },
        {
          name: "pulse",
          placeholder: "Показатели"
        }
      ],
      buttons: [
        {
          text: "Назад",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Сохранить",
          handler: inputs => {
            console.log(inputs);
          }
        }
      ]
    });
    alert.present();
  }
}