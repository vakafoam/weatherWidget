import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'speedUnit'
})

export class SpeedUnitPipe implements PipeTransform {
    transform(speed: number, unitType: string) {
        switch(unitType) {
            case "kph":
            const miles = Number(speed * 1.6).toFixed(1);   // rounding
            return miles + "kph";
            
            default: 
            return Number(speed).toFixed(1) + "mph";
        } 
    }
}