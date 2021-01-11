import * as Highcharts from 'highcharts';

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {

  public takeVale: FormGroup;
  chartOptions: {};
  Highcharts = Highcharts;
  public value = ""
  constructor(
    private fb: FormBuilder
  ) { }

  public arr = ['Read more on installation with ', 'but in these cases the loading location is', 'Read more on installation with', 'Working with data in the), or printed inline i']

  public checkedValue : boolean = false
  ngOnInit(): void {

    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Die Chart',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '110%'
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
          ['Chrome', 48.9],
          ['Firefox', 23.29],
          ['Internet Explorer', 13],
          ['Edge', 3.78],
          ['Safari', 3.42],
          {
            name: 'Other',
            y: 7.61,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    }
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);

    this.takeVale = this.fb.group({
      mainValue : ['',Validators.required]
    })

  }

  onSubmit(){
    this.arr.unshift(this.takeVale.get('mainValue').value)
    this.takeVale.reset()
  }

  deleteItem(i : number){
    this.arr.forEach((value,index)=>{
      if (index==i) {
        this.arr.splice(index,1);
        return this.arr
      }else{
        return this.arr
      }
    })
  }

}
