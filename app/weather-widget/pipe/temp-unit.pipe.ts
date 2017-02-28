import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "tempUnit"
})

export class TempUnitPipe implements PipeTransform {
    transform(temp: number, unitType: string) {
        switch(unitType) {
            case "celsius":
            const celsius = (temp-32)*0.5556;
            return celsius;
            case "fahrenheit":
            return temp;
        }
    }
}